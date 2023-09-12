export function wrapWords(className: string) {
  document.querySelectorAll("." + className).forEach((b) => {
    b.innerHTML = b.textContent
      ?.replace(/[^ -~]+/g, "")
      .split(" ")
      .filter((w) => w !== "")
      .map((w) => {
        return `<span class="shootable_el" style="display:inline-block;">${w}&nbsp;</span>`;
      })
      .join("") as string;
  });
}
