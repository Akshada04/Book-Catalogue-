import React, { Component } from "react";
// import axios from "axios";
import "./book.css";
import { connect } from 'react-redux';
import Modal from 'react-modal';
import * as bookAction from '../../actions/booksActions';
import Favorite from '../../assets/bookAssets/heart_red.svg';
import Unfavorite from '../../assets/bookAssets/heart_grey.svg';
import '../../App.css';
Modal.setAppElement('#root');
class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      bookObject: null,
      getPublishYear: '',
      addClass: false
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal(book) {
    let getDate = book.publishedDate.$date;
    console.log("get Date", getDate);
    let getYear = new Date(getDate).getFullYear()
    this.setState({ bookObject: book, getPublishYear: getYear, showModal: true });
  }
  handleCloseModal() {
    this.setState({ showModal: false, bookObject: null });
  }

  toggleView() {
    this.setState({ addClass: !this.state.addClass });
  }

  componentDidMount() {
    this.props.fetch_books();
  }

  render() {
    console.log("Props is", this.props);
    console.log("Book JOSN", this.props.books);
    let listView = ["bookList"];
    if (this.state.addClass) {
      listView.push('listView');
    } else {
      listView.push('gridView');
    }
    return (
      <div className="main-container">
        {!this.state.addClass && <button className="listGridView" onClick={this.toggleView.bind(this)}>ListView</button>}
        {this.state.addClass && <button className="listGridView" onClick={this.toggleView.bind(this)}>GridView</button>}
        <div className={listView.join(' ')}>
          {this.props.books.length && this.props.books.map(book => (
            <div className="card" key={book.id}>
              <div className="bookItem" onClick={() => this.handleOpenModal(book)}>
                <img src={book.thumbnailUrl} alt="Avatar" />
                <h4>{book.title}</h4>
              </div>
              {book.isFavourite ? <img src={Favorite} alt="" onClick={() => this.props.toggle_favorite(book, false)} className="redHeartShape" /> :
                <img src={Unfavorite} alt="" onClick={() => this.props.toggle_favorite(book, true)} className="redHeartShape" />}
            </div>
          ))
          }
          {this.props.pageNumber > 1 && <button className="prev" onClick={() => this.props.pagination("previous")}>Previous</button>}
          {this.props.pageNumber < 19 && <button className="next" onClick={() => this.props.pagination("next")}>Next</button>}
        </div >
        <div className="openBook">
          <div
            isOpen={this.state.showModal}
            contentLabel="onRequestClose Example"
            onRequestClose={this.handleCloseModal}
            shouldCloseOnOverlayClick={false}
          >
            {this.state.bookObject && <div className="showBookInformation">
              <img align="left" src={this.state.bookObject.thumbnailUrl} alt="" />
              <h4>{this.state.bookObject.title}</h4>
              <p>By {this.state.bookObject.authors[0]}</p>
              <h4>{this.state.bookObject.status}  in  {this.state.getPublishYear}</h4>
              <p>{this.state.bookObject.shortDescription}</p>
              <button onClick={this.handleCloseModal}>Close</button></div>}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books.books,
  pageNumber: state.books.pageNumber
});

const mapDispatchToProps = dispatch => ({
  fetch_books: () => dispatch(bookAction.fetchBooks()),
  toggle_favorite: (book, flag) => dispatch(bookAction.toggleIsFavorite(book, flag)),
  pagination: (action) => dispatch(bookAction.booksPagination(action))
})

export default connect(mapStateToProps, mapDispatchToProps)(Book);
