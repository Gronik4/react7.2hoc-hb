import React from 'react';
import { Video } from './Video';
import { Article } from './Article';
import { SortWrapper } from './SortWrapper';
import propTypes from 'prop-types';

export const List = (props) => { 
  return(
    props.list.map((item, index) => {      
      switch (item.type) {
        case 'video':
          const ItemV = () => <Video key={index} {...item}/>;
          const WrapperItemV = SortWrapper(ItemV, item.views);
          if(item.views < 100) {return <WrapperItemV key={index}/>;}
          if(item.views > 1000) {return <WrapperItemV key={index}/>;}
          return (<Video key={index} {...item}/>);
        case 'article':
          const ItemA = () => <Article key={index} {...item}/>;
          const WrapperItemA = SortWrapper(ItemA, item.views);
          if(item.views < 100) {return <WrapperItemA key={index}/>;}
          if(item.views > 1000) {return <WrapperItemA key={index}/>;}
          return (<Article key={index} {...item} />);
        default: return <null/>;
      }
    })
  ) 
}

List.propTypes = {
  props: propTypes.object,
  Video: propTypes.func,
  Article: propTypes.func,
  SortWrapper: propTypes.func
}
