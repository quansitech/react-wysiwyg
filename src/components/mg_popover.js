import React from 'react';
import { Popover } from 'antd';

export default function MgPopover(props){

    const handleClick = (e) => {
        e.stopPropagation();
    }

    return <Popover onClick={ handleClick } style={{ pointerEvents: 'all' }} trigger="click" content={ props.component }>
        {props.children}
    </Popover>
}

