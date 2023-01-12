function getNode(element) {
  if (typeof element !== "string") {
    throw new Error("getNode 함수의 인자는 문자 타입 이여야 합니다.");
  }
  return document.querySelector(element);
}

function getNodes(element) {
  if (typeof element !== "string") {
    throw new Error("getNodes 함수의 인자는 문자 타입 이여야 합니다.");
  }
  return document.querySelectorAll(element);
}
