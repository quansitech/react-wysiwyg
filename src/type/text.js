import Type from './type';
import React from 'react';
import { EditOutlined } from '@ant-design/icons';
import MgPopover from '../components/mg_popover';
import TextContainer from '../components/mg_text_container';

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

    getFontSize = () => {
        return window.getComputedStyle(this.ele).getPropertyValue('font-size') || '30px';
    }

    getColor = () => {
        return window.getComputedStyle(this.ele).getPropertyValue('color');
    }


    render = async (mgValue, handleChange) => {
        let component = await this.loadComponent();
        const Comp = <component.default mgValue={ mgValue } change={ handleChange } ></component.default>;
        return <TextContainer ele={ this.ele } mgValue={ mgValue }>
            <MgPopover component={ Comp }>
                <EditOutlined className="qs-wg" style={{ fontSize: this.getFontSize(), color: this.getColor(), opacity: 0.6, zIndex:"10000" }}/>
            </MgPopover>
        </TextContainer>
    }
}