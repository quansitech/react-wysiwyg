import _ from 'lodash';

export default class Util{
    
}

Util.cssTextToObject = (cssText) => {
    if(!cssText){
        return;
    }
    let o = {};
    
    cssText.split(';').forEach(element => {
        if(element){
            let [key, value] = element.split(':');
            key = _.camelCase(key);
            o[key] = value;
        }
        
    });

    return o;
}
