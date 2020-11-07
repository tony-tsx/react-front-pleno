import React, { useState } from 'react'
import ToggleCaseComponent from '../components/ToggleCaseComponent'

const App = () => {
  const [ show, setShow ] = useState( true )
  const [ mode, setMode ] = useState<'lower' | 'upper'>( 'lower' )
  return (
    <div>
      <button onClick={ () => setShow( show => !show ) }>
        { show ? 'Remover' : 'Inserir' }
      </button>
      <button onClick={ () => setMode( mode => mode === 'lower' ? 'upper' : 'lower' ) }>
        { mode === 'lower' ? 'Converter para upper case' : 'Convert para lower case' }
      </button>
      { show && (
        <ToggleCaseComponent initialMode={mode}>
          Hello World
        </ToggleCaseComponent>
      ) }
    </div>
  )
}

export default App