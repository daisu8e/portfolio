import {Dispatch, bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {StoreState} from '../store';
import {decrement, increment, add} from '../store/counter/actions';

import Component1, {Props} from '../components/Component1';

const mapStateToProps = (state: StoreState): Props => ({count: state.counter.count});
const mapDispatchToProps = (dispatch: Dispatch): Props => bindActionCreators({decrement, increment, add}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Component1);

