import React, { Component } from 'react';
import PropTypes from 'prop-types'
class ShelfChanger extends Component{
	static propTypes = {
		book: PropTypes.object.isRequired,
		updateShelf:PropTypes.func.isRequired,
		currentShelf:PropTypes.string.isRequired
	}
	updateShelf = event =>
    this.props.updateShelf(this.props.book, event.target.value);

	render (){
		//const {updateShelf,currentShelf} = this.props
		return(
			<select onChange={this.updateShelf} defaultValue={this.currentShelf}>
				<option value="move" disabled>Move to...</option>
				<option value="currentlyReading">Currently Reading</option>
				<option value="wantToRead">Want to Read</option>
				<option value="read">Read</option>
				<option value="none">None</option>
			</select>
		)
	}
}
export default ShelfChanger