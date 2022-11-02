import './css/App.css';
import './css/stamp.css';
import { content } from './components/data/content';
import { List } from './components/List';
import propTypes from 'prop-types';

function App() {
  return (
    <div className="App">
      <List list={content}/>
    </div>
  );
}

App.propTypes = {
  content: propTypes.object,
  List: propTypes.func
}

export default App;
