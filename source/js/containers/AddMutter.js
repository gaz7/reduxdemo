
import { connect } from 'react-redux';
import MutterForm from '../components/MutterForm';

const mapStateToProps = (state, ownProps) => {
    return {
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSubmit: (txt) => {
            console.log('submit form!!!!!!!!', txt);
        }
    }
}

const AddMutter = connect(
    mapStateToProps,
    mapDispatchToProps
)(MutterForm)

export default AddMutter
