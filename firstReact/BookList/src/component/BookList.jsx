import React, {useState} from "react";
import style from "./BookList.module.css"

export const BookList = () =>{

    const bookList = [
        "Name of the Wind",
        "The Wise Man's Fear",
        "Kafka on the Shore",
        "The Master and the Margarita"
    ];

    const [books, setBooks] = useState(bookList);
    const [newBook, setNewBook] = useState("");
    const [searchBookValue, setSearchBookValue] = useState("");

    console.log(books)
    console.log(newBook)
    const deleteHandler = (removeBook)=>{

        setBooks(books.filter((book) => book !== removeBook))
    }
    const collectBookTitle =(e)=>{
        setNewBook(e.target.value.trim());
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        if(newBook){
            setBooks(prevBook =>[...prevBook, newBook]);
        }
    }
    const handleFilterBooks =(e)=>{
        e.preventDefault();
        let searchBooks = e.target.value.toLowerCase();

        setSearchBookValue(searchBooks);
    }
    const filteredBooks = books.filter((book)=>book.toLowerCase().includes(searchBookValue));
    return(
         // <div>BookList</div>
    <div id={style.wrapper}>
        <header>
            <div id={style.pageBanner}>
                <h1 className={style.title}> Book Collections</h1>
                <p>Books</p>
                <form id={style.searchBook}>
                    <input type="text" placeholder="Search books..." onKeyUp={handleFilterBooks}/>
                </form>
            </div>
        </header>
        <div id={style.bookList}>
            <h2 className={style.title}>Books to Read</h2>
            <ul>
                {
                    filteredBooks.map((book,index)=>(
                        <li key={index}>

                        <span className={style.name}>{book}</span>
                      <span className={style.delete} onClick={()=> deleteHandler(book) }>delete</span>

                    </li>
                    ))
                }
            </ul>
        </div>
        <form onSubmit={handleSubmit} id={style.addBook}>
            <input type="text" placeholder="Add a book..." onChange={collectBookTitle} />
            <button>Add</button>
        </form>

    </div>
    )
}
export  default BookList;