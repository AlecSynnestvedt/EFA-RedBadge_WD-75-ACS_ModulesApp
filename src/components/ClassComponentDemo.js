import React, { Component } from 'react';

export default class ClassComponentDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { simpleMessage: "Welcome, User!"};
  }

  render() {
    return (
      <div className="main">
        <div className="mainDiv">

          <h4>
            {this.state.simpleMessage}
          </h4>
        </div>
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
          <dd>Only one class component exported per file</dd>
        </dl>
    </div>
  );
};
