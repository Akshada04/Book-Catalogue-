import React, { Component } from "react";
import '../Favorites/favorites.css';
import { connect } from 'react-redux';
import * as favAction from '../../actions/favoriteActions';

class Favorites extends Component {
  componentDidMount() {
    this.props.fetch_favbooks();
  }

  render() {
    console.log("Fav Book is:", this.props.favBooks)
    return (
      <div className="favoritesBooks">
        {this.props.favBooks.map(favoriteBook => (
        favoriteBook.isFavourite && <div className="card">
            <img src={favoriteBook.thumbnailUrl} alt="Avatar" />
            <h4>{favoriteBook.title}</h4>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  favBooks: state.favoriteBooks.favBooks
});

const mapDispatchToProps = dispatch => ({
  fetch_favbooks: () => dispatch(favAction.fetchFavoriteList()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
