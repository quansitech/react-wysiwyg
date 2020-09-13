import {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';

export default function TextContainer(props){
    const [div, setDiv] = useState(document.createElement('div'));
    const [span, setSpan] = useState(document.createElement('span'));
    const [mgValue, setMgValue] = useState(props.mgValue);
    const [ele, setEle] = useState(props.ele);

    useEffect(() => {
        document.body.append(div);
        span.innerHTML = mgValue;
        ele.append(span);

        setEleStyle();
        window.addEventListener('resize', function(e){
            setPos();
        });
        window.addEventListener('scroll', function(){
            setPos();
        });
    }, []);

    useEffect(() => {
        span.innerHTML = props.mgValue;
    }, [props.mgValue]);

    const setEleStyle = () => {
        div.style.position = "absolute";
        div.style.display = 'flex';
        div.style.zIndex = 9999;

        setPos();
    }

    const setPos = () => {
        let rect = span.getBoundingClientRect();
        let bodyRect = document.body.getBoundingClientRect();

        div.style.top = (rect.top - bodyRect.top + rect.height - div.getBoundingClientRect().height) + "px";
        div.style.left = (rect.left - bodyRect.left + rect.width) + "px";
    }

    return ReactDOM.createPortal(
        props.children,
        div
    );
}