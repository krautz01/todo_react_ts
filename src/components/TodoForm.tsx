import React, { useRef } from 'react'

interface TodoFormProps {
  onAdd(title:string): void
}

export const TodoForm: React.FunctionComponent<TodoFormProps> = (props) => {
const ref = useRef<HTMLInputElement>(null)


  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      props.onAdd(ref.current!.value) //! is 'iam sure the value will not be null'
      ref.current!.value=''
    }
  }

  return (
    <div className='input-field mt2'>
      <input ref={ref}
        type='text'
        id='title'
        placeholder='Enter case name'
        onKeyPress={keyPressHandler} />
      <label htmlFor='title' className='active'>
        Enter case name
      </label>
    </div>
  )
}