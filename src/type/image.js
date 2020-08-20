import Type from './type';
import React from 'react';
import ImageContainer from '../components/mg_img_container';
import MgPopover from '../components/mg_popover';
import { UploadOutlined } from '@ant-design/icons';


export default class TypeImage extends Type{

    constructor(ele, options, result){
        super(ele, options, result);

        this.type = 'image';
    }

    getMgValue = () => {
        return this.ele.src;
    }

    getActionUrl = () => {
        return this.ele.dataset.upload ? this.ele.dataset.upload : this.options.imageUploadUrl;
    }

    getFontSize = () => {
        let fontSize = this.ele.dataset.fontSize ? this.ele.dataset.fontSize : this.options.imageFontSize;
        return fontSize ? fontSize : '30px';
    }

    handleChange = (res) => {
        this.result[this.key] = res.file_id;
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
                <img className={this.ele.className } src={mgValue} />
                <UploadOutlined style={{ fontSize: this.getFontSize() }} />
            </span>
            </MgPopover>
        </ImageContainer>;
    }
}