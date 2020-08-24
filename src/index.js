import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import typeFactory from './type/typeFactory';

function MgApp(props){
    const [ mgValue, setMgValue ] = useState(props.mgValue);
    const [ component, setComponent] = useState(null);

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

    init = async () => {
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

