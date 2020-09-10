import React from 'react';
import MgPopover from '../components/mg_popover';
import TypeImage from './image';
import DivContainer from '../components/mg_div_container';

import { UploadOutlined } from '@ant-design/icons';

export default class TypeBackgroundImage extends TypeImage{

    constructor(ele, options, result){
        super(ele, options, result);

        this.type = 'backgroundImage';
        this.componentType = 'image';
    }

    getMgValue = () => {
        let re = /url\(['"](.+?)['"]\)/;
        let re_arr = re.exec(this.ele.style.backgroundImage);
        return re_arr[1];
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
        this.ele.style.backgroundImage = `url("${mgValue}")`;
        return <DivContainer div={ this.ele }>
                    <MgPopover component={ Comp } >
                    <span style={{display: 'inline-block',position: 'relative', width: '100%', height: '100%'}}>
                        <span style={{position: 'absolute',width: '100%',height: '100%',backgroundColor: 'rgba(0,0,0,.6)',left: 0,top: 0}}>
                        </span>
                        <UploadOutlined className={'qs-wg'} style={{ fontSize: this.getFontSize(), top: this.getTop() }} />
                    </span>
                    </MgPopover>
                </DivContainer>
            
    }
}