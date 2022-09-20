import React from 'react';

export default function wrapWords(str: string) {
  return str
    .split(' ')
    .map((w: string) => <span className="shootable_el">{w}</span>);
}
