import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import BookShelf from './BookShelf'
import Book from './Book'
import ShelfChange from './ShelfChange'

class BooksApp extends React.Component {

    state = { books: [] }
    componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  changeShelf = ( newBook, newShelf ) => {
    BooksAPI.update(newBook, newShelf).then(response =>{
      newBook.shelf = newShelf
      const updatedBooks = this.state.books.filter( book => book.id !== newBook.id )
      updatedBooks.push(newBook)
      this.setState({ books: updatedBooks })
    })
  }

  render() {

    const { books } = this.state

    return (
      <Router>
        <div className="app">

          <Route exact path='/' render={() => (
            <BookShelf/>
            )}/>

          <Route path='/search' render={() => (
            <SearchBooks/>
          )}/>

        </div>
      </Router>
    )
  }
}

export default BooksApp;
