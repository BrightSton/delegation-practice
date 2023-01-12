const data = [
  {
    id: 1,
    src: "visual1.jpg",
    alt: "모던한 테이블과 화분의 조화를 표현한 공간",
  },
  {
    id: 2,
    src: "visual2.jpg",
    alt: "강렬한 의자의 색상과 따뜻한 느낌의 공간",
  },
  {
    id: 3,
    src: "visual3.jpg",
    alt: "호텔 라운지 느낌의 편안한 의자가 있는 공간",
  },
  {
    id: 4,
    src: "visual4.jpg",
    alt: "물방을 모양의 독특한 디자인의 의자들을 나열한 공간",
  },
];

// 네비게이션에 이벤트를 건다.
// 핸들러를 연결한다.
// 이벤트 객체에서 타겟을 찾는다.

const navigation = getNode(".navigation");
//const list = getNodes(".navigation > li");
const visualImage = getNode(".visual img");

//  console.log(navigation);

function makeArray(arrayLike) {
  // 유사배열 중에서 forEach가 포함되어 있지 않아서 Array로 형변환 필요
  return Array.from(arrayLike);
  // let arr = [...list]
  // Array.prototype.slice.call(list)
}

function handler(e) {
  let target = e.target.closest("li");
  if (!target) return;

  let list = makeArray(navigation.children);
  let index = attr(target, "data-index");

  list.forEach((item) => removeClass(item, "is-active"));

  attr(visualImage, "src", `./assets/part01/${data[index - 1].src}.jpg`);
  attr(visualImage, "alt", data[index - 1].alt);

  addClass(target, "is-active");
}

navigation.addEventListener("click", handler);
