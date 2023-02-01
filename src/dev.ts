import run from './main';

window.addEventListener('dblclick', () =>
  run({
    wrapWords: {
      active: true,
      class: 'abc',
    },
  })
);
