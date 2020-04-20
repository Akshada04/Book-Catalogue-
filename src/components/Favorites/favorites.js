import React, { Component } from "react";
import '../Favorites/favorites.css';
import {connect} from 'react-redux'

class Favorites extends Component {

  render() {
    return (
      <div className="favoritesBooks">
        {this.props.books.map(book => (
        book.isFavourite && <div className="card">
            <img src={book.thumbnailUrl} alt="Avatar" />
            <h4>{book.title}</h4>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
      books: state.books.books
    };
  };

export default connect(mapStateToProps, null)(Favorites);
