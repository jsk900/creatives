import React, { Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/search.css';

const Search = props => {
  return (
    <Fragment>
      <div className='main-container'>
        <Header
          userName={props.location.state.userName}
          avatarImage={props.location.state.avatarImage}
          token={props.location.state.token}
        />
        <div className='search-body'>Search</div>
        <Footer
          userName={props.location.state.userName}
          avatarImage={props.location.state.avatarImage}
          token={props.location.state.token}
        />
      </div>
    </Fragment>
  );
};

export default Search;
