export function enableElement(node) {
  node.disabled = false;
}

export function disableElement (node) {
  node.disabled = true;
}

export function visibleElement(node) {
  node.hidden = false;
}

export function invisibleElement(node) {
  node.hidden = true;
}

/* -------------------------------------------------------------------------- */

export function isEnableState(node) {
  if (node.disabled === false) {
    return true;
  } else {
    return false;
  }
}

export function isVisibleState(node) {
  if (node.hidden === false) {
    return true;
  } else {
    return false;
  }
}