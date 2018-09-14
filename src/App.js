import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import BooksList from './BooksList'
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
      
        <div className="app">

          <Route exact path='/' render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <BooksList
                books={ books }
                changeShelf={ this.changeShelf }
              />
            </div>
            )}/>

          <Route path='/search' render={({ history }) => (
            <SearchBooks
            books={ books }
            changeShelf={ this.changeShelf } 
            />
          )}/>

          <div className="open-search">
            <Link to='/search'>Add a book</Link>
          </div>

        </div>
      
    )
  }
}

export default BooksApp;
