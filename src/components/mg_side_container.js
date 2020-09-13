import {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';

export default function SideContainer(props){
    const [el, setEl] = useState(document.createElement('div'));

    useEffect(() => {
        document.body.append(el);
        setEleStyle();
        window.addEventListener('resize', function(e){
            setPos();
        });
        window.addEventListener('scroll', function(){
            setPos();
        });
    }, []);

    const setEleStyle = () => {
        el.style.position = "absolute";
        el.style.display = 'flex';
        el.style.zIndex = 9999;

        setPos();
    }

    const setPos = () => {
        let rect = props.ele.getBoundingClientRect();
        let bodyRect = document.body.getBoundingClientRect();

        el.style.top = (rect.top - bodyRect.top + rect.height - el.getBoundingClientRect().height) + "px";
        el.style.left = (rect.left - bodyRect.left + rect.width) + "px";
        
    }

    return ReactDOM.createPortal(
        props.children,
        el
    );
}