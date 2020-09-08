import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';

export default function DivContainer(props){
    return ReactDOM.createPortal(
        props.children,
        props.div
    );
}