export default class List<T> {
  list: T[];

  constructor(list: T[]) {
    this.list = list;
  }

  remove(i: number) {
    this.list.splice(i, 1);
  }
}
