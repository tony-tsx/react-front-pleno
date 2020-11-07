import React, { Component } from 'react'

interface LifeCycleProps {
  children: string
  mode: 'lower' | 'upper'
}

interface LifeCycleState {
  mode: 'lower' | 'upper'
}

class LifeCycle extends Component<LifeCycleProps, LifeCycleState> {

  protected toggle = () => {
    this.setState( { mode: this.state.mode === 'lower' ? 'upper' : 'lower' } )
  }

  constructor( props: LifeCycleProps ) {
    super( props )
    this.state = { mode: props.mode }
  }

  // public static getDerivedStateFromProps( props: LifeCycleProps, state: LifeCycleState ): Partial<LifeCycleState> {
  //   console.log( 'getDerivedStateFromProps' )
  //   return { mode: state.mode }
  // }

  componentWillReceiveProps( nextProps: LifeCycleProps ) { console.log( 'componentWillReceiveProps' ) }
  UNSAFE_componentWillReceiveProps( nextProps: LifeCycleProps ) { console.log( 'UNSAFE_componentWillReceiveProps' ) }

  shouldComponentUpdate( nextProps: LifeCycleProps, nextState: LifeCycleState ) {
    // console.log( this.props, nextProps )
    // console.log( this.state, nextState )
    console.log( 'shouldComponentUpdate' )
    return true
  }

  componentWillMount() { console.log( 'componentWillMount' ) }
  UNSAFE_componentWillMount() { console.log( 'UNSAFE_componentWillMount' ) }

  componentWillUpdate() { console.log( 'componentWillUpdate' ) }
  UNSAFE_componentWillUpdate() { console.log( 'UNSAFE_componentWillUpdate' ) }

  render() {
    console.log( 'render' )
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

  componentDidMount() { console.log( 'componentDidMount' ) }

  componentDidUpdate() { console.log( 'componentDidUpdate' ) }

  componentWillUnmount() { console.log( 'componentWillUnmount' ) }
}

export default LifeCycle
