import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SearchBooks extends Component {

	render() {
		return(
			<div className='app'>
				<div className="search-books">
	        <div className="search-books-bar">
	          <a className="close-search">Close</a>
	          <div className="search-books-input-wrapper">
	                {

	                }
	              <input type="text" placeholder="Search by title or author"/>

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