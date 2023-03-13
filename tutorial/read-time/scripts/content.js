const article = document.querySelector("article");

if (article) {
  const text = article.textContent;
  const wordMatchRegExp = /[^\s]+/g;
  const words = text.matchAll(wordMatchRegExp);
  const wordCount = [...words].length;
  const readingTime = Math.round(wordCount / 200);
  const badge = document.createElement("p");
  badge.classList.add("color-red");
  badge.textContent = `⚠️ ${readingTime}min to read!`;
  const heading = article.querySelector("h1");
  const date = article.querySelector("time")?.parentNode;

  (date ?? haeding).insertAdjacentElement("afterend", badge);
}
