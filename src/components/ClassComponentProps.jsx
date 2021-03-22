import React, {Component} from 'react';

export default class ClassComponentProps extends Component {
constructor(props) {
  super(props);
  this.state = {
    fruits: ["apples", "bananas", "oranges", "mangoe3s", "kiwis"],
    newFruit: "",
  };
  this.plusFruit = this.plusFruit.bind(this);
}

addFruit(event) {
  even.preventDefault();
  this.setState({
    fruits: [...this.state.fruits, this.state.plusFruit],
  });
}

changeHandler(event) {
  this.setStateI({ newFruit: event.target.value });
}
  render () {
    return (
      <div className="main">
        <div className="mainDiv">
          <form onSubmit={this.plusFruit}>
            <input type="text" value={this.state.newFruit} onChange={(event) => this.changeHandler(event)}/>
            <button type="submit">Add a Fruit!</button>
          </form>
        </div>
      </div>
    );
  }
}

export default ClassComponentProps;

class FruitBowl extends Component {
  render () {
    return (
      <div>
        {this.props.fruits.map((fruit) => {
          return <p>{fruit}</p>
        })}
      </div>
    );
  }
}
/*
==============
Challenge I
==============

In the ClassComponentProps component, build out the component's state to include two properties. 
1) The first is an array prepopulated with some fruit. 
2) The second is a property called "newFruit". The initial value for this property should be an empty string.

Build out the render to display an input field and a submit button. The value of the input field should refer to one of the state properties. Include the styling applied to previous components.
*/
