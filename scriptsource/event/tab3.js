// 04 13 오전 3교시
// tab.js ==> 이벤트 버블링 변경
// 이벤트 버블링 : 자식에서 발생한 이벤트가 부모로 전달
// e.target : 이벤트가 일어난 대상
// e.currentTarget : 이벤트가 일어난 대상 + 버블링 된 대상

// 이벤트 대상(tab-button) => 부모(ul) 에게 이벤트가 전달
const tabparent = document.querySelector(".list");
const tabbtns = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".tab-content");

// tabbtns.forEach((tabBtn) => {
//   tabBtn.addEventListener("click", (e) => {
//     console.log(e.currentTarget.className);
//   });
// });

function tabOpen(idx) {
  //모든 tab-button의 orange 제거
  tabbtns.forEach((item) => {
    item.classList.remove("orange");
  });

  //모든 tab-content의 show 제거
  contents.forEach((content) => {
    content.classList.remove("show");
  });

  //현재 클릭이 된 tab-button 만 orange 부착
  tabbtns[idx].classList.add("orange");

  //현재 클릭이 된 tab-button 순서에 맞는 tab-content 보여주기
  contents[idx].classList.add("show");
}

// tabparent.addEventListener("click", (e) => {
//   // console.log(e.currentTarget.className);
//   // console.log(e.target);

//   if (e.target == tabbtns[0]) {
//     tabOpen(0);
//   } else if (e.target == tabbtns[1]) {
//     tabOpen(1);
//   } else {
//     tabOpen(2);
//   }
// });

// data- 이용 : 조건문 안 쓸려고
// data- : 전용속성
//       - 다음에는 이름 자유롭게

// <h1 data-index-number="1234">헤드</h1>
// data-index-number(지정) : dataset.indexNumer(접근)
// const h1 = document.querySelector("h1")
// h1.dataset.indexNumber

tabparent.addEventListener("click", (e) => {
  // 이벤트가 일어난 대상의 data- 값 가져오기
  tabOpen(e.target.dataset.id); // data-은 dataset로
});
