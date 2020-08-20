
export default class Type{

    constructor(ele, options, result){
        this.ele = ele;

        this.options = options;
        this.key = this.ele.dataset.key;
        this.result = result;
    }

    getReactComponent = async () => {
        let component = await import(`../components/mg_d_${this.type.toLowerCase()}.js`);
        return component;
    }

    loadComponent = async () => {
        let comp = await this.getReactComponent();
        return comp;
    }
}