import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import typeFactory from './type/typeFactory';

function MgApp(props){
    const [ mgValue, setMgValue ] = useState(props.mgValue);
    const [ component, setComponent] = useState(null);

    props.componentMg.ele.style.pointerEvents = 'all';
    
    useEffect(() => {
        async function render(){
            let comp = await props.componentMg.render(mgValue, handleChange);
            setComponent(comp);
        };
        render();
    }, [mgValue]);

    const handleChange = value => {
        setMgValue(props.componentMg.handleChange(value));
    }

    return (component ? component  : null)
}

class WYSIWYG{

    constructor(options={}){
        this.result = {};
        this.options = options;

        this.init();
    }

    forbiddenClick = () => {
        var body = document.getElementsByTagName('body')[0];
        body.style.pointerEvents = 'none';
        var a_list = document.getElementsByTagName('a');
        for(var i=0; i < a_list.length; i++){
            a_list[i].addEventListener('click', function(e){
                e.preventDefault();
                return false;
            });
            a_list[i].setAttribute('href', '#');
        }
    }

    init = async () => {
        this.forbiddenClick();
        let className = this.options.className ? this.options.className : 'render-mg';
        let apps = document.getElementsByClassName(className);
        for(let i=0; i < apps.length; i++){
            const element = apps[i];
            const comp = element.dataset.component;
            let typeComp = await typeFactory(comp, element, this.options, this.result);
            ReactDOM.render(<MgApp mgValue={ typeComp.getMgValue() } componentMg={ typeComp } />, element);
        }
    }

    getResult = () => {
        return this.result;
    }
}


export default WYSIWYG;

