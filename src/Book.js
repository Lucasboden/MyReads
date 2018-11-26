import React, { Component } from 'react';
import PropTypes from 'prop-types'
import ShelfChanger from './ShelfChanger'
class Book extends Component{
	static propTypes = {
		book: PropTypes.object.isRequired,
		updateShelf:PropTypes.func.isRequired
	}
	render (){
		const {book,updateShelf} = this.props
		return(
			<li key={book.id}>
	      		<div className="book">
	        	<div className="book-top">
	          	<div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${book.imageLinks.thumbnail})` }}></div>
		          <div className="book-shelf-changer">
		            <ShelfChanger book={book} updateShelf={updateShelf} currentShelf={book.shelf}/>
		          </div>
		        </div>
		        <div className="book-title">{book.title}</div>
		        {book.authors.map((author,index) => (
		        	<div className="book-authors" key = {index}>
		        	</div>
		        	))}
		      </div>
		    </li>
		)
	}
}
export default Book