export default async function typeFactory(type, ele, options, result){
    let typeCls =  await import(`./${type}.js`);
    return new typeCls.default(ele, options, result);
}