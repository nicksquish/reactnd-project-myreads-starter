import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBooks extends Component {

	state = {
    query: '',
    newBooks: [],
    searchErr: false
  }

  getBooks = (event) => {

    const query = event.target.value.trim()
    this.setState({ query: query })

    if (query) {
      BooksAPI.search(query, 20).then((books) => {
        books.length > 0 ?  this.setState({newBooks: books, searchErr: false }) : this.setState({ newBooks: [], searchErr: true })
      })

  } else this.setState({newBooks: [], searchErr: false })
  }


	render() {

		const { query, newBooks} = this.state
    const { books, changeShelf } = this.props

		return(
			<div className='app'>
				<div className="search-books">
	        <div className="search-books-bar">
	          <Link className="close-search" to='/'>Close</Link>
	          <div className="search-books-input-wrapper">
	              <input type="text" 
	              	placeholder="Search by title or author"
	              	value={ query }
                	onChange={ this.getBooks }
	              />
	            </div>
	          </div>
	          <div className="search-books-results">
            { newBooks.length > 0 && (
              <div>
                <div className=''>
                  <h3>Search returned { newBooks.length } books </h3>
                </div>
                <ol className="books-grid">
                  {newBooks.map((book) => (
                    <Book
                      book={ book }
                      books={ books }
                      key={ book.id }
                      changeShelf={ changeShelf }
                    />
                  ))}
                </ol>
              </div>
            )}
	      </div>
	    </div>
	  </div>
			)
		}
	}

export default SearchBooks;