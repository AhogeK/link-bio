const docEl = document.documentElement;
const size = docEl.style.fontSize;
const reHtmlFontSize = function () {
  if (docEl.clientWidth <= docEl.clientHeight) {
    docEl.style.fontSize = 10 * (docEl.clientWidth / 320) + 'px';
  } else {
    docEl.style.fontSize = 10 * (docEl.clientHeight / 320) + 'px';
  }
}
window.addEventListener('resize', reHtmlFontSize, false);
window.addEventListener('DOMContentLoaded', reHtmlFontSize, false);