//eventListener for the button that then tells the photos to slide//

let src=["img/andre3k.avif", "img/jamila.jpg", "img/missy.jpeg", "img/duckwrth.jpg", "img/lupe.jpg", "img/badbunny.png", "img/lauryn.png", "img/stevie.jpeg", "img/saba.png", "img/mosdef.jpg"]


let coincount = 1000
document.querySelector('.coincount').innerText = coincount

document.querySelector('.smallcoin').addEventListener('click', run)

document.querySelector('.largecoin').addEventListener('click', run2)

document.querySelector('.feelinglucky').addEventListener('click', run3)

function run () {
coincount = coincount - 5;
document.querySelector('.coincount').innerText = coincount
document.querySelector(".cardimage1 img").src = chooseRandomImgForPhoto()
document.querySelector(".cardimage2 img").src = chooseRandomImgForPhoto()
document.querySelector(".cardimage3 img").src = chooseRandomImgForPhoto()
if (coincount <= 1){
    document.querySelector('.smallcoin').removeEventListener ('click', run);
}
}

//    document.querySelector('.smallcoin').removeEventListener("mousedown", handleMouseDown, {capture: true});//


//build a disable function so that disabling is not based on the button being clicked//

function run2 () {
    coincount = coincount - 50;
document.querySelector('.coincount').innerText = coincount
document.querySelector(".cardimage1 img").src = chooseRandomImgForPhoto()
document.querySelector(".cardimage2 img").src = chooseRandomImgForPhoto()
document.querySelector(".cardimage3 img").src = chooseRandomImgForPhoto()
if (coincount == 0){
    document.querySelector('.largecoin').disabled = true;
}
}

function run3 () {
    if (coincount == 500){
        //find a way to change color of innertext //
    coincount = coincount - 500;
    document.querySelector('.coincount').innerText = coincount
    document.querySelector(".cardimage1 img").src = chooseRandomImgForPhoto()
    document.querySelector(".cardimage2 img").src = chooseRandomImgForPhoto()
    document.querySelector(".cardimage3 img").src = chooseRandomImgForPhoto()
    if (coincount == 0){
        document.querySelector('.largecoin').disabled = true;
    }
    }
}
    



function chooseRandomImgForPhoto(){
    let choice = parseInt(Math.random()*src.length)
        return src [choice];
    }



document.querySelector(".cardimage1 img").src = chooseRandomImgForPhoto()
document.querySelector(".cardimage2 img").src = chooseRandomImgForPhoto()
document.querySelector(".cardimage3 img").src = chooseRandomImgForPhoto()



//querySelector so the images know how to slide//
/**
 * Images that will be chosen
* Element that we're changing
 * Mechanism for choosing the images randomly
*Changing the element
 */



//Need a way to make the photos slide//


//functions for the buttons//

/**
 * Function for subtraction of 5 and 50 credits
 * Function for Keeping count of money
 * Potential Function for I'm feeling lucky
 */

/*need something that changes the header text*/
