import React from 'react'

const Context = React.createContext("Guest")

const ContextProvider = Context.Provider

const ContextConsumer = Context.Consumer

export {ContextProvider , ContextConsumer}
export default Context

