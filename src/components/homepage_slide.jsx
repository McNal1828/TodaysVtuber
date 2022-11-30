import { useState } from 'react';

function Container() {
	const list = [
		{ url: '/images/cheers.gif' },
		{ url: '/images/cheers2.jpg' },
		{ url: '/images/cheers3.jpg' },
		{ url: '/images/cheers4.jpg' },
		{ url: '/images/cheers5.jpg' },
	];

	const contents_list = list.map((item) => (
		<div className='contents'>
			<img src={process.env.PUBLIC_URL + item.url} alt='경로이상' />
		</div>
	));

	return (
		<div className='container' style={{ zIndex: 10 }}>
			{contents_list}
		</div>
	);
}

function Slide() {
	const [isSliding, setIsSliding] = useState(false);

	function right() {
		if (!isSliding) {
			setIsSliding(true);
			const container = document.querySelector('.container');
			const first = container.children[0];
			const second = container.children[1];
			const third = container.children[2];
			const fourth = container.children[3];
			const fifth = container.children[4];

			first.style.left = '180px';
			first.style.zIndex = 80;
			second.style.left = '-180px';
			second.style.zIndex = 80;
			third.style.left = '-90px';
			third.style.zIndex = 90;
			fourth.style.left = '0px';
			fourth.style.zIndex = 100;
			fifth.style.left = '90px';
			fifth.style.zIndex = 90;

			setTimeout(() => {
				console.log(isSliding);
				const temp = fifth.cloneNode(true);
				container.replaceChild(first.cloneNode(true), fifth);
				container.replaceChild(second.cloneNode(true), first);
				container.replaceChild(third.cloneNode(true), second);
				container.replaceChild(fourth.cloneNode(true), third);
				container.replaceChild(temp, fourth);
			}, 550);
			setTimeout(() => {
				setIsSliding(false);
				console.log(isSliding);
			}, 600);
		}
	}
	function left() {
		if (!isSliding) {
			setIsSliding(true);
			const container = document.querySelector('.container');
			const first = container.children[0];
			const second = container.children[1];
			const third = container.children[2];
			const fourth = container.children[3];
			const fifth = container.children[4];

			first.style.left = '-90px';
			first.style.zIndex = 90;
			second.style.left = '0px';
			second.style.zIndex = 100;
			third.style.left = '90px';
			third.style.zIndex = 90;
			fourth.style.left = '180px';
			fourth.style.zIndex = 80;
			fifth.style.left = '-180px';
			fifth.style.zIndex = 80;

			setTimeout(() => {
				console.log(isSliding);
				const temp = first.cloneNode(true);
				container.replaceChild(fifth.cloneNode(true), first);
				container.replaceChild(fourth.cloneNode(true), fifth);
				container.replaceChild(third.cloneNode(true), fourth);
				container.replaceChild(second.cloneNode(true), third);
				container.replaceChild(temp, second);
			}, 550);
			setTimeout(() => {
				setIsSliding(false);
				console.log(isSliding);
			}, 600);
		}
	}
	return (
		<div className='homepage-slide'>
			{/* overflow: 'hidden', */}
			{/* <div style={{ display: 'flex' }}> */}
			<input type='button' className='buttonL' onClick={left} style={{ zIndex: 1000 }}></input>
			<Container />
			<input type='button' className='buttonR' onClick={right} style={{ zIndex: 1000 }}></input>
		</div>
		// </div>
	);
}

export default Slide;
