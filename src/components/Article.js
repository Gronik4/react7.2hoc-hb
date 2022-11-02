import React from 'react';
import propTypes from 'prop-types';

export const Article = (props) => {
  return (
    <div className="item item-article">
        <h3><a href="#top">{props.title}</a></h3>
        <p className="views">Прочтений: {props.views}</p>
    </div>
  )
}

Article.propTypes ={
  props: propTypes.object
}
