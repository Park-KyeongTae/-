//0413 오전 2교시

// orange 클래스 부착
// tab.js ==> forEach(== for) 변경

// const arr = [1, 2, 3, 4];
// for (let i = 0; i < 배열길이; i++) {
//   // 첫번째 요소 가져오기
//   let 가져온요소 = 배열명[i];

//   console.log(가져온요소);
// }

// // 가져온요소 = item
// arr.forEach((item, idx) => {
//   console.log(item);
//   console.log(idx);
// });

// tab-button 찾기
const tabbtns = document.querySelectorAll(".tab-button");

// tab-content 찾기
const contents = document.querySelectorAll(".tab-content");

//
tabbtns.forEach((tabbtn, idx) => {
  tabbtn.addEventListener("click", (e) => {
    //모든 tab-button의 orange 제거
    tabbtns.forEach((item) => {
      item.classList.remove("orange");
    });
    //현재 클릭이 된 tab-button 만 orange 부착
    e.target.classList.add("orange");

    //모든 tab-content의 show 제거
    contents.forEach((content) => {
      content.classList.remove("show");
    });
    //현재 클릭이 된 tab-button 순서에 맞는 tab-content 보여주기
    contents[idx].classList.add("show");
  });
});
