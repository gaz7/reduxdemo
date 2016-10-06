
import React from 'react';
import MutterForm from '../containers/MutterForm';
import LoadedMutters from '../containers/LoadedMutters';

const App = () => (
    <div className="container">
        <h1>Mutterings</h1>
        <MutterForm />
        <LoadedMutters />
    </div>
);

export default App
