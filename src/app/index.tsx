import React from 'react'
import ToggleCaseComponent from '../components/ToggleCaseComponent'
import ToLowerCaseComponent from '../components/ToLowerCaseComponent'
import ToUpperCaseComponent from '../components/ToUpperCaseComponent'

const App = () => {
  return (
    <div>
      <ToLowerCaseComponent>
        HELLO WORLD
      </ToLowerCaseComponent>
      <ToUpperCaseComponent>
        hello world
      </ToUpperCaseComponent>
      <ToggleCaseComponent initialMode='lower'>
        Hello World
      </ToggleCaseComponent>
    </div>
  )
}

export default App