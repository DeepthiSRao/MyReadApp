import React from 'react';
import { Route } from 'react-router-dom';
import * as BookApi from '../BooksAPI';
import BookList from './BookList';
import SearchBook from './SearchBook';
import '../App.css';

const shelvesList = [
    { id: 1, category: "currentlyReading", label: "Currently Reading"},
    { id: 2, category: "wantToRead", label: "Want to Read" },
    { id: 3, category: "read", label: "Read" }
];

class App extends React.Component {
    state = {
        myBooks: [],
        searchBooks: [],
        error: false,
    }

    componentDidMount() {
        BookApi.getAll()
               .then(books => {
                   this.setState({
                       myBooks: books
                   });
                })
               .catch(error => {
                   console.log("Books get request failed" + error);
                   this.setState({ error: true });
               });
    }

    /*
      1. Send Update req to API
      2. Update myBooks list
         a. Remove the book from the list if label is "none"
         b. Else add the book to the list if modified shelf
      * */
    handleSelectInput = (book, value) => {
        BookApi.update(book, value)
               .catch(error => {
                    console.log("Books update request failed" + error);
                    this.setState({ error: true });
               });

        if (value === "none") {
            this.setState(prevState => ({
                myBooks: prevState.myBooks.filter(b => b.title !== book.title)
            }));

        } else {
            book.shelf = value;
            this.setState(prevState => ({
                myBooks : prevState.myBooks.filter(b => b.title !== book.title).concat(book)
            }));
        }
    }

    handleSearchBook = (query) => {
        if (!query) {
            this.resetSearch();
        } else {
            BookApi.search(query)
                .then((books) => {
                    this.setState({
                        searchBooks: books.error ? [] : books
                    });
                })
                .catch(error => {
                    console.log("There is a search error!! " + error);
                    this.setState({ error: true });
                });
        }
    }

    resetSearch = () => {
        this.setState({
            searchBooks: []
        });
    } 

    render() {
        return (
            <div className="app">
                {
                    this.state.error &&
                    <p>Please try later!!! Looks there is an issue!!!</p> 
                }
                <Route
                    path="/"
                    exact
                    render={() => (
                        <BookList
                            bookList={this.state.myBooks}
                            shelves={shelvesList}
                            selectOptionHandler={this.handleSelectInput} />
                    )}
                />
                <Route
                    path="/search"
                    exact
                    render={() => (
                        <SearchBook
                            myBooks={this.state.myBooks}
                            searchBooks={this.state.searchBooks}
                            onSearch={this.handleSearchBook}
                            onReset={this.resetSearch}
                            selectOptionHandler={this.handleSelectInput} />
                    )}
                />
            </div>
        );
    }
}

export default App;