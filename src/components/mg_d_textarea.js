import React, {useState} from 'react';
import { Input } from 'antd';

export default function MgDTextarea(props){
    const [ mgValue, setMgValue ] = useState(props.mgValue)

    const handleChange = e => {
        setMgValue(e.target.value)
        props.change(e.target.value)
    }

    return <Input.TextArea className={ 'qs-wg' } rows={4} value={ mgValue } onChange={ handleChange }/>
}