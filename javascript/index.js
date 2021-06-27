const createButton = (className, innerHtml) => {
	const button = document.createElement('button');
	button.setAttribute('class', className);
	button.innerHTML = innerHtml;
	return button;
}

const setHash = (hash) => {
	location.hash = hash;
}

const loadHomepage = () => {
	main.innerHTML = '';
	const button1 = createButton('btn', '1');
	const button2 = createButton('btn', '2');
	main.appendChild(button1);
	main.appendChild(button2);
	button1.addEventListener('focus', () => {
		setHash('1'); 
	});
	button2.addEventListener('focus', () => {
		setHash('2'); 
	});
}

const pageOne = () => {
	main.innerHTML = '<h1>this is page 1</h1>'
}

const pageTwo = () => {
	main.innerHTML = '<h1>this is page 2</h1>'
}

const pageView = (e) => {
	const pageNumber = e.newURL.slice(-1);
	switch(pageNumber){
		case '1': pageOne();
				break;
		case '2': pageTwo();
				break;
		default: loadHomepage();
	}
}

const main = document.querySelector('#main');
loadHomepage();
window.addEventListener('hashchange', pageView);