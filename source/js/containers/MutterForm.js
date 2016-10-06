import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {addMutter} from '../actions';

let MutterForm = ({dispatch}) => {
    let input;

    return (
        <form onSubmit={e => {
            e.preventDefault();
            if (!input.value.trim()) {
                return;
            }
            dispatch(addMutter(input.value));
            input.value = '';
        }}>
            <div className="form-group">
                <label htmlFor="mutterText">New Mutter</label>
                <input id="mutterText" type="text" className="form-control" placeholder="Mutter" ref={node => {
                    input = node;
                }} />
            </div>
            <button type="submit" className="btn btn-default">Submit</button>
        </form>
    );
};

MutterForm = connect()(MutterForm);

export default MutterForm
