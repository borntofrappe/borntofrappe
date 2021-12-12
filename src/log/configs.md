---
Title: Configs
entry: 10
---

Slowly, but surely, the blog is taking shape. I'm even starting to deviate from the default options offered by `mdsvex` to create a more custom layout and design. Consider for instance the headings. The goal is to add an anchor link element to function as a permalink, a useful reference moving focus to the heading directly. This is achieved with two `rehype` plugins:

- `-slug` to add an identifier to the headings

- `-auto-link` to add the markup for the anchor link

It seems the first package is necessary for the second, since auto link works on existing `id` attributes.

Past headings, consider code snippets. Here the markup is a bit more muddled as it is modified in the function highlighting code fences with `shiki`. Would it be more appropriate to use a remark plugin to modify the markup first? The goal is to wrap the code in a generic container with a specific class. In this container, then, the idea is to add a label for the language and a nice vector icon describing the same value. The syntax for the icons is exported from `icons.js`. It works, but again I wonder if there is a proper way to setup the environment. Is there a proper way in the first place? The mind starts to wonder. Anyhow, the highlighting function already modifies the markup through the somehow confusing syntax necessary for `mdsvex`. The syntax I did not want to talk about a few entries ago. So the container, label and icon are injected there.
