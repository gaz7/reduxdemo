
import { connect } from 'react-redux';
import Mutterings from '../components/Mutterings';

const mapStateToProps = (state, ownProps) => {
    return {
        mutterings: state.mutterings
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        /*onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }*/
    }
}

const LoadedMutters = connect(
    mapStateToProps,
    mapDispatchToProps
)(Mutterings)

export default LoadedMutters
