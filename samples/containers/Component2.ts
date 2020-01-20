import {Dispatch, bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {StoreState} from '../store';
import Component2, {Props} from '../components/Component2';

const mapStateToProps = (state: StoreState): Props => ({count: state.counter.count});
const mapDispatchToProps = (dispatch: Dispatch): Props => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Component2);
