import React, { Component } from 'react';
import {FiThumbsUp, FiThumbsDown} from 'react-icons';

export default class ClassComponentDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { incrementCount: 0, decreaseCount: 0 };
  }

  incrementCount = () => {
    console.log("increment called");
    this.setState(
      { incrementfCount: this.state.incrementCount + 1 }
    );
  };
    decreaseCount = () = {
      this.setState(
        { decreaseCount: this.state.decreaseCount - 1 }
      );
    };

  render() {
    console.log("render called");
    return (
      <div className="main">
        <div className="mainDiv">

          <hr />
          <h1>Love it? Hate it? Let us know - tappy tap away, please!</h1>
          <h3>LIKE THIS</h3>
          <button onCLick={this.incrementCount}>
            Likes: {this.state.count}
          </button>
          <h3>DISLIKE THIS</h3>
          <button onCLick={this.decreaseCount}>
            Dislikes: {this.state.count}
          </button>
        </div>
      </div>
    );
  }
}
class FruitBowl extends Component {
  render() {
    return (
      <div>
        {this.props.fruits.map((fruit) => {
          return <p>{fruit}</p>
        })}
      </div>
    );
  }
}
const ClassComponentNotes = function () {
  return (
    <div> 
        <h1>Class Components</h1>
        <p>Class Components are considered the "React way" of writing components.</p>
        <dl>
          <dt>ES6 JS Classes</dt>
          <dd>Built on these, must understand them.</dd>
          <dt>must extent Component</dt>
          <dd>Class Components need to extend teh React Component.</dd>
          <dt>render()</dt>
          <dd>Class components must always have a render method.</dd>
          <dt>export</dt>
          <dd>Only one class component exported per file, but multiple class components can be in one file. Use export, like Functional Components.</dd>
          <dd>Have lifecycle hooks/methods, different phases in the lifecycle of the component where different events can/should happen.</dd>
        </dl>
    </div>
  );
};

export default ClassComponentDemo;