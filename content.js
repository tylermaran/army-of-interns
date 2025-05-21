// Replace every standalone “AI” (case-insensitive, word boundary) with “the army of interns”.
const RE = /\bAI\b/gi;

/* Elements where we should **not** touch text (user-editable areas) */
const EDITABLE_SELECTOR =
  'input, textarea, [contenteditable]:not([contenteditable="false"])';

/* Helper: is this text node inside something editable? */
const isInEditable = (node) =>
  node.parentElement && node.parentElement.closest(EDITABLE_SELECTOR);

/* Replace in one node, then recurse */
const replaceInNode = (node) => {
  if (
    node.nodeType === Node.TEXT_NODE &&
    RE.test(node.textContent) &&
    !isInEditable(node)
  ) {
    node.textContent = node.textContent.replace(RE, "the army of interns");
  } else {
    node.childNodes.forEach(replaceInNode);
  }
};

/* Initial sweep */
replaceInNode(document.body);

/* Watch for future DOM changes (SPA, infinite scroll, etc.) */
const obs = new MutationObserver((muts) => {
  muts.forEach((m) => m.addedNodes.forEach(replaceInNode));
});
obs.observe(document.body, { childList: true, subtree: true });
