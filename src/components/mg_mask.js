import ReactDOM from 'react-dom';
import React from 'react';

function BodyAppend(props){
    const bodyEl = document.getElementsByTagName('body')[0];

    return ReactDOM.createPortal(
        props.children,
        bodyEl
    );
}

function Mask(props){

    return <BodyAppend>
    <div style={{ 
        width:'100%', 
        height:'100%', 
        position:'fixed', 
        zIndex:9999, 
        backgroundColor: 'rgba(0,0,0,0.2)',
        top:0,
        left:0,
        bottom:0,
        right:0 }}>
    </div>
</BodyAppend>
}

export default Mask;