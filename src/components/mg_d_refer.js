import React from 'react';
import { Button } from 'antd';

export default function MgDRefer(props){

    const handleClick = e => {
        window.top.location.href = props.link;
    }

    return <Button type="primary" onClick={ handleClick }>跳转</Button>
}