import React from 'react';
import { New } from './New';
import { Popular } from './Popular';
import propTypes from 'prop-types';

export function SortWrapper(Component, props) {
  return class extends React.Component {
    render() {
      if (props > 1000) {return(<Popular> <Component/> </Popular>)}
      return(<New> <Component /> </New>)
    }
  }
}

SortWrapper.propTypes = {
  New: propTypes.func,
  Popular: propTypes.func
}
