import React, {useState} from 'react';
import { Input } from 'antd';

export default function MgDText(props){
    const [ mgValue, setMgValue ] = useState(props.mgValue)

    const handleChange = e => {
        setMgValue(e.target.value)
        props.change(e.target.value)
    }

    return <Input className={ 'qs-wg' } value={ mgValue } onChange={ handleChange }/>
}