import Type from './type';
import React from 'react';
import MaskContainer from '../components/mg_mask_container';
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

    getTop = () => {
        let top = this.ele.dataset.top;
        return top ? top : '50%';
    }

    getLeft = () => {
        let left = this.ele.dataset.left;
        return left ? left : '';
    }

    getActionUrl = () => {
        return this.ele.dataset.upload ? this.ele.dataset.upload : this.options.imageUploadUrl;
    }

    getFontSize = () => {
        let fontSize = this.ele.dataset.fontsize ? this.ele.dataset.fontsize : this.options.imageFontSize;
        return fontSize ? fontSize : '30px';
    }

    getTips = () => {
        return this.ele.dataset.tips ? this.ele.dataset.tips : '';
    }

    getSize = () => {
        let size = this.ele.dataset.size ? this.ele.dataset.size : this.options.imageSize;
        return size ? size : 10;
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
        this.ele.src = mgValue;
        const Comp = <component.default mgValue={ mgValue } change={ handleChange } actionUrl={ this.getActionUrl()} tips={ this.getTips() } size={ this.getSize() } ></component.default>;
        return <MaskContainer ele={this.ele}>
            <MgPopover component={ Comp } >
            {/* <span style={{display: 'inline-block',position: 'relative'}}>
                <span style={{position: 'absolute',width: '100%',height: '100%',backgroundColor: 'rgba(0,0,0,.6)',left: 0,top: 0}}>
                </span>
                <img className={this.ele.className } style={ Util.cssTextToObject(this.ele.style.cssText) } src={mgValue} /> */}
                <UploadOutlined className={'qs-wg'} style={{ position: 'absolute', fontSize: this.getFontSize(), zIndex: "1000", color: 'white', top: this.getTop(), left: this.getLeft() }} />
            {/* </span> */}
            </MgPopover>
        </MaskContainer>;
    }
}