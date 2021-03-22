import React, {Component} from 'react';

export default class ClassComponentProps extends Component {
constructor(props) {
  super(props);
  this.state = {
    fruits: ["canteloupe", "banana", "honeydew", "watermelon", "blue berries"],
    newFruit: "",
  };
  this.plusFruit = this.plusFruit.bind(this);
}

addFruit(event) {
  event.preventDefault();
  this.setState({
    fruitBowl: [...this.state.fruitBowl, this.state.newFruit],
    newFruit: "",
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
          <FruitBowl fruits={this.state.fruitBowl} />
        </div>
      </div>
    );
  }
}
class FruitBowl extends Component {
  render () {
    return (
      <div>
        {this.props.fruits.map((fruit) => {
          return <Fruit passingFruit={fruit} />;
        })}
      </div>
    );
  }
}

const Fruit = (props) => {
  return (
    <div>
    <h3>{props.passingFruit}</h3>
    </div>
  );
};

/*
==============
Challenge I
==============

In the ClassComponentProps component, build out the component's state to include two properties. 
1) The first is an array prepopulated with some fruit. 
2) The second is a property called "newFruit". The initial value for this property should be an empty string.

Build out the render to display an input field and a submit button. The value of the input field should refer to one of the state properties. Include the styling applied to previous components.
*/
