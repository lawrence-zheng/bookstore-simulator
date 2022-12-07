class Book {
    constructor(title, description, size, color, money) {
        this.title = title;
        this.description = description;
        this.size = size;
        this.color = color;
        this.money = money;

    }
}

//import from json

import bookList from '../data/book-list.json' assert { type: "json" };


let booksActive = [];
let booksInactive = [];

for (var key in bookList) {
    if (bookList[key].default) {
        booksActive.push(new Book(bookList[key].title, bookList[key].description, bookList[key].size, bookList[key].color, bookList[key].money));
    } else {
        booksInactive.push(new Book(bookList[key].title, bookList[key].description, bookList[key].size, bookList[key].color, bookList[key].money));
    }
}

console.log(booksActive);
console.log(booksInactive);