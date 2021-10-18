// const div = dom.create("<div>newDIV</div>");  //document.createElement('div');
// console.log(div);

// dom.after(test, div);

// const div3 = dom.create('<div id="parent"></div>');

// dom.wrap(test, div3)

// const nodes = dom.empty(window.empty)
// console.log(nodes)

// dom.attr(test, 'title', 'Hi, i am dodo')
// const title = dom.attr(test, 'title')
// console.log(`title: ${title}`)


// dom.text(test, 'new content')
// dom.text(test)

// dom.style(test, { border: '1px solid red', color: 'blue' })
// console.log(dom.style(test, 'color'))
// dom.style(test, 'border', '1px solid black')

// dom.class.add(test, 'red')
// dom.class.add(test, 'blue')
// dom.class.remove(test, 'blue')
// console.log(dom.class.contains(test, 'blue'))

// const fn = () => {
//     console.log('hi');
// }
// dom.on(test, 'click', fn)
// dom.off(test, 'click', fn)

// const testDIV = dom.find('#test')[0]
// console.log(testDIV)

// console.log(dom.parent(test))

// const s2 = dom.find('#s2')[0]
// console.log(dom.siblings(s2))
// console.log(dom.next(s2))
// console.log(dom.previous(s2))


// const t = dom.find('#travel')[0]
// dom.each(dom.children(t), (n) => dom.style(n, 'color', 'red'))

// console.log(dom.index(s2))

const div = dom.find('#test>.red')[0]
dom.style(div, 'color', 'red')

const divList = dom.find('.red')
dom.each(divList, (n) => console.log(n))