export default function (className: string) {
  document.querySelectorAll('.' + className).forEach((b) => {
    b.innerHTML = b.textContent
      ?.split(' ')
      .filter((w) => w !== '')
      .map(
        (w) =>
          `<span class="shootable_el" style="display:inline-block;">${w} </span>`
      )
      .join('') as string;
  });
}
