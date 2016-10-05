import React, { PropTypes } from 'react';

const MutterForm = ({onSubmit}) => (
    <form onSubmit={ e => {
        e.preventDefault();
        const mutterText = 'hello';
        onSubmit(mutterText);
    }}>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">New Mutter</label>
            <input type="text" className="form-control" placeholder="Mutter" />
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
    </form>
)

MutterForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default MutterForm
