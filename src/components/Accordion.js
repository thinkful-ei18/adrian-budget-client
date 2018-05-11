import React, {Component} from 'react';
import Bill from './Bill';

export default class Accordion extends Component {
  render() {
    return (
      <div className='accordion'>
        <div className='title'>
          {this.props.title}
        </div>
          <Bill name='Spotify' amount='15'/>
          <Bill name='Charter' amount='65.99'/>
          <Bill name='Utilities' amount='250'/>
      </div>
    );
  }
}

Accordion.defaultProps = {
  title: 'Your Bills'
}