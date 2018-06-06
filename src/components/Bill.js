import React, {Component, Fragment} from 'react';
import BillForm from './BillForm';
import './Bill.css';
import { connect } from 'react-redux';
import { deleteBill } from '../actions/bills-actions';

export class Bill extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
      editing: false,
    };

    this.togglePanel = this.togglePanel.bind(this);
    this.deleteBill = this.deleteBill.bind(this);
    this.togglePaid = this.togglePaid.bind(this);
    this.toggleEditing = this.toggleEditing.bind(this);
  }

  togglePanel() {
    this.setState({expanded: !this.state.expanded});
  }

  togglePaid(id) {
    console.log(`Bill id:${id} toggled as paid/unpaid`);
  }

  toggleEditing() {
    this.setState({editing: !this.state.editing})
  }

  deleteBill(id) {
    console.log(`Deleting bill ${id}`);
    this.props.dispatch(deleteBill(id));
  }

render() {
  const { id, title, amount, billinterval, index } = this.props;

  const collapsibleIdentifier = `collapsible-${id}`;

  let info;

  if (this.state.editing) {
    info = <BillForm title={title} amount={amount} billinterval={billinterval} id={id}
    cancelButton={this.toggleEditing} editing={true} closeForm={this.toggleEditing} index={index}
    />
  } else {
    info =
    <div
          id={collapsibleIdentifier}
          className='collapsible expanded-bill'
          aria-hidden={!this.state.expanded}
        >
          <p className='expanded-amt'>${amount}</p>
          <p className='expanded-title'>{title}</p>
          <p className='expanded-int'>
            - Due {billinterval}
            {/* {beenpaid} */}
            {/* extension feature: {duedate} */}
            {/* extension feature: {category_id} */}
          </p>
          <div className='expanded-button-container'>
            {/* EXTENSION FEATURE! <button
              className='expanded-button'
              onClick={() => this.togglePaid(id)}
            >
              Mark As Paid
            </button> */}
            <button
              className='expanded-button'
              onClick={() => this.toggleEditing(id)}
            >
              Edit
            </button>
            <button
              className='expanded-button'
              onClick={() => this.deleteBill(id)}
            >
              Delete
            </button>
          </div>
        </div>
  }

  return (
    <Fragment>
        <button
          className='bill-button'
          aria-expanded={this.state.expanded}
          aria-controls={collapsibleIdentifier}
          onClick={this.togglePanel}
        >
          <div className='bill-info'>
            <p className='bill-amt'>${amount}</p>
            <p className='bill-title'>{title}</p>
          </div>
          <div className='bill-toggle-btn'
            aria-expanded={this.state.expanded}
          />
        </button>
        <div
          id={collapsibleIdentifier}
          className='collapsible'
          aria-hidden={!this.state.expanded}
        >
        {info}
      </div>
    </Fragment>
    );
  }
};

Bill.defaultProps = {
  expanded: false,
  title: 'Happiness',
  amount: 0,
  duedate: '',
  beenpaid: false,
  billinterval: 'monthly'
}

export default connect()(Bill);