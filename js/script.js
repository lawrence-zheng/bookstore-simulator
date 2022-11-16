

let storeName = "[bookstore name]";

if (localStorage.getItem('storeName') != null) {
    console.log("retrieved from local storage")
    storeName = localStorage.getItem('storeName');
}

document.querySelectorAll(".bookstore-name").innerHTML = storeName;