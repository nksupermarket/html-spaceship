function wrapWords(str: string) {
  return str.split(' ').map((w) => <span className="shootable_el">{w}</span>);
}
