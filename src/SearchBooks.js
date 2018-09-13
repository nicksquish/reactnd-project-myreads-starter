import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {

	state = {
    query: '',
    newBooks: [],
    searchErr: false
  }

  getBooks = (event) => {

    const query = event.target.value.trim()
    this.setState({ query: query })

    // if user input => run the search
    if (query) {
      BooksAPI.search(query, 20).then((books) => {
        books.length > 0 ?  this.setState({newBooks: books, searchErr: false }) : this.setState({ newBooks: [], searchErr: true })
      })

    // if query is empty => reset state to default
  } else this.setState({newBooks: [], searchErr: false })
  }


	render() {

		const { query, newBooks, searchErr } = this.state

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
	            <ol className="books-grid"></ol>
	          </div>
	      </div>
	    </div>
			)
		}
	}

export default SearchBooks;