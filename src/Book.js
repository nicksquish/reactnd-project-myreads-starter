import React, { Component } from 'react'

class Book extends Component {

  render() {

    const { book, books, changeShelf } = this.props
    const coverImg = book.imageLinks && book.imageLinks.thumbnail
    const title = book.title ? book.title : "No title available"

    return(

      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ backgroundImage: `url(${coverImg})`}}></div>
            <div className="book-shelf-changer">
              
            </div>
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