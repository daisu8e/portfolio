import React, {Component} from 'react';

interface AppState {
  count: number;
}

class ClassComponentState extends Component<{}, AppState> {

  constructor(props: {}) {
    super(props);
    this.state = { count: 123 };
  }

  increment() {
    this.setState(it => ({count: it.count + 1}));
  }

  decrement() {
    this.setState(it => ({count: it.count - 1}));
  }

  render() {
    const {count} = this.state;
    return (
      <section className="ClassComponentState">
        <h1>Class Component with State</h1>
        <button onClick={() => this.decrement()}>-</button>
        <span>{count}</span>
        <button onClick={() => this.increment()}>+</button>
      </section>
    );
  }

}

export default ClassComponentState;
