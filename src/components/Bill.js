import React, {Component} from 'react';

export default class Bill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      class: "collapsed"
    };
  }

  handleClick() {
    if (this.state.open) {
      this.setState({open: false, class: "collapsed"}); // collapse the bill
    } else {
      this.setState({open: true, class: "expanded"}); // expand the bill
    }
  }

render() {
  return (
      <div className={this.state.class}>
          <button>Toggle</button>
        <div className='billheader'>
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