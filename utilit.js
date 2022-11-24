const $=(selector)=>{
    return document.querySelector(selector)


}
const $$=(selector)=>{
    return document.querySelectorAll(selector)


}

const createElement=(tagName, className, content)=>{
    const newElement=document.createElement(tagName);
    newElement.setAttribute('class',className);
    newElement.innerHTML=`${content}`;
    return newElement;
}