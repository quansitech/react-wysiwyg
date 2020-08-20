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
        this.result[this.key] = text;
        return text;
    }

    render = async (mgValue, handleChange) => {
        let component = await this.loadComponent();
        const Comp = <component.default mgValue={ mgValue } change={ handleChange } ></component.default>;
        return <MgPopover component={ Comp } ><span><span>{ mgValue }</span><EditOutlined /></span></MgPopover>
    }
}