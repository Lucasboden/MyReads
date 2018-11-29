import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Book from './Book'

class SearchBooks extends Component{
  state={
    query:'',
    showingBooks:[]
  }

  static propTypes = {
    all_books:PropTypes.array.isRequired,
    updateShelf:PropTypes.func.isRequired,
    searchBook:PropTypes.func.isRequired,
    checkBook:PropTypes.func.isRequired
  }

  updateQuery = event => {
    const query = event.target.value
    this.setState({ query: query})
    if(query){
      this.props.searchBook(query.trim()).then(books => {
        if(books.length >0)
          this.setState({showingBooks: books})
        else
          this.setState({showingBooks: []})
      })
    }
    else
      this.setState({showingBooks: []})
  }

  clearQuery = () => {
    this.setState({ query: '' })
  }
  render (){
    const {updateShelf} = this.props
    const {query,showingBooks} = this.state
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/'>
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input 
              type="text" 
              placeholder="Search by title or author"
              value={query}
              onChange={this.updateQuery}
            />
          </div>
        </div>
        <div className="search-books-results">
          <div className="bookshelf-books">
              <ol className="books-grid">
                {showingBooks.map((book) => (
                  <Book book={book} key={book.id} updateShelf={updateShelf} checkBook={checkBook}/>
                ))}
              </ol>
            </div>
        </div>
      </div>
  )}}
export default SearchBooks