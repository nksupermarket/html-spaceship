export default function (className: string) {
  document.querySelectorAll('.' + className).forEach((b) => {
    console.log(b.textContent);
    b.innerHTML = b.textContent
      ?.replace(/[^ -~]+/g, '')
      .split(' ')
      .filter((w) => w !== '')
      .map((w) => {
        return `<span class="shootable_el" style="display:inline-block;">${w}&nbsp;</span>`;
      })
      .join('') as string;
  });
}
