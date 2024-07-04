function press(){

const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const img = document.querySelector('.img1');
const randomImage = `dice${randomNumber1}.png`;
img.setAttribute('src', randomImage);

const randomNumber2 = Math.floor(Math.random() * 6) + 1;
const img2 = document.querySelector('.img2');
const randomImage2 = `dice${randomNumber2}.png`; 
img2.setAttribute('src', randomImage2);

const heading=document.getElementById("hello");
if(randomNumber1==randomNumber2){
    heading.textContent="DRAW";
}
if(randomNumber1>randomNumber2){
    heading.textContent="PLAYER 1 WINS";
}
if (randomNumber1<randomNumber2){
    heading.textContent="PLAYER 2 WINS";
}
}