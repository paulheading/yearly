export default function (element) {
  let siblings = [];

  let parent = element.parentNode;
  let sibling = parent.firstChild;

  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== element) siblings.push(sibling);
    sibling = sibling.nextSibling;
  }

  return siblings;
}
