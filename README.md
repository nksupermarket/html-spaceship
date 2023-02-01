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
  wrapWordsClass: 'wrap',
  removedClass: 'removed',
  theme: 'light'
};

// to lazy load
(await import('html-spaceship')).default(config);

//regular import
import runSpaceship from 'html-spaceship'
runSpaceship(config)
```

The `keys` property allows you to define the keys responsible for the movement and the key you want to use to deactivate the program.

The `wrapWordsClass` property allows you to attach a class signifying which words are shoot-able. The program will take all the elements with the class name defined in `wrapWordsClass` and wrap each word in a span element with the class name `"shootable-el"`.

The 'removedClass' serves as the class that styles elements that have been destroyed. This is the only non-optional property.
