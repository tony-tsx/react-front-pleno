type Reducer<S, A> = ( state: S, action: A ) => S
type Observer = () => void
type ActionTemplate<T> = { type: T }

const createStore = <S, A extends ActionTemplate<any>>( reducer: Reducer<S, A>, initialState: S ) => {
  let __state = initialState
  const __observers: Observer[] = []
  const __compareStateAndEmit = ( action: A ) => {
    const oldState = getState()
    const newState = reducer( oldState, action )
    __state = newState

    if ( newState !== oldState )
      __observers.forEach( observer => observer() )
    
  }

  const observer = ( observer: Observer ) => {
    __observers.push( observer )
    return () => {
      __observers.splice( __observers.indexOf( observer ), 1 )
    }
  }
  const dispatch = ( action: A ) => __compareStateAndEmit( action )
  const getState = () => __state

  return { observer, dispatch, getState }
}

export default createStore

// --- Fim da biblioteca ---

interface MyState {
  [key: string]: any
}
interface MyAction extends ActionTemplate<string> {
  [key: string]: any
}

const reducer: Reducer<MyState, MyAction> = ( state, action ) => {
  switch ( action.type ) {
    case 'SIGN_IN_USER':
      return {
        ...state,
        user: {
          email: action.email,
          password: action.password
        }
      }
    case 'SIGN_OUT_USER':
      return { ...state, user: null }
    default: return state
  }
}

console.log( 'criação da store' )

const store = createStore<MyState, MyAction>( reducer, {} )

console.log( 'estado inicial: ', store.getState() )

store.observer( () => {
  console.log( 'o estado foi alterado' )
} )

store.dispatch( {
  type: 'SIGN_IN_USER',
  email: 'tony.js@zoho.eu',
  password: '123456789'
} )

console.log( store.getState() )

store.dispatch( { type: 'SIGN_OUT_USER' } )

console.log( store.getState() )

store.dispatch( { type: 'ANOTHER_ACTION' } )

console.log( store.getState() )
