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
    sqName.style.fontSize = "auto"


}
