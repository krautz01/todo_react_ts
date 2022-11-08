import React from 'react'
import {useNavigate} from 'react-router-dom'

export const AboutPage: React.FunctionComponent = () => {
  const history = useNavigate()
  return (
    <>
        <h1>Information page</h1>
        <p>This Todolist project by Nurlanov Bektur made with React and TypeScript</p>
    <button className='btn'onClick={() => history('/')}>Back to to-do list</button></>
  )
}
