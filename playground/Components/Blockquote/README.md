Use the syntax described in `quote.svg`.

## Pseudo Elements

Flip the graphic for one of the pseudo element

- with a negative scale.

  ```css
  blockquote::after {
    transform: translate(-50%, -50%) scale(-1);
  }
  ```

- with half a rotation.

  ```css
  blockquote::after {
    transform: translate(-50%, -50%) rotation(0.5turn);
  }
  ```
