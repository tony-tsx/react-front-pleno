import React from 'react'

interface ToUpperCaseComponentProps {
  children: string
}

const ToUpperCaseComponent = ( props: ToUpperCaseComponentProps ) => {
  return (
    <div>
      <p>{props.children.toUpperCase()}</p>
    </div>
  )
}

export default ToUpperCaseComponent