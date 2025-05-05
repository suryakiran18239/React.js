import React, {useContext} from 'react'
import {LoginContext} from './CreateContext_provider'

function ChildComponent() {
   const login = useContext(LoginContext)
   console.log(login);
   
  return (
    <div>ChildComponent</div>
  )
}

export default ChildComponent