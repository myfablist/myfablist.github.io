import React from 'react';
import { render } from 'react-dom';

class Anime extends React.Component {
  constructor(props) {
    super(props)
    console.log('Anime props',this.props.shows);
  }
  render() {
    return (
      <div>
        <h1>Anime here</h1>
        <div>Life is like a rolling stone</div>
        <div>Life is like a rolling stone</div>
        <div>Life is like a rolling stone</div>
      </div>
    )
  }
}

export default Anime;
