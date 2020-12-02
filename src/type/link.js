import Type from './type';
import React from 'react';
import MgPopover from '../components/mg_popover';
import MaskContainer from '../components/mg_mask_container';
import { LinkOutlined } from '@ant-design/icons';

export default class TypeLink extends Type{

    constructor(ele, options, result){
        super(ele, options, result);

        this.type = 'link';
        this.componentType = 'text';
    }

    getMgValue = () => {
        return this.ele.dataset.value;
    }

    getTop = () => {
        let top = this.ele.dataset.top;
        return top ? top : '';
    }

    getLeft = () => {
        let left = this.ele.dataset.left;
        return left ? left : '';
    }

    handleChange = (text) => {
        this.result[this.key] = {
            type: this.type,
            value: text
        };
        return text;
    }

    getFontSize = () => {
        let fontSize = this.ele.dataset.fontSize ? this.ele.dataset.fontSize : this.options.imageFontSize;
        return fontSize ? fontSize : '30px';
    }

    render = async (mgValue, handleChange) => {
        let component = await this.loadComponent();
        const Comp = <component.default mgValue={ mgValue } change={ handleChange } ></component.default>;
        return <MaskContainer ele={this.ele} target='parent'>
            <MgPopover component={ Comp } >
                <LinkOutlined className={'qs-wg'} style={{ position: 'absolute', fontSize: this.getFontSize(), zIndex: "1000", color: 'white', top: this.getTop(), left: this.getLeft() }} />
            </MgPopover>
        </MaskContainer>;
    }
}