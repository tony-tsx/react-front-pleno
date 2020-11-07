import React, { Component } from 'react'

interface ToggleCaseComponentProps {
  children: string
  initialMode: 'lower' | 'upper'
}

interface ToggleCaseComponentState {
  mode: 'lower' | 'upper'
}

const H1 = ( props: any ) => <h1>{props.text}</h1>

class ToggleCaseComponent extends Component<ToggleCaseComponentProps, any> {
  constructor( props: ToggleCaseComponentProps ) {
    super( props )
    this.state = { mode: props.initialMode, load: true }
  }
  protected toggle = () => {
    this.setState( { mode: this.state.mode === 'lower' ? 'upper' : 'lower' } )
  }
  protected handlerClick = () => {
    alert( 'click' )
  }
  componentWillReceiveProps( nextProps: ToggleCaseComponentProps ) {
    console.log( 'componentWillReceiveProps' )
  }
  UNSAFE_componentWillReceiveProps() {
    console.log( 'UNSAFE_componentWillReceiveProps' )
  }
  shouldComponentUpdate( nextProps: ToggleCaseComponentProps, nextState: ToggleCaseComponentState ) {
    // console.log( this.props, nextProps )
    console.log( 'shouldComponentUpdate' )
    return true
  }
  componentWillMount() {
    console.log( 'componentWillMount' )
  }
  UNSAFE_componentWillMount() {
    console.log( 'UNSAFE_componentWillMount' )
  }
  componentWillUpdate() {
    console.log( 'componentWillUpdate' )
  }
  UNSAFE_componentWillUpdate() {
    console.log( 'UNSAFE_componentWillUpdate' )
  }
  render() {
    console.log( 'render' ) 
    return (
      <div onClick={this.toggle}>
        <p>
          { this.state.mode === 'lower'
            ? this.props.children.toLocaleLowerCase()
            : this.props.children.toUpperCase() }
        </p>
        { this.state.mode === 'lower' && <H1 text='Componente Exemplo'></H1> }
        { this.state.load && <h2>Carregando...</h2> }
        <ul>
          { this.state.pokemons && this.state.pokemons.map( ( pokemon: any ) => (
            <li>{pokemon.name}</li>
          ) ) }
        </ul>
      </div>
    )
  }
  componentDidUpdate() {
    console.log( 'componentDidUpdate' )
  }
  componentDidMount() {
    console.log( 'componentDidMount' )
    window.addEventListener( 'click', this.handlerClick )
    fetch( 'https://pokeapi.co/api/v2/pokemon' )
      .then( response => response.json() )
      .then( ( { results: pokemons } ) => this.setState( { pokemons, load: false } ) )
  }
  componentWillUnmount() {
    console.log( 'componentWillUnmount' )
    window.removeEventListener( 'click', this.handlerClick )
  }
}

export default ToggleCaseComponent
