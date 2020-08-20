import TypeText from './text';

export default class TypeTextarea extends TypeText{

    constructor(ele, options, result){
        super(ele, options, result);

        this.type = 'textarea';
    }
}