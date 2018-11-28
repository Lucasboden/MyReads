import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import ListBookShelfs from './ListBookShelfs'
import SearchBooks from './SearchBooks'
class BooksApp extends React.Component {
  state = {
    currently_reading:[],
    want_to_read:[],
    read:[],
    all_books:[]
  }
  /*componentDidUpdate(){
    BooksAPI.getAll().then((book => {
      //this.setState({ currently_reading:book})
      this.setState({ currently_reading:book.filter(book => book.shelf === 'currentlyReading') })
      this.setState({ want_to_read:book.filter(book => book.shelf === 'wantToRead') })
      this.setState({ read:book.filter(book => book.shelf === 'read') })
      this.setState({all_books:book})
    }))
  }*/
  componentDidMount() {
    BooksAPI.getAll().then((book => {
      this.setState({ currently_reading:book.filter(book => book.shelf === 'currentlyReading') })
      this.setState({ want_to_read:book.filter(book => book.shelf === 'wantToRead') })
      this.setState({ read:book.filter(book => book.shelf === 'read') })
      this.setState({all_books:book})
    }))
  }
  updateShelf = (updatedBook,shelf) =>{
    BooksAPI.update(updatedBook,shelf)
    updatedBook.shelf = shelf;
    this.setState(prevState => {
      var cuRe= prevState.currently_reading.filter(book => book.id !== updatedBook.id);
      var waRe= prevState.want_to_read.filter(book => book.id !== updatedBook.id);
      var re= prevState.read.filter(book => book.id !== updatedBook.id);
      /*if(updatedBook.shelf===shelf){
        return {currently_reading:cuRe,want_to_read:waRe,read:re};
      }*/
      switch(shelf){
        case 'currentlyReading':
          cuRe= prevState.currently_reading.concat(updatedBook)
          break;
        case 'wantToRead':
          waRe= prevState.want_to_read.concat(updatedBook)
          break;
        case 'read':
          re= prevState.read.concat(updatedBook)
          break;
        default:
          break;
      };
      return {currently_reading:cuRe,want_to_read:waRe,read:re, all_books:prevState.all_books};
    });
  };
  render() {
    return (
      <div>
        <Route exact path='/' render={() => (
          <ListBookShelfs
          currently_reading={this.state.currently_reading}
          want_to_read={this.state.want_to_read}
          read={this.state.read}
          updateShelf={this.updateShelf}
          />  
        )}/>
        <Route path='/search' render={({ history }) => (
          <SearchBooks
            all_books={this.state.all_books}
            updateShelf={this.updateShelf}
            searchBook={BooksAPI.search}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
