import React from 'react';

export default function wrapWords(
  str: string,
  {
    last,
    boundary,
  }: {
    last?: boolean;
    boundary?: boolean;
  }
) {
  // takes a string and wraps each word in a jsx span node
  return str.split(' ').map((w: string, i, arr) => {
    const rootClass = ['shootable_el'];

    if (last && i === arr.length - 1) rootClass.push('last');
    if (boundary) rootClass.push('boundary');

    return (
      <span key={i} className={rootClass.join(' ')}>
        {w}&nbsp;
      </span>
    );
  });
}
