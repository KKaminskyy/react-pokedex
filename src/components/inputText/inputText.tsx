import * as C from './inputText.styles'
import {useState} from 'react'

type Props = {
    value: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>,
    placeholder: string
}

const InputText = ({value, onChange, placeholder}: Props) => {
    return (
        <C.inputText value={value} onChange={onChange} placeholder={placeholder}/>
    );
  }

export default InputText