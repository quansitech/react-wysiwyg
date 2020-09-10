import Type from './type';
import React from 'react';
import ImageContainer from '../components/mg_img_container';
import MgPopover from '../components/mg_popover';
import { UploadOutlined } from '@ant-design/icons';
import Util from '../lib/util';

export default class TypeImage extends Type{

    constructor(ele, options, result){
        super(ele, options, result);

        this.type = 'image';
    }

    getMgValue = () => {
        return this.ele.src;
    }

    getTop = () => {
        let top = this.ele.dataset.top;
        return top ? top : '50%';
    }

    getActionUrl = () => {
        return this.ele.dataset.upload ? this.ele.dataset.upload : this.options.imageUploadUrl;
    }

    getFontSize = () => {
        let fontSize = this.ele.dataset.fontSize ? this.ele.dataset.fontSize : this.options.imageFontSize;
        return fontSize ? fontSize : '30px';
    }

    handleChange = (res) => {
        this.result[this.key] = {
            type: this.type,
            value: res.file_id
        };
        return res.url;
    }

    render = async (mgValue, handleChange) => {
        let component = await this.loadComponent();
        const Comp = <component.default mgValue={ mgValue } change={ handleChange } actionUrl={ this.getActionUrl() } ></component.default>;
        return <ImageContainer img={this.ele}>
            <MgPopover component={ Comp } >
            <span style={{display: 'inline-block',position: 'relative'}}>
                <span style={{position: 'absolute',width: '100%',height: '100%',backgroundColor: 'rgba(0,0,0,.6)',left: 0,top: 0}}>
                </span>
                <img className={this.ele.className } style={ Util.cssTextToObject(this.ele.style.cssText) } src={mgValue} />
                <UploadOutlined className={'qs-wg'} style={{ fontSize: this.getFontSize(), top: this.getTop() }} />
            </span>
            </MgPopover>
        </ImageContainer>;
    }
}