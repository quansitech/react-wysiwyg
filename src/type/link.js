import Type from './type';
import React from 'react';
import MgPopover from '../components/mg_popover';
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
        return top ? top : '50%';
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

    setEleStyle = () => {
        let rect = this.ele.parentElement.getBoundingClientRect();
        this.ele.style.position = "absolute";
        this.ele.style.width = rect.width + "px";
        this.ele.style.height = rect.height + "px";
        this.ele.style.display = 'flex';
        this.ele.style.alignItems = 'center';
        this.ele.style.justifyContent = 'center';
        this.ele.style.zIndex = 1000;
        this.ele.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
        this.ele.style.minHeight = '40px';
    }

    render = async (mgValue, handleChange) => {
        this.setEleStyle();
        let component = await this.loadComponent();
        const Comp = <component.default mgValue={ mgValue } change={ handleChange } ></component.default>;
        return <MgPopover component={ Comp } ><LinkOutlined style={{ position: 'absolute', fontSize: this.getFontSize(), zIndex: "1000", color: 'white', top: this.getTop() }}/></MgPopover>
    }
}