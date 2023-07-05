const books = {
    title: 'Ijays Books',
    description: 'This is a story about the author',
    numberOfPages: 100,
    author: 'Ijeoma Lawretta',
    reading: true,
    toggleReadingStatus: function() {
        if(reading === true) {
            reading = false
        } else {
            reading = true
        }

    }
}
console.log(books.author)
