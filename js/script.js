// setting store name

let storeName = "Your bookstore";

if (localStorage.getItem('storeName') != null) {
    localStorageName = localStorage.getItem('storeName');
    
    if (localStorageName.length !==  0) {
        storeName = localStorageName;
        console.log("retrieved from local storage");
    }
    
}

document.querySelector(".bookstore-name").innerHTML = storeName;


//movement commands

let playerPos = 0;
player = document.querySelector("#protag");
player.style.transitionDuration = "0s";

function moveToCheckout() {
    console.log("move to checkout")
    if (playerPos == 0) {
        player.style.transitionDuration = "0s";
        checkout1();
    } else if (playerPos == 1){
        player.style.transitionDuration = "3s";
    } else if (playerPos == 2){
        player.style.transitionDuration = "4s";
    }
    player.style.paddingLeft = "220px";
    setTimeout(() => playerPos = 0, 1000);
    
}

function moveToRecCorner() {
    console.log("move to rec corner")

    if (playerPos == 0) {
        player.style.transitionDuration = "3s";
    } else if (playerPos == 1){
        player.style.transitionDuration = "0s";
    } else if (playerPos == 2){
        player.style.transitionDuration = "1.5s";
    }
    player.style.paddingLeft = "780px";
    playerPos = 1;
    
}


function moveToBookshelf() {
    console.log("move to bookshelf")

    if (playerPos == 0) {
        player.style.transitionDuration = "4s";
    } else if (playerPos == 1){
        player.style.transitionDuration = "1.5s";
    } else if (playerPos == 2){
        player.style.transitionDuration = "0s";
    }
    player.style.paddingLeft = "980px";
    playerPos = 2;
    
}


//customer interaction for checkout

let numCheckoutCustomers = 3;

function checkout1() {
    setTimeout(() => checkout2(), 2000);
    
    let statusMessage = document.getElementById("protag-status");
    statusMessage.style.opacity = '100';
    statusMessage.innerHTML = "Checking out...";
    
}

function checkout2() {
    console.log("checkout");
    statusMessage = document.getElementById("protag-status");
    let firstImage = document.getElementsByClassName("checkout-customer");
    removeTarget = firstImage[0];
    removeTarget.style.opacity = '0';
    setTimeout(() => removeTarget.remove(), 2000);
    statusMessage.style.opacity = '0';
    setTimeout(() => removeTarget.remove(), 500);
}


function addCheckoutCustomer() {

}