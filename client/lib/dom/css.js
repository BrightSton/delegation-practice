function addClass(node, className) {
  if (typeof node === "string") node = getNode(node);

  if (typeof className !== "string") {
    typeError("addClass 함수의 두 번째 인자에는 문자 타입이 와야 합니다.");
  }
  node.classList.add(className);
}

// 변경하기 : 대상의 클라스를 지운다.
function removeClass(node, className) {
  if (typeof node === "string") node = getNode(node);

  if (!className) {
    node.className = "";
    return;
  }
  if (typeof className !== "string") {
    typeError("removeClass 함수의 두 번째 인자에는 문자 타입이 와야 합니다.");
  }
  node.classList.remove(className);
}

function toggleClass(node, className) {
  if (typeof node === "string") node = getNode(node);

  if (typeof className !== "string") {
    typeError("toggleClass 함수의 두 번째 인자에는 문자 타입이 와야 합니다.");
  }
  node.classList.toggle(className);
}

// JS에선 객체의 key, value 값을 변수로 받기 위해서는 . 사용 x
// -> 따라서 [ ] 각 괄호 표기 법으로 표현
function getCss(node, prop) {
  if (typeof node === "string") node = getNode(node);
  if (!(prop in document.body.style)) {
    syntaxError(
      "getCss 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다."
    );
  }
  return getComputedStyle(node).prop;
}

// 대상에게 원하는 css 속성을 추가 = set
function setCss(node, prop, value) {
  if (typeof node === "string") node = getNode(node);
  if (!(prop in document.body.style)) {
    syntaxError(
      "getCss 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다."
    );
  }
  if (!value) {
    syntaxError("setCss 함수의 세 번째 인자는 필수값 입니다.");
  }
  node.style[prop] = value;
}

const css = (node, prop, value) =>
  !value ? getCss(node, prop) : setCss(node, prop, value);
