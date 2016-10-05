
import React from 'react'
import AddMutter from '../containers/AddMutter'
import LoadedMutters from '../containers/LoadedMutters'

const App = () => (
  <div className="container">
    <h1>Mutterings</h1>
    <AddMutter />
    <LoadedMutters />
  </div>
)

export default App
