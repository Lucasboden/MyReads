import React from 'react';
import PropTypes from 'prop-types'
import Book from './Book'
import { Link } from 'react-router-dom'
const ListBookShelfs = ({currently_reading,want_to_read,read,updateShelf}) => {
  //const { currently_reading,want_to_read,read,updateShelf} = props
    //let showing_currently_reading, showing_want_to_read,showing_read
    return(<div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {currently_reading.map((book) => (
                  <Book book={book} key={book.id} updateShelf={updateShelf}/>
                ))}
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {want_to_read.map((book) => (
                  <Book book={book} key={book.id} updateShelf={updateShelf}/>
                ))}
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {read.map((book) => (
                <Book book={book} key={book.id} updateShelf={updateShelf}/>
                ))}            
              </ol>
            </div>
          </div>
        </div>
      </div>
            <div className="open-search">
              <Link to={'/search'}>
              <button>Add a book</button>
              </Link>
            </div>
          </div>)
};
ListBookShelfs.propTypes = {
  currently_reading: PropTypes.array.isRequired,
  want_to_read: PropTypes.array.isRequired,
  read: PropTypes.array.isRequired,
  updateShelf:PropTypes.func.isRequired
}

export default ListBookShelfs