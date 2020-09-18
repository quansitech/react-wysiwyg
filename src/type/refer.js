import Type from './type';
import React from 'react';
import MgPopover from '../components/mg_popover';
import { ArrowRightOutlined } from '@ant-design/icons';

export default class TypeRefer extends Type{

    constructor(ele, options, result){
        super(ele, options, result);

        this.type = 'refer';
        this.link = this.ele.dataset.link;

        window.addEventListener('resize', (e) => {
            this.setEleStyle();
        });
    }

    getMgValue = () => {
        return null;
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
        return null;
    }

    getFontSize = () => {
        let fontSize = this.ele.dataset.fontsize ? this.ele.dataset.fontsize : this.options.imageFontSize;
        return fontSize ? fontSize : '30px';
    }

    setEleStyle = () => {
        let rect = this.ele.parentElement.getBoundingClientRect();
        let bodyRect = document.body.getBoundingClientRect();

        this.ele.style.position = "absolute";
        this.ele.style.width = rect.width + "px";
        this.ele.style.height = rect.height + "px";
        this.ele.style.display = 'flex';
        this.ele.style.alignItems = 'center';
        this.ele.style.justifyContent = 'center';
        this.ele.style.zIndex = 1000;
        this.ele.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
        this.ele.style.minHeight = '40px';

        this.ele.style.top = rect.top - bodyRect.top + "px";
        this.ele.style.left = rect.left - bodyRect.left + "px"
    }

    render = async (mgValue, handleChange) => {
        this.setEleStyle();
        let component = await this.loadComponent();
        const Comp = <component.default link={ this.link } ></component.default>;
        return <MgPopover component={ Comp } ><ArrowRightOutlined style={{ position: 'absolute', fontSize: this.getFontSize(), zIndex: "1000", color: 'white', top: this.getTop(), left: this.getLeft() }}/></MgPopover>
    }
}