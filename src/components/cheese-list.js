import React from 'react';
import {connect} from 'react-redux';
import {fetchCheeses, addCheese} from '../actions/cheese';


export class CheeseList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchCheeses());
  };

render () {

  return (
    <div className='cheese-add'>
    <ul>{this.props.cheeses}</ul>
    <form onSubmit = { (e) => {
      e.preventDefault();
      this.props.dispatch(addCheese(this.input.value))}}>
        <input type="search" ref={input => (this.input = input)} />
        <button>Add a Cheese, any Cheese!</button>
    </form>
    </div>
    );

}



}


const mapStateToProps = state => ({
  cheeses: state.cheeses
});

export default connect(mapStateToProps)(CheeseList);