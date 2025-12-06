div = document.getElementById("div");
function divreset() {
    div.style.backgroundColor = "blue";
}
div.onmouseout = divreset;
div2 = document.getElementById('div2');
function divcolor2() {
    div2.style.backgroundColor = "green";
}
function divreset2() {
    div2.style.backgroundColor = "red";
}
function createelement() {
    let dividee = document.createElement("div");
    div2.style.backgroundColor = "green";
    let node = document.createTextNode("div3");
    dividee.appendChild(node);
    dividee.id = 'div3';
    dividee.style.width = '250px';
    dividee.style.height = '250px';
    dividee.style.backgroundColor = 'yellow';
    dividee.style.color = 'black';
    dividee.style.padding = '8px';
    dividee.style.position = 'absolute';
    dividee.style.left = '425px';
    dividee.style.top = '425px';
    dividee.style.zIndex = '9999';
    document.body.appendChild(dividee);
}
function destroyelement() {
    const e = arguments[0];
    const related = e && (e.relatedTarget || e.toElement);
    if (related) {
        if (related.id === 'div3' || (related.closest && related.closest('#div3'))) return;
    }
    const element = document.getElementById('div3');
    if (element && element.parentNode) element.parentNode.removeChild(element);
}
div2.onmouseover = divcolor2;
div.onmouseover = createelement;
div2.onmouseout = divreset2;
div.onmouseout = destroyelement;