//eventListener for the button that then tells the photos to slide//

let src=["img/andre3k.avif", "img/jamila.jpg",  "img/missy.jpeg", "img/duckwrth.jpg", "img/lupe.jpg", "img/badbunny.png", "img/lauryn.png", "img/stevie.jpeg", "img/saba.png", "img/mosdef.jpg"]
//let src=["img/andre3k.avif", "img/jamila.jpg", "img/missy.jpeg", "img/duckwrth.jpg", "img/lupe.jpg", "img/badbunny.png", "img/lauryn.png", "img/stevie.jpeg", "img/saba.png", "img/mosdef.jpg"]//

let coincount = 1000
document.querySelector('.coincount').innerText = coincount

document.querySelector('.smallcoin').addEventListener('click', run)

document.querySelector('.largecoin').addEventListener('click', run2)

document.querySelector('.feelinglucky').addEventListener('click', run3)


function disableButtons (){
    document.querySelector('.feelinglucky').disabled = false;
    document.querySelector('.largecoin').disabled = false;
    document.querySelector('.smallcoin').disabled = false;
    if (coincount <= 4){
        document.querySelector('.smallcoin').disabled = true;
        const header = document.getElementById("labelhead");
    const ogHead = header.innerHTML;
    header.innerHTML = 'You Let the Music Die 😔';
    }
    if (coincount < 50){
        document.querySelector('.largecoin').disabled = true;
    }
     if (coincount != 500){
        document.querySelector('.feelinglucky').disabled = true;
    }
}

function run () {
coincount = coincount - 5;
document.querySelector(".cardimage1 img").src = chooseRandomImgForPhoto()
document.querySelector(".cardimage2 img").src = chooseRandomImgForPhoto()
document.querySelector(".cardimage3 img").src = chooseRandomImgForPhoto()
if (document.querySelector(".cardimage1 img").src == document.querySelector(".cardimage2 img").src && document.querySelector(".cardimage2 img").src  == document.querySelector(".cardimage3 img").src){
    alert("You Win - Take 250 Coins!")
    const header = document.getElementById("labelhead");
    const ogHead = header.innerHTML;
    header.innerHTML = 'You\'re A Winner!!';
    setTimeout(() => {
       header.innerHTML = ogHead;
    }, 1000);
    coincount = coincount + 250;
      }
{
document.querySelector('.coincount').innerText = coincount
disableButtons ()
}
}


function run2 () {
    coincount = coincount - 50;
document.querySelector(".cardimage1 img").src = chooseRandomImgForPhoto()
document.querySelector(".cardimage2 img").src = chooseRandomImgForPhoto()
document.querySelector(".cardimage3 img").src = chooseRandomImgForPhoto()
if (document.querySelector(".cardimage1 img").src == document.querySelector(".cardimage2 img").src && document.querySelector(".cardimage2 img").src  == document.querySelector(".cardimage3 img").src){
    alert("You Win - Take 500 Coins!")
    const header = document.getElementById("labelhead");
    const ogHead = header.innerHTML;
    header.innerHTML = 'You\'re A Winner!!';
    setTimeout(() => {
       header.innerHTML = ogHead;
    }, 1000);
    coincount = coincount + 500;
      }
{
document.querySelector('.coincount').innerText = coincount
disableButtons ()
}
}


function run3 () {
    coincount = coincount - 500;
    document.querySelector(".cardimage1 img").src = chooseRandomImgForPhoto()
    document.querySelector(".cardimage2 img").src = chooseRandomImgForPhoto()
    document.querySelector(".cardimage3 img").src = chooseRandomImgForPhoto()
    if (document.querySelector(".cardimage1 img").src == document.querySelector(".cardimage2 img").src && document.querySelector(".cardimage2 img").src  == document.querySelector(".cardimage3 img").src){
        alert("You Win - Take All the Money!!!")
        const header = document.getElementById("labelhead");
        const ogHead = header.innerHTML;
        header.innerHTML = 'You\'re A Winner!!';
        setTimeout(() => {
           header.innerHTML = ogHead;
        }, 1000);
        coincount = coincount + 1000;
          }
    {
    document.querySelector('.coincount').innerText = coincount
    disableButtons ()
    }
    }
    



function chooseRandomImgForPhoto(){
    let choice = parseInt(Math.random()*src.length)
        return src [choice];
    }



document.querySelector(".cardimage1 img").src = chooseRandomImgForPhoto()
document.querySelector(".cardimage2 img").src = chooseRandomImgForPhoto()
document.querySelector(".cardimage3 img").src = chooseRandomImgForPhoto()

if (document.querySelector(".cardimage1 img").src == document.querySelector(".cardimage2 img").src && document.querySelector(".cardimage2 img").src  == document.querySelector(".cardimage3 img").src){
    alert("You Win!")
}



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
