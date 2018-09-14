import React, { Component } from 'react'
import ShelfChange from './ShelfChange'
import noCoverImage from './icons/no-cover.svg'
import PropTypes from 'prop-types'

class Book extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired,
  }

  render() {

    const { book, books, changeShelf } = this.props
    const coverImg = book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : noCoverImage
    const title = book.title ? book.title : "No title available"

    return(

      <li key={ book.id }>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${coverImg})`}}></div>
            
              <ShelfChange
                book={ book }
                books={ books }
                changeShelf={ changeShelf }
              />
          
          </div>
          <div className="book-title">{ title }</div>
            {book.authors && book.authors.map((author, index) => (
                <div className="book-authors" key={index}>{author}</div>
            ))}
        </div>
      </li>

    )
  }
}

export default Book;