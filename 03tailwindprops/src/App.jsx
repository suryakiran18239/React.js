import { useState } from 'react'
import './components/Card'
import './App.css'
import Card from './components/Card'

function App({buttonName}) {
  let myObj = {name:"Kiran",
    place:"TG"
  }

  let newArr = [1,2,3,4]

  return (
    <>
    <h1 className='bg-blue-500 text-white p4 rounded-xl text-lg mb-5'>Tailwind CSS</h1>
    <Card testProp="Abcd" testArr={newArr} headingtext="Heading-1"/>
    <Card buttonName="Click here" sampleTest="this is sample paragraph" headingtext="Heading-2"/>
    </>
  )
}

export default App
