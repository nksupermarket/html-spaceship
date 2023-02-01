import run from './main';

window.addEventListener('dblclick', () =>
  run({
    wrapWordsClass: 'abc',
    removedClass: 'removed',
  })
);
