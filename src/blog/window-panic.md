---
title: Window panic
description: Beware of small changes when you configure the window of a Tauri app.
date: 2025-05-27
---

Develop a Tauri application [with the right prompt](/echo-location) and eventually, on desktop, up pops a window.

```sh
pnpm tauri dev
```

The result appears with fixed dimensions, always in the same spot, but you can change both traits in `tauri-config.json`.

```json
{
  // --
  "app": {
    "windows": [
      {
        "x": 10,
        "y": 10,
        "width": 500,
        "height": 300
      }
    ]
  }
}
```

And also, through two plugins designed to create a more consistent experience. Just be warned that with Tauri 2.0 you have the opportunity to extend your project to cover Android and iOS. Here there is no window and you need to oil a few rusty joints to future-proof your code.

## State

[The `window-state` plugin](https://v2.tauri.app/plugin/window-state/) is almost too short in its promise and function. Install the dependency through Tauri's CLI.

```sh
pnpm tauri add window-state
```

And you are done. You can manage the window, drag and resize the interface any way you'd so choose. When you then relaunch the application you are greeted by the window in its previous, preserved state.

Behind the scenes the instruction updates the capabilities of your application adding `desktop.json` next to the default JSON file. Here Tauri enables the plugin through the `permissions` field, only for macOS, Windows and Linux.

```json
{
  // ..
  "platforms": ["macOS", "windows", "linux"],
  "permissions": ["window-state:default"]
}
```

In `lib.rs` then, the command includes the plugin when creating the app through the default's builder.

```rs
tauri::Builder::default()
  .plugin(tauri_plugin_window_state::Builder::new().build())
  // ..
```

This is the default implementation and on desktop the plugin already works without further modification. There is a stutter before the window assumes the old state and for this [the documentation](https://v2.tauri.app/plugin/window-state/#usage) suggests to first hide the window in `tauri-config.json`.

```json
{
  // ..
  "app": {
    "windows": [
      {
        // ..
        "visible": false
      }
    ]
  }
}
```

When the app is built the plugin restores the visibility once the state is restored.

Again, this works _on desktop_. On mobile the logic doesn't have the same success, and not for the reasons you might expect. The issue is not that without the plugin the app will never be visible as the `visible` flag will always be `false`. On mobile there is no window and the option doesn't change the appearance in the first place. The problem is that there is no plugin at all, and any code referring to the library in `lib.rs` is liable to cause a fatal crash.

```text
error[E0433]: failed to resolve: use of unresolved module or unlinked crate `tauri_plugin_window_state`
```

Peek in the `src-tauri` folder for the backend logic, specifically at `Cargo.toml`, and you find list of the dependencies installed by Tauri. Think of the file as the counterpart to the frontend `package.json`, to install Rust crates instead of npm packages. In this file the plugin is indeed set to exclude the mobile platforms.

```toml
[target.'cfg(not(any(target_os = "android", target_os = "ios")))'.dependencies]
tauri-plugin-window-state = "2"
```

Meaning, you need to condition the code when running the app. One way to achieve this is in `lib.rs`, where instead of chaining the plugins on the default instance, you first create a mutable reference to the builder. Rust allows to then scope a block of code to run only on desktop with a specific `cfg` attribute, where you can modify the builder to pick up the plugin.

```rs
pub fn run() {
  let mut builder = tauri::Builder::default();
  #[cfg(desktop)]
  {
    builder = builder.plugin(tauri_plugin_window_state::Builder::new().build());
  }
  // ..builder
}
```

The code is not perfect. Developing the application on mobile prompts a warning as the compiler detects `builder` never changes, and therefore doesn't need to be marked with the `mut` keyword, but the issue is of my own making and beginner's knowledge of the Rust language. The instance might be mutated, and I don't have a way, yet, to alert of the change. Even if warned, the application works on mobile as well. Better yet, the logic remains valid for the second plugin. Not to keep state, but to position the window in a predictable place.

# Position

Reportedly a port of a similar utility for Electron, [the `positioner` plugin](https://v2.tauri.app/plugin/positioner/) might make more sense as an alternative to the `window-state`, but you can technically use both, perhaps to reposition window with JavaScript at precise locations following a specific action.

Install the plugin and Tauri updates the permissions for desktop environments, exactly as with `window-state`.

```json
{
  // ..
  "platforms": ["macOS", "windows", "linux"],
  "permissions": ["positioner:default"]
}
```

Following the same pattern, `lib.rs` is refreshed to initialize the plugin once and again for all.

```rs
tauri::Builder::default()
  .plugin(tauri_plugin_positioner::init())
  // ..
```

You are faced with the same breaking error for "_use of unresolved module or unlinked crate_", and you can work around the mishap with the block configuring the builder only on desktop.

```rs
let mut builder = tauri::Builder::default();
#[cfg(desktop)]
{
  builder = builder.plugin(tauri_plugin_positioner::init())
}
// ..builder
```

Now, there are JavaScript bindings to position the window from the frontend, perhaps at the press of a button or a well-chosen shortcut. But even with Rust, and even at startup, you can set a preference. The code follows the plugin in a `setup` function, where the first argument describes the app. Here you can create the window and place it in one of the spots enumerated through the plugin's `Position`.

```rs
builder = builder
  .plugin(tauri_plugin_positioner::init())
  .setup(|app| {
    use tauri::Manager;
    use tauri_plugin_positioner::{Position, WindowExt};

    let win = app.get_webview_window("main").unwrap();
    let _ = win.as_ref().window().move_window(Position::Center);
    Ok(())
  });
```

Note the `use` statements in the block of the function. You can add the dependencies anywhere in the scope of the desktop configuration, but not in the parent scope. Once more the plugin would break on the more slender previews. `tauri::Manager` is technically available, but it still makes sense to include the mention only as needed, for the plugin.

Run the app and the window appears in the very center. And if you lament that the window "glitches" before assuming its rightful place, the suggestion for `window-state` helps to cope with the small hiccup.

1. hide the window in `tauri.config.json`

2. restore the visibility once you are done, with the `show` method on the finally positioned view

   ```rs
   {
      let win = app.get_webview_window("main").unwrap();
      let _ = win.as_ref().window().move_window(Position::Center);
      let _ = win.show();
      Ok(())
   }
   ```
