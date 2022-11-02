import React from 'react';
import propTypes from 'prop-types';

export function Video(props) {
  return (
    <div className="item item-video">
      <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen  title='from youtube'></iframe>
      <p className="views">Просмотров: {props.views}</p>
    </div>
  )
}

Video.propTypes = {
  props: propTypes.object
}
