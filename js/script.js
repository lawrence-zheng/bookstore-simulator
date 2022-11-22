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
let movementDisabled = false;
player = document.querySelector("#protag");
player.style.transitionDuration = "0s";

function moveToCheckout() {
    console.log("move to checkout")
    if (!movementDisabled) {
        movementDisabled = true;
        let delay = 0;
        if (playerPos == 0) {
            player.style.transitionDuration = "0s";
            checkout1();
        } else if (playerPos == 1){
            player.style.transitionDuration = "3s";
            delay = 3000;
        } else if (playerPos == 2){
            player.style.transitionDuration = "4s";
            delay = 2000;
        }
        player.style.paddingLeft = "220px";
        hideDialogue();
        hideBookshelf();
        setTimeout(() => playerPos = 0, delay);
        setTimeout(() => movementDisabled = false, delay);

    } else {
        console.log("could not move because there is already a movement command");
    }

    
}

function moveToRecCorner() {
    console.log("move to rec corner")
    if (!movementDisabled) {
        movementDisabled = true;
        let delay = 0;
        if (playerPos == 0) {
            player.style.transitionDuration = "3s";
            delay = 3000;
        } else if (playerPos == 1){
            player.style.transitionDuration = "0s";
        } else if (playerPos == 2){
            player.style.transitionDuration = "1.5s";
            delay = 1500;
        }
        player.style.paddingLeft = "780px";
        setTimeout(() => playerPos = 1, delay);
        setTimeout(() => movementDisabled = false, delay);
        setTimeout(() => showDialogue(), delay);
        hideBookshelf();
    } else {
        console.log("could not move because there is already a movement command");
    }
    
}


function moveToBookshelf() {
    console.log("move to bookshelf")
    if (!movementDisabled) {
        let delay = 0;
        if (playerPos == 0) {
            player.style.transitionDuration = "4s";
            delay = 4000;
        } else if (playerPos == 1){
            player.style.transitionDuration = "1.5s";
            delay = 1500;
        } else if (playerPos == 2){
            player.style.transitionDuration = "0s";
        }
        player.style.paddingLeft = "980px";
        playerPos = 2;
        setTimeout(() => playerPos = 2, delay);
        setTimeout(() => movementDisabled = false, delay);
        setTimeout(() => showBookshelf(), delay);
        hideDialogue();
    } else {
        console.log("could not move because there is already a movement command");
    }
    
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

//customer interaction for rec corner

function showDialogue() {
    let dialogueBox = document.getElementById("dialogue-box");
    dialogueBox.style.opacity = '100';
    
}

function hideDialogue() {
    let dialogueBox = document.getElementById("dialogue-box");
    dialogueBox.style.opacity = '0';
}

function showBookshelf() {
    let bookshelfBox = document.getElementById("bookshelf-box");
    bookshelfBox.style.opacity = '90';
    
}
function hideBookshelf() {
    let bookshelfBox = document.getElementById("bookshelf-box");
    bookshelfBox.style.opacity = '0';
    
}