import {connect} from 'react-redux';
import { setVisibilityFilter } from '../../../../todo-actions/actions';
import { FilterButton } from './filterButton';


const mapStateToProps=(state, ownProps)=>({
    active:ownProps.filter===state.setVisibilityFilter
})
const mapDispatchToProps=(dispatch, ownProps)=>({
    onClick:()=>dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterButton)