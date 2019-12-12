import React, {Component} from 'react';
import ClassComponentLifecycleState from './ClassComponentLifecycleState';

interface State {
  visible: boolean;
}

class ClassComponentLifecycle extends Component<{}, State> {

  constructor(props: {}) {
    super(props);
    this.state = { visible: true };
  }

  hide() {
    this.setState(it => ({visible: false}));
  }

  show() {
    this.setState(it => ({visible: true}));
  }

  render() {
    const {visible} = this.state;
    return (
      <section className="ClassComponentLifecycle">
        <h1>Class Component with Lifecycle</h1>
        <div>
          <button onClick={() => this.hide()}>hide</button>
          <button onClick={() => this.show()}>show</button>
        </div>
        {visible && <ClassComponentLifecycleState />}
      </section>
    );
  }

}

export default ClassComponentLifecycle;
