document.querySelectorAll('.abc').forEach((b) => {
  b.innerHTML = b.textContent
    ?.split(' ')
    .filter((w) => w !== '')
    .map(
      (w) =>
        `<span class="shootable_el boundary" style="display:inline-block;">${w}</span>`
    )
    .join(' ') as string;
});
