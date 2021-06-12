var slides = document.querySelectorAll("#slides>img");
var prev = document.getElementById("prev");
var next = document.getElementById("next");

var current = 0; //표시할 이미지 위치.
showSlides(current);
prev.onclick = prevSlide;
next.onclick = nextSlide;

/*n번째 슬라이드를 화면에 표시하는 함수.*/
function showSlides(n){
    for(var i=0; i<slides.length; i++){
        slides[i].style.
        display ="none";
    }
    slides[n].style.display = "flex";
}

function prevSlide(){
    if(current>0) current -=1; //현재 이미지가 첫번째가 아닐 경우 -1한 위치로.
    else current = slides.length -1;
    showSlides(current);
}

function nextSlide(){
    if(current<slides.length-1) current += 1;
    else current = 0;
    showSlides(current);
}