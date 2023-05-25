// const sections = document.querySelectorAll('.section');
// const secBtns = document.querySelectorAll('.controlls');
// const secBtn = document.querySelectorAll('.control');
// const allSection = document.querySelector('.main-content');
// const themeBtn = document.querySelector('.theme-btn');

// function pageTransition() {
//   secBtn.forEach(btn => {
//     btn.addEventListener('click', function () {
//       let currentBtn = document.querySelectorAll('.active-btn');
//       currentBtn.classList.remove('active-btn');
//       this.classList.add('active-btn');
//     });
//   });
//   allSection.addEventListener('click', function (e) {
//     const id = e.target.dataset.id;
//     if (id) {
//       secBtns.forEach(btn => {
//         btn.classList.remove('active');
//       });
//       e.target.classList.add('active');

//       sections.forEach(section => {
//         section.classList.remove('active');
//       });
//       const element = document.getElementById(id);
//       element.classList.add('active');
//     }
//   });
// themeBtn.addEventListener('click',function(){
//     document.body.classList.toggle('light-mode');
// })
// }
// pageTransition();

(function () {
  [...document.querySelectorAll('.control')].forEach(button => {
    button.addEventListener('click', function () {
      document.querySelector('.active-btn').classList.remove('active-btn');
      this.classList.add('active-btn');
      document.querySelector('.active').classList.remove('active');
      document.getElementById(button.dataset.id).classList.add('active');
    });
  });
  document.querySelector('.theme-btn').addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
  });
})();
