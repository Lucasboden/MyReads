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
    read:[]
  }

  componentDidMount() {
    BooksAPI.getAll().then((book => {
      //this.setState({ currently_reading:book})
      this.setState({ currently_reading:book.filter(book => book.shelf === 'currentlyReading') })
      this.setState({ currently_reading:book.filter(book => book.shelf === 'wantToRead') })
      this.setState({ currently_reading:book.filter(book => book.shelf === 'read') })
    }))
  }

  render() {
    return (
      <div>
        <Route exact path='/' render={() => (
          <ListBookShelfs
          currently_reading={this.state.currently_reading}
          want_to_read={this.state.want_to_read}
          read={this.state.read}
          />  
        )}/>
        <Route path='/create' render={({ history }) => (
          <SearchBooks
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
