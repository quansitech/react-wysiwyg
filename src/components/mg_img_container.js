import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';

export default function ImageContainer(props){
    useEffect(() => {
        props.img.parentElement.insertBefore(el, props.img);
        props.img.parentElement.removeChild(props.img);
        
        return () => {
            el.parentElement.insertBefore(props.img, el);
            el.parentElement.removeChild(el);
        }
    });

    const el = document.createElement('div');

    return ReactDOM.createPortal(
        props.children,
        el
    );
}