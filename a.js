// const labels = document.querySelectorAll ("aside");

// labels.forEach(label => {
//     label.style.display = "flex"
// }

// )




// const openMenu = document.querySelector('#show-menu')
// const hideMenuIcon = document.querySelector('#hide-menu')
// const sideMenu = document.querySelector('#navbar')

// openMenu.addEventListener('click', function() {
//     sideMenu.classList.add('active')
// })


// hideMenuIcon.addEventListener('click', function() {
//     sideMenu.classList.remove('active')
// })




// function showBar () {
//     document.querySelector('#navbar').style.width = '20%';
//     document.querySelector('#navbar').style.transform = 'translate(5px, 0px)';
// }

// function hideBar () {
//     document.querySelector('#navbar').style.transform = 'translate(400px, 0px)';
//     document.querySelector('#navbar').style.width = '0';
// }




function showBar (){
    const sidebar = document.querySelector ('aside')
    
    
    sidebar.style.zIndex = '999'
    sidebar.style.right = '0'
    // sidebar.style.transitionDelay = '0.1s'
    sidebar.style.display = 'flex'
}

function hideBar (){
    const sidebar = document.querySelector ('aside')
    sidebar.style.right= '-30%'
}


function email () {
    alert ("Please fill the Contact Form");

}


function nameChange () {
    // document.getElementById("sq").innerHTML = "soyqureshi@gmail.com";

    // document.querySelector(".sq").innerHTML = "Visit Contact";

    const sq = document.querySelector(".sq")
    const sqName = document.querySelector(".sq-name")


    sq.innerHTML = ("soyqureshi@gmail.com");
    sq.style.color = ("chartreuse");
    sq.style.animation = "sqfade 0.1s linear 25 alternate";
  
}

// --------------------------------Gallery-------------------------------------------------

const pOne = document.querySelector(".page-one")
const pTwo = document.querySelector(".page-two")
const pThree = document.querySelector(".page-three")
const number = document.querySelector(".number")
const numberOne = document.getElementById ("mainzone")
const numberTwo = document.getElementById ("mainztwo")
const numberThree = document.getElementById ("mainzthree")



function buttOne () {

pOne.style.display = ("grid");
pTwo.style.display = ("none");
pThree.style.display = ("none");
numberOne.style.boxShadow = "inset 1px 1px 2px black";
numberTwo.style.boxShadow = "1px 1px 2px black";
numberThree.style.boxShadow = "1px 1px 2px black";

numberOne.style.backgroundColor = ("chartreuse")
numberTwo.style.backgroundColor = ("#f0e3da")
numberThree.style.backgroundColor = ("#f0e3da")

pOne.style.animation= ("backward 350ms linear");


// number.style.style.backgroundColor = ("chartreuse")
// numberOne.style.boxShadow = ("inset 1px 1px 2px black");



}




function buttTwo () {
    pOne.style.display = ("none");
    pTwo.style.display = ("grid");
    pThree.style.display = ("none");
    numberOne.style.boxShadow = "1px 1px 2px black";
    numberTwo.style.boxShadow = "inset 1px 1px 2px black";
    numberThree.style.boxShadow = "1px 1px 2px black";

    numberOne.style.backgroundColor = ("#f0e3da")
    numberTwo.style.backgroundColor = ("chartreuse")
    numberThree.style.backgroundColor = ("#f0e3da")

    pTwo.style.animation= ("backward 350ms linear");

    
    // numbertwo.style.backgroundColor = ("chartreuse");
    
    
    }

    function buttThree () {
        const pOne = document.querySelector(".page-one")
        const pTwo = document.querySelector(".page-two")
        const pThree = document.querySelector(".page-three")
        
        pOne.style.display = ("none");
        pTwo.style.display = ("none");
        pThree.style.display = ("grid");
        numberOne.style.boxShadow = "1px 1px 2px black";
        numberTwo.style.boxShadow = "1px 1px 2px black";
        numberThree.style.boxShadow = "inset 1px 1px 2px black";

        numberOne.style.backgroundColor = ("#f0e3da")
        numberTwo.style.backgroundColor = ("#f0e3da")
        numberThree.style.backgroundColor = ("chartreuse")

        pThree.style.animation= ("backward 350ms linear");

        
        }


// for Resume -----------------------------------------

const toTopButton = document.querySelector("#to-top");

document.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    toTopButton.classList.add("show");
  } else {
    toTopButton.classList.remove("show");
  }
});

function callMe () {
  alert("This number is available on WhatsApp as well");
}

function skillHtml () {
  alert("This digital resume has been built using HTML, CSS & JavaScript")
}

function cooking () {
  alert("My cooking is decent enought to eat")
}

function netTravel() {
  alert("It is a part of my job")
}


// function email() {
//   alert("Please fill the Contact Form");
// }

// for Resume  End----------------------------------------
    

