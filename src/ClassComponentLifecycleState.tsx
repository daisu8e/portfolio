import React, {Component} from 'react';

interface State {
  count: number;
}

class ClassComponentLifecycleState extends Component<{}, State> {

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

  componentDidMount = () => {
    console.log('ClassComponentLifecycleState.componentDidMount');
  };

  shouldComponentUpdate = (nextProps: {}, nextState: State) => {
    console.log('ClassComponentLifecycleState.shouldComponentUpdate');
    console.log(nextState)
    return true;
  };

  componentDidUpdate = (prevProps: {}, prevState: State) => {
    console.log('ClassComponentLifecycleState.componentDidUpdate');
    console.log(prevState)
  };

  componentWillUnmount = () => {
    console.log('ClassComponentLifecycleState.componentWillUnmount');
  };

  render() {
    const {count} = this.state;
    return (
      <>
        <button onClick={() => this.decrement()}>-</button>
        <span>{count}</span>
        <button onClick={() => this.increment()}>+</button>
      </>
    );
  }

}

export default ClassComponentLifecycleState;
