import React from 'react'
import { Route,
Switch} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBookShelfs from './ListBookShelfs'
import SearchBooks from './SearchBooks'
import NoMatch from './NoMatch'
class BooksApp extends React.Component {
  state = {
    currently_reading:[],
    want_to_read:[],
    read:[],
    all_books:[]
  }
  
  componentDidMount() {
    BooksAPI.getAll().then((book => {
      this.setState({ currently_reading:book.filter(book => book.shelf === 'currentlyReading'),
      want_to_read:book.filter(book => book.shelf === 'wantToRead'),
      read:book.filter(book => book.shelf === 'read'),
      all_books:book
     })
    }))
  }

  checkBook = (book) => {
    this.state.want_to_read.map((stBook) => {
      if(stBook.id === book.id){
        book.shelf = stBook.shelf
      }
    })
    this.state.currently_reading.map((stBook) => {
      if(stBook.id === book.id){
        book.shelf = stBook.shelf
      }
    })
    this.state.read.map((stBook) => {
      if(stBook.id === book.id){
        book.shelf = stBook.shelf
      }
    })
  }

  updateShelf = (updatedBook,shelf) =>{
    BooksAPI.update(updatedBook,shelf)
    updatedBook.shelf = shelf;
    this.setState(prevState => {
      var cuRe= prevState.currently_reading.filter(book => book.id !== updatedBook.id);
      var waRe= prevState.want_to_read.filter(book => book.id !== updatedBook.id);
      var re= prevState.read.filter(book => book.id !== updatedBook.id);
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
      <Switch>
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
            updateShelf={this.updateShelf}
            searchBook={BooksAPI.search}
            checkBook={this.checkBook}
          />
        )}/>
        <Route component={NoMatch}/>
      </Switch>
      </div>
    )
  }
}

export default BooksApp
