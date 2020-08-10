function inheritObject(o) {
    function F() {};
    F.prototype = o;
    return new F();
}

var book = {
    name: 'web',
    books: ['css', 'html'],
}

var newBook = inheritObject(book);
newBook.name = 'zj';
newBook.books = ['js'];
newBook.books.push('java');
console.log(newBook, newBook.__proto__);

var otherBook = inheritObject(book);
otherBook.name = 'zj';
otherBook.books.push('node');
otherBook.books = ['python'];
otherBook.books.push('c++');
console.log(otherBook, otherBook.__proto__);