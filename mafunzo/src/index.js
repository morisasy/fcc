import React from 'react'
import ReactDOM from 'react-dom'

// css
import './index.css'

// setup vars
import {books} from './books.js'
import Book from './Book'


const BookList = () => {
    const bookShelf = books.map((book, index) => {
        return (<Book key = { index } {...book }/>)
    })

    return (<section className = "booklist" > { bookShelf } </section>)
}



ReactDOM.render(<BookList />,
    document.getElementById('root'));
