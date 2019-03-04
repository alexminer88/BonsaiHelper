import React from 'react';
import ReactDOM from 'react-dom';

import PlantsPage from './components/PlantsPage.jsx'
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: 'Bob',
      plants: [],
    };
  }
  
  componentDidMount() {
    axios.get('/plants/')
      .then(data => {
        this.setState({
          plants: data.data
        });
      })
      .catch(err => {
        throw err;
      })
  }

  render () {
    return (
      <div>
        <PlantsPage plants = {this.state.plants}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));