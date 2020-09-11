import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';

export default function MaskContainer(props){
    useEffect(() => {
        document.body.append(el);
        setEleStyle();
        window.addEventListener('resize', function(e){
            setPos();
        });
    }, []);

    const setEleStyle = () => {
        el.style.position = "absolute";
        el.style.display = 'flex';
        el.style.alignItems = 'center';
        el.style.justifyContent = 'center';
        el.style.zIndex = 9999;
        el.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';

        setPos();
    }

    const setPos = () => {
        let rect = props.ele.getBoundingClientRect();
        let bodyRect = document.body.getBoundingClientRect();

        el.style.width = rect.width + "px";
        el.style.height = rect.height + "px";
        el.style.top = rect.top - bodyRect.top + "px";
        el.style.left = rect.left - bodyRect.left + "px";

    }

    const el = document.createElement('div');

    return ReactDOM.createPortal(
        props.children,
        el
    );
}