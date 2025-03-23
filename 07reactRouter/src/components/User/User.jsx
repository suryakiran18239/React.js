import React from 'react'
import {useParams} from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-blue-200 p-4 text-center text-2xl font-bold'>
      User: {userid}
    </div>
  )
}

export default User