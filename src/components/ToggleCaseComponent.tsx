import React, { Component } from 'react'

interface ToggleCaseComponentProps {
  children: string
  initialMode: 'lower' | 'upper'
}

interface ToggleCaseComponentState {
  mode: 'lower' | 'upper'
}

class ToggleCaseComponent extends Component<ToggleCaseComponentProps, ToggleCaseComponentState> {
  constructor( props: ToggleCaseComponentProps ) {
    super( props )
    this.state = { mode: props.initialMode }
    this.toggle = this.toggle.bind( this )
  }
  toggle() {
    this.setState( { mode: this.state.mode === 'lower' ? 'upper' : 'lower' } )
  }
  render() {
    return (
      <div onClick={this.toggle}>
        <p>
          { this.state.mode === 'lower'
            ? this.props.children.toLocaleLowerCase()
            : this.props.children.toUpperCase() }
        </p>
      </div>
    )
  }
}

export default ToggleCaseComponent
