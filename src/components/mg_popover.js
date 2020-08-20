import React from 'react';
import { Popover } from 'antd';

export default function MgPopover(props){

    return <Popover trigger="click" content={ props.component }>
        {props.children}
    </Popover>
}

