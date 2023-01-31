# HTML Spaceship

This library adds a spaceship onto your web page. The main file exports a run function that takes in a config object.

```
const config: Config = {
  keys: {
    left: 'ArrowLeft',
    right: 'ArrowRight',
    up: 'ArrowUp',
    down: 'ArrowDown',
    deactivate: 'Escape'
  },
  wrapWords: {
    active: true,
    class: 'word-wrap'
  }
};
```

The `keys` property allows you to define the keys responsible for the movement and the key you want to use to deactivate the program.

The `wrapWords` property allows you to make the words shoot-able. The program will take all the elements with the class name defined in `wrapWords.class` and wrap each word in a span element with the class name `"shootable-el"`.
