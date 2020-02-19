import React, { Fragment } from 'react';

const CategoryButton = props => {
  console.log(props);
  return (
    <Fragment>
      <button
        className='category-button'
        name={props.categoryName}
        onClick={e => {
          props.handleCategoryClick(e);
        }}>
        <img className='category-icon' src={props.categoryIcon} />

        <p className={props.categoryName + ' category-label'}>
          {props.categoryName}
        </p>
      </button>
    </Fragment>
  );
};

export default CategoryButton;
