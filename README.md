## summary
所见即所得的cms编辑组件

## install
npm i @quansitech/react-wysiwyg 

## usage
给需要进行编辑的元素添加'render-mg'class

添加data-component="text"(text只是其中一种类型，可以改成需要的类型)，不同类型的component会有相应的data配置值，详细参看具体类型部分

添加data-key="cover"，设置可编辑元素对应的key，可通过 getResult方法获取当前key值

全局设置
```js
import WYSIWYG from './index';

const options = {
    className: '', //启动所见即所得功能的元素class，默认render-mg，可改成自己需要的值
    imageUploadUrl: '', //image类型可通过该值全局设置的上传url
    imageFontSize: '', //image类型可通过该值全局设置icon图片大小
}

const wg = new WYSIWYG(options);

wg.getResult(); //获取当前所有编辑元素的值
```

### type
1. image  

data-upload='url' 可对image类型元素单独设置图片上传url

data-fontSize='24px' 单独设置图片icon的大小

当存在全局设置时，单独设置有更高优先级

2. text

3. textarea
