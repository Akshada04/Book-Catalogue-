import React, { Component } from "react";
import "../Classification/classification.css";
import Collapsible from "react-collapsible";
import * as authorAction from "../../actions/classificationAuthorActions";
import * as categoriesAction from "../../actions/classificationCategoriesActions";
import { connect } from "react-redux";

class Classification extends Component {
  componentDidMount() {
    this.props.fetch_authors();
    this.props.fetch_categories();
  }
  render() {
    return (
      <div className="classification">
        <Collapsible trigger="By Authors">
          <div className="byAuthors panel-group">
            {this.props.authors.map(author => (
              <ul>
                <li> {author} </li>
              </ul>
            ))}
          </div>
        </Collapsible>
        <Collapsible trigger="By Categories">
          <div className="byCategories">
            {this.props.categories.map(data => (
              <ul>
                <li> {data} </li>
              </ul>
            ))}
          </div>
        </Collapsible>
      </div >
    );
  }
}

const mapStateToProps = state => {
  return {
    authors: state.authors.authors,
    categories: state.categories.categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetch_authors: () => dispatch(authorAction.fetchAuthors()),
    fetch_categories: () => dispatch(categoriesAction.fetchCategories())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Classification);
