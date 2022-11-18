

let storeName = "Your bookstore";

if (localStorage.getItem('storeName') != null) {
    localStorageName = localStorage.getItem('storeName');
    
    if (localStorageName.length !==  0) {
        storeName = localStorageName;
        console.log("retrieved from local storage");
    }
    
}

document.querySelector(".bookstore-name").innerHTML = storeName;


function moveToRecCorner() {
    console.log("move to rec corner")
    player = document.querySelector("#protag");
    player.style.paddingLeft = "780px";
    
}


function moveToCheckout() {
    console.log("move to checkout")
    player = document.querySelector("#protag");
    player.style.paddingLeft = "220px";
    
}