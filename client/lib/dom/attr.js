function getAttr(node, prop) {

  if (typeof node === 'string') {
    node = getNode(node);
  }

  return node.getAttribute(prop);
}

/* -------------------------------------------------------------------------- */

function setAttr(node, prop, value) {
  if (typeof node === 'string') {
    node = getNode(node);
  }
  
  if (typeof prop !== 'string') {
    throw new Error('setAttr 함스의 두 번째 인수는 문자열이어야 합니다.');
  }

  if (!node[prop] && prop !== 'class' && prop !== 'title') {
    node.dataset[prop] = value;
    return;
  }

  node.setAttribute(prop, value);
}

/* -------------------------------------------------------------------------- */

function attr(node, prop, value) {
  if (!value) {
    return getAttr(node, prop);
  } else {
    setAttr(node, prop, value);
  }
}

const arrowAttr = (node, prop, value) => !value ? getAttr(node, prop) : setAttr(node, prop, value);
