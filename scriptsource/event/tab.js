// orange 클래스 부착
// tab-버튼 누르면
// 모든 버튼에 붙은 orange 클래스명 제거
// tab-버튼0 orange 클래스명 부착

// classList.add / classList.remove

// 버튼 클릭에 맞춰 tab-content 보여주기
// show 클래스명 부착

// tab-button 찾기
const tabbtn0 = document.querySelector(".list > li:first-child");
const tabbtn1 = document.querySelector(".list > li:nth-child(2)");
const tabbtn2 = document.querySelector(".list > li:last-child");
// tab-content 찾기
const content0 = document.querySelector(".container > div:nth-child(2)");
const content1 = document.querySelector(".container > div:nth-child(3)");
const content2 = document.querySelector(".container > div:nth-child(4)");
// const content2 = document.querySelector(".container > div:last-child");

//
tabbtn0.addEventListener("click", () => {
  tabbtn0.classList.add("orange");
  tabbtn1.classList.remove("orange");
  tabbtn2.classList.remove("orange");

  content0.classList.add("show");
  content1.classList.remove("show");
  content2.classList.remove("show");
});
tabbtn1.addEventListener("click", () => {
  tabbtn0.classList.remove("orange");
  tabbtn1.classList.add("orange");
  tabbtn2.classList.remove("orange");

  content0.classList.remove("show");
  content1.classList.add("show");
  content2.classList.remove("show");
});
tabbtn2.addEventListener("click", () => {
  tabbtn0.classList.remove("orange");
  tabbtn1.classList.remove("orange");
  tabbtn2.classList.add("orange");

  content0.classList.remove("show");
  content1.classList.remove("show");
  content2.classList.add("show");
});












// content0.addEventListener("click", () => {
//   content0.classList.add("show");
//   content0.classList.remove("show");
//   content0.classList.remove("show");
// });
// content1.addEventListener("click", () => {
//   content0.classList.remove("show");
//   content1.classList.add("show");
//   content2.classList.remove("show");
// });
// content2.addEventListener("click", () => {
//   content0.classList.remove("show");
//   content1.classList.remove("show");
//   content2.classList.add("show");
// });
