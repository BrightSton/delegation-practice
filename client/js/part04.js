const contents = getNode(".contents");
const textField = getNode("#comment37");

function clearText(target) {
  target.value = "";
}

function handler(e) {
  let target = e.target;

  while (!attr(target, "data-name")) {
    target = target.parentNode;

    if (target.nodeName === "BODY") {
      target = null;
      return;
    }
  }

  if (target.dataset.name === "like") {
    console.log("like!");
    toggleClass(target, "active");
  }

  if (target.dataset.name === "comment") {
    textField.focus();
  }

  if (target.dataset.name === "send") {
    console.log(textField.value);
    let template = /* html */ `
    <div class="id">
    <div class="profile_img border_over"><img src="./assets/part03/tiger.png" alt=""></div>
        <div class="comment_field">
            <div class="text_container">
                <div class="name"><a href="#">심선범</a></div>
                <div class="text_field">${textField.value}</div>
            </div>
        </div>
    </div>
    `;
    insertLast(".comment_container", template);

    textField.value = "";
  }
}

contents.addEventListener("click", handler);

// 엔터키를 이용한 댓글 달기
textField.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    textField.value;

    let template = /* html */ `
      <div class="id">
      <div class="profile_img border_over"><img src="./assets/part03/tiger.png" alt=""></div>
          <div class="comment_field">
              <div class="text_container">
                  <div class="name"><a href="#">심선범</a></div>
                  <div class="text_field">${textField.value}</div>
              </div>
          </div>
      </div>
      `;
    insertLast(".comment_container", template);

    clearText(textField);
  }
});
