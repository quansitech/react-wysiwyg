import React from 'react';
import { Popover } from 'antd';

export default function MgPopover(props){

    return <Popover style={{ pointerEvents: 'all' }} trigger="click" content={ props.component }>
        {props.children}
    </Popover>
}

