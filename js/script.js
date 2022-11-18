

let storeName = "Your bookstore";

if (localStorage.getItem('storeName') != null) {
    localStorageName = localStorage.getItem('storeName');
    
    if (localStorageName.length !==  0) {
        storeName = localStorageName;
        console.log("retrieved from local storage");
    }
    
}

document.querySelector(".bookstore-name").innerHTML = storeName;