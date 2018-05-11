import React, {Component} from 'react';
import './Bill.css';

export default class Bill extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      class: "closed"
    };



  }

  handleClick() {
    if (this.state.open) {
      console.log('card closed');
      this.setState({open: false, class: "closed"}); // collapse the bill
    } else {
      console.log('card opened');
      this.setState({open: true, class: "open"}); // expand the bill
    }
  }

render() {
  return (
      <div className={this.state.class}>
          <button>Toggle</button>
        <div className='billheader' onClick={() => {this.handleClick()}}>
          <h1>{this.props.name}</h1>
          <h2>{this.props.amount}</h2>
        </div>
        <div className='billwrap'>
          <div className='billinfo'>
            <p>{this.props.duedate}</p>
            <div>{this.props.beenpaid}</div>
            <p>{this.props.billinterval}</p>
            <div>{this.props.category_id}</div>
          </div>
        </div>
      </div>
    );
  }
};


Bill.defaultProps = {
  expanded: false,
  name: 'Happiness',
  amount: 55,
  duedate: '2018-03-20',
  beenpaid: false,
  billinterval: 'P [ years-months-days ]',
  category_id: [100, 101, 102]
}