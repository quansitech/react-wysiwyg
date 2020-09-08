import React, {useState} from 'react';
import { Input } from 'antd';

export default function MgDText(props){
    const [ mgValue, setMgValue ] = useState(props.mgValue)

    const handleChange = e => {
        setMgValue(e.target.value)
        props.change(e.target.value)
    }

    const handleClick = e => {
        e.stopPropagation();
        e.preventDefault();
    }

    return <Input className={ 'qs-wg' } value={ mgValue } onClick={ handleClick } onChange={ handleChange }/>
}