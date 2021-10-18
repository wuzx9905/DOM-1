window.dom = {
    create: function (string) {
        const container = document.createElement("template");   //template用来装任意东西
        container.innerHTML = string.trim();       //忽略空格，防止打印出文本节点
        return container.content.firstChild;        //获取第一个儿子
    },
    after(node, node2) {
        node.parentNode.insertBefore(node2, node.nextSibling);  //虽然用到下一个节点，但是最后一个的时候，即使下一个节点为null，也可以插入
    },
    before(node, node2) {
        node.parentNode.insertBefore(node2, node);
    },
    append(parent, node) {
        parent.appendChild(node);
    },
    wrap(node, parent) {
        dom.before(node, parent);    //把parent放到node前面，再把node放到parent里面
        dom.append(parent, node);
    },
    remove(node) {
        node.parentNode.removeChild(node);
        return node;
    },
    empty(node) {
        const { childNodes } = node;
        const array = [];
        let x = node.firstChild
        while (x) {
            array.push(dom.remove(node.firstChild))
            x = node.firstChild
        }
        return array;
    },
    attr(node, name, value) {   //重载
        if (arguments.length === 3) {
            node.setAttribute(name, value)
        } else if (arguments.length === 2) {
            return node.getAttribute(name)
        }
    },
    text(node, string) {    //适配
        if (arguments.length === 2) {
            if ('innerText' in node) {
                node.innerText = string;    //IE
            } else {
                node.textContent = string; //firefox,Chrome
            }
        } else if (arguments.length === 1) {
            if ('innerText' in node) {
                return node.innerText;
            } else {
                return node.textContent;
            }
        }

    },
    html(node, string) {//重载
        if (arguments.length === 2) {
            node.innerHTML = string;
        } else if (arguments.length === 1) {
            return node.innerHTMl;
        }
    },
    style(node, name, value) {
        if (arguments.length === 3) {
            //dom.style(div, 'color','red')
            node.style[name] = value
        } else if (arguments.length === 2) {
            if (typeof name === 'string') {
                //dom.style(div,'color')
                return node.style[name]
            } else if (name instanceof Object) {
                // dom.style(div,{color: 'red'})
                const object = name;
                for (let key in object) {
                    //key: border/color
                    //node,style.border = ...  
                    node.style[key] = object[key]
                }
            }
        }
    },
    class: {
        add(node, className) {
            node.classList.add(className);
        },
        remove(node, className) {
            node.classList.remove(className);
        },
        contains(node, className) {
            return node.classList.contains(className);
        }
    },
    on(node, eventName, fn) {
        node.addEventListener(eventName, fn);
    },
    off(node, eventName, fn) {
        node.removeEventListener(eventName, fn);
    },
    find(selector, scope) {
        return (scope || document).querySelectorAll(selector);
    },
    parent(node) {
        return node.parentNode;
    },
    children(node) {
        return node.children;
    },
    siblings(node) {
        return Array.from(node.parentNode.children).filter(n => n !== node);
    },
    next(node) {
        let x = node.nextSibling;
        while (x && x.nodeType === 3) {
            x = x.nextSibling
        }
        return x;
    },
    previous(node) {
        let x = node.previousSibling;
        while (x && x.nodeType === 3) {
            x = x.previousSibling
        }
        return x;
    },
    each(nodeList, fn) {
        for (let i = 0; i < nodeList.length; i++) {
            fn.call(null, nodeList[i]);
        }
    },
    index(node) {
        const List = dom.children(node.parentNode)
        let i;
        for (i = 0; i < List.length; i++) {
            if (List[i] === node) {
                break;
            }
        }
        return i;
    }
};

