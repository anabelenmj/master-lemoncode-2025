//4. Read Books

//Crea una función isBookRead que reciba una lista de libros y un título y devuelva si se ha leído o no dicho libro. Un libro es un objeto con title como string y isRead como booleano. En caso de no existir el libro devolver false TIP: Existe un método de Array.prototype que te ayudará a buscar según un patrón.
type Books = {
    title: string;
    isRead: boolean;
}

const books: Books[] = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];

function isBookRead(books: any, titleToSearch: string) {
    const readedBook = books.find((book: any) => book.title === titleToSearch)
    return readedBook.isRead ? `El libro "${titleToSearch}" se ha leído` : `El libro "${titleToSearch}" NO se ha leído`
}

/* console.log(isBookRead(books, "Canción de hielo y fuego")) */