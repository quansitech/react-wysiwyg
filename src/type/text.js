import Type from './type';
import React from 'react';
import { EditOutlined } from '@ant-design/icons';
import MgPopover from '../components/mg_popover';

export default class TypeText extends Type{

    constructor(ele, options, result){
        super(ele, options, result);

        this.type = 'text';
    }

    getMgValue = () => {
        return this.ele.innerHTML;
    }

    handleChange = (text) => {
        this.result[this.key] = {
            type: this.type,
            value: text
        };
        return text;
    }

    render = async (mgValue, handleChange) => {
        let component = await this.loadComponent();
        const Comp = <component.default mgValue={ mgValue } change={ handleChange } ></component.default>;
        return <MgPopover component={ Comp }>
            <span style={{display: 'inline-block',position: 'relative'}}>
                <span style={{position: 'absolute',width: '100%',height: '100%',backgroundColor: 'rgba(0,0,0,.3)',left: 0,top: 0}}>
                </span>
                { mgValue }
                <EditOutlined className={'qs-wg'}/>
            </span>
        </MgPopover>
    }
}