import { useEffect, useState } from 'react';

if (document.readyState === 'complete') {
}

function Container() {
	// const list = [
	// 	{ url: '/images/cheers.gif' },
	// 	{ url: '/images/cheers2.jpg' },
	// 	{ url: '/images/cheers3.jpg' },
	// 	{ url: '/images/cheers4.jpg' },
	// 	{ url: '/images/cheers5.jpg' },
	// ];
	const list = [
		{ url: 'https://www.youtube.com/embed/ZoX4MHAMQlA?autoplay=0' },
		{ url: 'https://www.youtube.com/embed/lttoODN5hOo?autoplay=0' },
		{ url: 'https://www.youtube.com/embed/h5hMNF3kDm0?autoplay=0' },
		{ url: 'https://www.youtube.com/embed/NVns4yRoTlU?autoplay=0' },
		{ url: 'https://www.youtube.com/embed/pBQpwWij1nE?autoplay=0' },
	];

	const contents_list = list.map((item, index) => (
		<div className='contents' key={index}>
			{/* <img src={process.env.PUBLIC_URL + item.url} alt='경로이상' /> */}
			<iframe
				src={item.url}
				title='YouTube video player'
				frameBorder='0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
				allowFullScreen
			></iframe>
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
	const [slideCnt, setSlideCnt] = useState(0);
	const [pl, setPl] = useState([280, 140, 0, -140, -280]);
	const [zl, setZl] = useState([80, 90, 100, 90, 80]);
	const [sl, setSl] = useState([0.75, 0.9, 1, 0.9, 0.75]);
	const [bl, setBl] = useState([30, 60, 100, 60, 30]);

	function right() {
		if (!isSliding) {
			const container = document.querySelector('.container');
			const first = container.children[0];
			const second = container.children[1];
			const third = container.children[2];
			const fourth = container.children[3];
			const fifth = container.children[4];
			setIsSliding(true);
			first.style.left = pl[slideCnt % 5] + 'px';
			first.style.zIndex = zl[slideCnt % 5];
			first.style.transform = `scale(${sl[slideCnt % 5]})`;
			first.style.filter = `brightness(${bl[slideCnt % 5]}%)`;

			second.style.left = pl[(slideCnt + 4) % 5] + 'px';
			second.style.zIndex = zl[(slideCnt + 4) % 5];
			second.style.transform = `scale(${sl[(slideCnt + 4) % 5]})`;
			second.style.filter = `brightness(${bl[(slideCnt + 4) % 5]}%)`;

			third.style.left = pl[(slideCnt + 3) % 5] + 'px';
			third.style.zIndex = zl[(slideCnt + 3) % 5];
			third.style.transform = `scale(${sl[(slideCnt + 3) % 5]})`;
			third.style.filter = `brightness(${bl[(slideCnt + 3) % 5]}%)`;

			fourth.style.left = pl[(slideCnt + 2) % 5] + 'px';
			fourth.style.zIndex = zl[(slideCnt + 2) % 5];
			fourth.style.transform = `scale(${sl[(slideCnt + 2) % 5]})`;
			fourth.style.filter = `brightness(${bl[(slideCnt + 2) % 5]}%)`;

			fifth.style.left = pl[(slideCnt + 1) % 5] + 'px';
			fifth.style.zIndex = zl[(slideCnt + 1) % 5];
			fifth.style.transform = `scale(${sl[(slideCnt + 1) % 5]})`;
			fifth.style.filter = `brightness(${bl[(slideCnt + 1) % 5]}%)`;

			const iframe4 = fourth.querySelector('iframe');
			const iframe5 = fifth.querySelector('iframe');
			const iframe1 = first.querySelector('iframe');
			const iframe2 = second.querySelector('iframe');
			const iframe3 = third.querySelector('iframe');
			switch (slideCnt % 5) {
				case 0:
					iframe4.src = iframe4.src.slice(0, -1) + '1';
					iframe3.src = iframe3.src.slice(0, -1) + '0';
					break;
				case 1:
					iframe5.src = iframe5.src.slice(0, -1) + '1';
					iframe4.src = iframe5.src.slice(0, -1) + '0';
					break;
				case 2:
					iframe1.src = iframe1.src.slice(0, -1) + '1';
					iframe5.src = iframe5.src.slice(0, -1) + '0';
					break;
				case 3:
					iframe2.src = iframe2.src.slice(0, -1) + '1';
					iframe1.src = iframe1.src.slice(0, -1) + '0';
					break;
				case 4:
					iframe3.src = iframe3.src.slice(0, -1) + '1';
					iframe2.src = iframe2.src.slice(0, -1) + '0';
					break;
				default:
					break;
			}
			setSlideCnt((slideCnt + 1) % 5);
			setTimeout(() => {
				setIsSliding(false);
				console.log(isSliding);
			}, 550);
		}
	}
	function left() {
		if (!isSliding) {
			const container = document.querySelector('.container');
			const first = container.children[0];
			const second = container.children[1];
			const third = container.children[2];
			const fourth = container.children[3];
			const fifth = container.children[4];
			setIsSliding(true);
			console.log(-1 % 5);
			first.style.left = pl[(slideCnt + 3) % 5] + 'px';
			first.style.zIndex = zl[(slideCnt + 3) % 5];
			first.style.transform = `scale(${sl[(slideCnt + 3) % 5]})`;
			first.style.filter = `brightness(${bl[(slideCnt + 3) % 5]}%)`;

			second.style.left = pl[(slideCnt + 2) % 5] + 'px';
			second.style.zIndex = zl[(slideCnt + 2) % 5];
			second.style.transform = `scale(${sl[(slideCnt + 2) % 5]})`;
			second.style.filter = `brightness(${bl[(slideCnt + 2) % 5]}%)`;

			third.style.left = pl[(slideCnt + 1) % 5] + 'px';
			third.style.zIndex = zl[(slideCnt + 1) % 5];
			third.style.transform = `scale(${sl[(slideCnt + 1) % 5]})`;
			third.style.filter = `brightness(${bl[(slideCnt + 1) % 5]}%)`;

			fourth.style.left = pl[slideCnt % 5] + 'px';
			fourth.style.zIndex = zl[slideCnt % 5];
			fourth.style.transform = `scale(${sl[slideCnt % 5]})`;
			fourth.style.filter = `brightness(${bl[slideCnt % 5]}%)`;

			fifth.style.left = pl[(slideCnt + 4) % 5] + 'px';
			fifth.style.zIndex = zl[(slideCnt + 4) % 5];
			fifth.style.transform = `scale(${sl[(slideCnt + 4) % 5]})`;
			fifth.style.filter = `brightness(${bl[(slideCnt + 4) % 5]}%)`;

			const iframe1 = first.querySelector('iframe');
			const iframe2 = second.querySelector('iframe');
			const iframe3 = third.querySelector('iframe');
			const iframe4 = fourth.querySelector('iframe');
			const iframe5 = fifth.querySelector('iframe');
			switch (slideCnt % 5) {
				case 0:
					iframe2.src = iframe2.src.slice(0, -1) + '1';
					iframe3.src = iframe3.src.slice(0, -1) + '0';
					break;
				case 1:
					iframe3.src = iframe3.src.slice(0, -1) + '1';
					iframe4.src = iframe4.src.slice(0, -1) + '0';
					break;
				case 2:
					iframe4.src = iframe4.src.slice(0, -1) + '1';
					iframe5.src = iframe5.src.slice(0, -1) + '0';
					break;
				case 3:
					iframe5.src = iframe5.src.slice(0, -1) + '1';
					iframe1.src = iframe1.src.slice(0, -1) + '0';
					break;
				case 4:
					iframe1.src = iframe1.src.slice(0, -1) + '1';
					iframe2.src = iframe2.src.slice(0, -1) + '0';
					break;
				default:
					break;
			}
			setSlideCnt((slideCnt + 4) % 5);
			setTimeout(() => {
				setIsSliding(false);
				console.log(isSliding);
			}, 550);
		}
	}
	return (
		<div className='homepage-slide'>
			<input type='button' className='buttonL' onClick={left} style={{ zIndex: 1000 }}></input>
			<Container />
			<input type='button' className='buttonR' onClick={right} style={{ zIndex: 1000 }}></input>
			<input
				type='checkbox'
				value='dfsdsffsd'
				style={{ position: 'absolute', top: '0px', right: '0px' }}
				onChange={(e) => {
					console.log(e.target.checked);
					const container = document.querySelector('.container');
					const test = container.children[2];
					if (e.target.checked === true) {
						test.style.width = 800 + 400 + 'px';
						test.style.height = 450 + 225 + 'px';
						test.style.left = -400 / 2 + 'px';
					} else {
						test.style.width = 800 + 'px';
						test.style.height = 450 + 'px';
						test.style.left = 0 + 'px';
					}
				}}
			/>
		</div>
		// </div>
	);
}

export default Slide;
