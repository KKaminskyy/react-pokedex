import { api } from '../../api'
import * as C from './navToggle.styles'
import { NavToggleProps } from '../../types/NavToggleType'
import {useState} from 'react'

const NavToggle = ({typeNames}:NavToggleProps) => {

    return (
        <C.container>
            <C.select>
              <C.option >None</C.option>
              {
              typeNames.map((type:string)=>(
                <C.option value={type}>{type}</C.option>
              ))
              
              }
            </C.select>
        </C.container>
    );
  }

export default NavToggle