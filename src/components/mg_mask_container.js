import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';

export default function MaskContainer(props){
    const [el, setEl] = useState(document.createElement('div'));

    useEffect(() => {
        document.body.append(el);
        setEleStyle();
        window.addEventListener('resize', function(e){
            setPos();
        });
        window.addEventListener('scroll', function(){
            setPos();
        })
    }, []);

    const setEleStyle = () => {
        el.style.position = "absolute";
        el.style.display = 'flex';
        el.style.alignItems = 'center';
        el.style.justifyContent = 'center';
        el.style.zIndex = 9999;
        el.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';

        setPos();
    }

    const setPos = () => {
        let rect = props.ele.getBoundingClientRect();
        let bodyRect = document.body.getBoundingClientRect();

        el.style.width = rect.width + "px";
        el.style.height = rect.height + "px";
        el.style.top = rect.top - bodyRect.top + "px";
        el.style.left = rect.left - bodyRect.left + "px"

    }

    return ReactDOM.createPortal(
        props.children,
        el
    );
}