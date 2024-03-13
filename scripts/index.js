const widthWindow = window.innerWidth;

const slide = document.querySelector('#slider');
const leftBlock = document.querySelector('.left');
const rightBlock = document.querySelector('.right');

const blocks = document.querySelectorAll('.block');
const blocksStyle = window.getComputedStyle(document.querySelector('.block'));
const widthBlocks = blocksStyle.getPropertyValue('width');
const widthBlock = +widthBlocks.substring(0,widthBlocks.indexOf('px'));

const body = document.querySelector('body');
const bodyStyle = window.getComputedStyle(document.querySelector('body'));
const marginBodySize = bodyStyle.getPropertyValue('margin');
const marginBody = +marginBodySize.substring(0,marginBodySize.indexOf('px'));

slide.addEventListener('input', e => {
    const { value } = e.target;
    document.body.style.backgroundColor = `rgb(${255 - value}, ${255-value}, ${255-value})`;    
	
	leftBlock.style.left  = (widthWindow - widthBlock - 2 * marginBody) / e.target.max * value  + 'px'; 
	rightBlock.style.left = (widthWindow - widthBlock - 2 * marginBody) - ((widthWindow - widthBlock ) / e.target.max * value) + 'px';
});