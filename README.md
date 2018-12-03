# MyReads Project

This project was built for the Udacity React Nanodegree Program. The purpose of the project is to demonstrate understanding of the basic structure and operation of a React-based app.

The project has 5 basic components:

The BooksApp component which handles all the routes and the connection with the api,
the ListBookShelfs component which gets 4 props (3 arrays of books, one for each shelf, and an update shelf function. This function calls the update function from the api.), and this component also has the responsability to list the books in each shelf. The ShelfChanger component handles the shelfs options and shelfs changes,it must also call the updating function from the api. The Book component shows each book and its properties. Finally the SearchBook will handle the search page and the query to show the books based on the user input, it also allows the user to set the books onto a shelf.

## How to Load the App

This project uses Node.js and Create-React-App.
You can download Node.js at https://nodejs.org/en/
Once Node is installed, navigate to the directory where you want to store the app and run in your terminal:
* git clone https://github.com/Lucasboden/MyReads .
* npm install
* npm start

## Search Limit

The backend Api is limited to a fixed set of search terms. They are: 

'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'History', 'History', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Program Javascript', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'

## App Access
You can use the app at http://obscene-bite.surge.sh/