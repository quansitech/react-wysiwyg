import React, {useState} from 'react';
import { Upload, message, Progress} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import "antd/lib/progress/style/index.css";

export default function MgDImage(props){
    const [ progress, setProgress] = useState(0);
    const [ loading, setLoading ] = useState(false);
    const [ mgValue, setMgValue ] = useState(props.mgValue)

    const getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    const handleChange = info => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            setProgress(info.file.percent.toFixed(2));
            return;
        }
        if (info.file.status === 'done') {
          setLoading(false);
          if(info.file.response.status){
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl => {
              setMgValue(imageUrl);
              props.change(info.file.response);
            });
          }
          else{
              message.error(info.file.response.info);
          }
        }
    }

    const beforeUpload = file => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('只能上传jpeg或者png格式的图片!');
        }
        const isLt2M = file.size / 1024 / 1024 < 10;
        if (!isLt2M) {
            message.error('图片大小不能超过10MB');
        }
        return isJpgOrPng && isLt2M;
    }


    const uploadButton = (
        <div>
          {loading ? <Progress type="circle" percent={progress} /> : <PlusOutlined />}
          <div>Upload</div>
        </div>
      );


    return (
      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
        <Upload
          className={ 'qs-wg' }
          listType="picture-card"
          showUploadList={false}
          action={props.actionUrl}
          beforeUpload={beforeUpload}
          onChange={handleChange}
        >
          {mgValue && !loading ? <img src={mgValue} style={{ width: '100%' }} /> : uploadButton}
        </Upload>
        {props.tips ? <span>{props.tips}</span> : null}
      </div>
    );
}