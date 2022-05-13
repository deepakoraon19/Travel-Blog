
var totalImages = document.querySelectorAll(".dest-img").length;
var currentImg=0;

let img = document.getElementsByClassName("dest-img");
let i=0;
img[i].classList.add("display");

let _next=  function yoyo(){

    img[i].classList.remove("display");
    if(i==totalImages-1)
    {
        i=0;
        img[i].classList.add("display");
    }
    else{
        img[++i].classList.add("display");

    }
}


document.querySelector(".right-button").addEventListener('click', _next);

// document.querySelectorAll(".dest-img")[0].style.display="block";
// showImg(0);
// document.querySelector(".left-button").addEventListener('click', ()=>
// {currentImg--
// showImg(currentImg);}
// );
// document.querySelector(".right-button").addEventListener('click', ()=>
// {currentImg++;
//     showImg(currentImg);}
// );;

// function showImg(n){
//     if(n>totalImages-1 || n<0)
//     {
//         currentImg=0;
//     }
//     else{
//         for(var i=0;i<totalImages;i++)
//         {
//             document.querySelectorAll(".dest-img")[i].style.display="none";   
//             console.log(i);        

//         }
//         document.querySelectorAll(".dest-img")[n].style.display="block";
//     }

// }



