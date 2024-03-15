import React, { Component } from 'react';
import Die from './Die';
import './Dice.css';

class Dice extends Component {

  // static defaultProps =  {
  //   sides: ['one', 'two', 'three', 'four', 'five', 'six']
  // }

  // randomSide = () => {
  //   let {sides} = this.props
  //   return sides[Math.trunc(Math.random()*sides.length)]
  // }

  render() {
    
    return <div className="Dice">
      {this.props.dice.map((d, idx) =>
        <Die handleClick={this.props.handleClick}
          val={d}
          locked={this.props.locked[idx]}
          idx={idx}
          key={idx}
          // rollsLeft={this.props.rollsLeft}
          />
      )}
    </div>
  }
}

export default Dice;