const imageSet = JSON.parse(localStorage.getItem('Image'));
console.log(imageSet);
const imageContainer = document.querySelector(".images");
const circleContainer = document.querySelector(".slideshowCircles");
const images = document.getElementsByClassName("image");
const circles = document.getElementsByClassName("fa-circle");
const clickCircles = document.querySelectorAll(".fa-circle");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");

let counter = 0;

window.onload = function(){
  imageBody();
  imageRemover();
  image(counter);
  setInterval(rightClick, 4000);
};

//Render Image Body
function imageBody(){
  for (i=0; i<imageSet.length; i++) {
    //Images
    const div = document.createElement('div');
    div.style.background = `url('Resources/${imageSet[i].Name}')`;
    div.classList.add('image');
    imageContainer.append(div);
    
    //Circles
    const span = document.createElement('span');
    span.classList.add('far');
    span.classList.add('fa-circle');
    circleContainer.append(span);
  }
}

//Images Adder
function image(counter){
  images[counter].classList.add('visible');
  circles[counter].classList.add('fas');
};

//Images Remover
function imageRemover(){
  for (i=0; i<imageSet.length; i++) {
    images[i].classList.remove('visible');
    circles[i].classList.remove('fas');
  }
};

//LeftArrow Click
leftArrow.addEventListener('click',function(){
  imageRemover();
  if(counter == 0){
    counter = imageSet.length-1;
    image(counter);
  }else{
    counter--;
    image(counter);
  }
});

//RightArrow Click
rightArrow.addEventListener('click',rightClick);
function rightClick(){
  imageRemover();
  if(counter == imageSet.length-1){
    counter = 0;
    image(counter);
  }else{
    counter++;
    image(counter);
  }
};

// //Circles Click
// for (i=0; i<imageSet.length; i++){
//   // circles[1].addEventListener('clikc',function(){
//     console.log("Hello");
//   // });
// }
// console.log(circles);
// // console.log(clickCircles);
