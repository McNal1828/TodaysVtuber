import { useRef, useState } from 'react';

function Slide() {
	const firstR = useRef(null);
	const secondR = useRef(null);
	const thirdR = useRef(null);
	const fourthR = useRef(null);
	const fifthR = useRef(null);
	const refs = [firstR, secondR, thirdR, fourthR, fifthR];

	const [isSliding, setIsSliding] = useState(false);
	const [slideCnt, setSlideCnt] = useState(0);
	const [pl, setPl] = useState([280, 140, 0, -140, -280]);
	const [zl, setZl] = useState([80, 90, 100, 90, 80]);
	const [sl, setSl] = useState([0.75, 0.9, 1, 0.9, 0.75]);
	const [bl, setBl] = useState([30, 60, 100, 60, 30]);
	const list = [
		{ url: 'https://www.youtube.com/embed/GspDybPhOeY?autoplay=0' },
		{ url: 'https://www.youtube.com/embed/lttoODN5hOo?autoplay=0' },
		{ url: 'https://www.youtube.com/embed/h5hMNF3kDm0?autoplay=0' },
		{ url: 'https://www.youtube.com/embed/NVns4yRoTlU?autoplay=0' },
		{ url: 'https://www.youtube.com/embed/pBQpwWij1nE?autoplay=0' },
	];

	function styleText1(n) {
		return `
		left : ${pl[(slideCnt + n) % 5] + 'px'};
		z-index : ${zl[(slideCnt + n) % 5]};
		transform : scale(${sl[(slideCnt + n) % 5]});
		filter : brightness(${bl[(slideCnt + n) % 5]}%);
		`;
	}
	function styleText2(w, h) {
		return `
		width : ${800 + w + 'px'};
		height : ${450 + h + 'px'};
		left : ${-w / 2 + 'px'};
		`;
	}

	function right() {
		if (!isSliding) {
			setIsSliding(true);
			firstR.current.style = styleText1(0);
			secondR.current.style = styleText1(4);
			thirdR.current.style = styleText1(3);
			fourthR.current.style = styleText1(2);
			fifthR.current.style = styleText1(1);

			switch (slideCnt % 5) {
				case 0:
					fourthR.current.querySelector('iframe').src = fourthR.current.querySelector('iframe').src.slice(0, -1) + '1';
					thirdR.current.querySelector('iframe').src = thirdR.current.querySelector('iframe').src.slice(0, -1) + '0';
					break;
				case 1:
					fifthR.current.querySelector('iframe').src = fifthR.current.querySelector('iframe').src.slice(0, -1) + '1';
					fourthR.current.querySelector('iframe').src = fourthR.current.querySelector('iframe').src.slice(0, -1) + '0';
					break;
				case 2:
					firstR.current.querySelector('iframe').src = firstR.current.querySelector('iframe').src.slice(0, -1) + '1';
					fifthR.current.querySelector('iframe').src = fifthR.current.querySelector('iframe').src.slice(0, -1) + '0';
					break;
				case 3:
					secondR.current.querySelector('iframe').src = secondR.current.querySelector('iframe').src.slice(0, -1) + '1';
					firstR.current.querySelector('iframe').src = firstR.current.querySelector('iframe').src.slice(0, -1) + '0';
					break;
				case 4:
					thirdR.current.querySelector('iframe').src = thirdR.current.querySelector('iframe').src.slice(0, -1) + '1';
					secondR.current.querySelector('iframe').src = secondR.current.querySelector('iframe').src.slice(0, -1) + '0';
					break;
				default:
					break;
			}

			const sizeChangeBtn = document.querySelector('.size-change-btn');
			sizeChangeBtn.checked = false;
			setSlideCnt((slideCnt + 1) % 5);
			setTimeout(() => {
				setIsSliding(false);
				console.log(isSliding);
			}, 550);
		}
	}
	function left() {
		if (!isSliding) {
			setIsSliding(true);
			firstR.current.style = styleText1(3);
			secondR.current.style = styleText1(2);
			thirdR.current.style = styleText1(1);
			fourthR.current.style = styleText1(0);
			fifthR.current.style = styleText1(4);
			switch (slideCnt % 5) {
				case 0:
					secondR.current.querySelector('iframe').src = secondR.current.querySelector('iframe').src.slice(0, -1) + '1';
					thirdR.current.querySelector('iframe').src = thirdR.current.querySelector('iframe').src.slice(0, -1) + '0';
					break;
				case 1:
					thirdR.current.querySelector('iframe').src = thirdR.current.querySelector('iframe').src.slice(0, -1) + '1';
					fourthR.current.querySelector('iframe').src = fourthR.current.querySelector('iframe').src.slice(0, -1) + '0';
					break;
				case 2:
					fourthR.current.querySelector('iframe').src = fourthR.current.querySelector('iframe').src.slice(0, -1) + '1';
					fifthR.current.querySelector('iframe').src = fifthR.current.querySelector('iframe').src.slice(0, -1) + '0';
					break;
				case 3:
					fifthR.current.querySelector('iframe').src = fifthR.current.querySelector('iframe').src.slice(0, -1) + '1';
					firstR.current.querySelector('iframe').src = firstR.current.querySelector('iframe').src.slice(0, -1) + '0';
					break;
				case 4:
					firstR.current.querySelector('iframe').src = firstR.current.querySelector('iframe').src.slice(0, -1) + '1';
					secondR.current.querySelector('iframe').src = secondR.current.querySelector('iframe').src.slice(0, -1) + '0';
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
	const sizeVariable = [800 * 0.3, 450 * 0.3];
	function sizeLarge() {
		switch (slideCnt % 5) {
			case 0:
				thirdR.current.style = styleText1(2) + styleText2(sizeVariable[0], sizeVariable[1]);
				break;
			case 1:
				fourthR.current.style = styleText1(1) + styleText2(sizeVariable[0], sizeVariable[1]);
				break;
			case 2:
				fifthR.current.style = styleText1(0) + styleText2(sizeVariable[0], sizeVariable[1]);
				break;
			case 3:
				firstR.current.style = styleText1(4) + styleText2(sizeVariable[0], sizeVariable[1]);
				break;
			case 4:
				secondR.current.style = styleText1(3) + styleText2(sizeVariable[0], sizeVariable[1]);
				break;
			default:
				break;
		}
	}
	function sizeNormal() {
		switch (slideCnt % 5) {
			case 0:
				thirdR.current.style = styleText1(2) + styleText2(0, 0);
				break;
			case 1:
				fourthR.current.style = styleText1(1) + styleText2(0, 0);
				break;
			case 2:
				fifthR.current.style = styleText1(0) + styleText2(0, 0);
				break;
			case 3:
				firstR.current.style = styleText1(4) + styleText2(0, 0);
				break;
			case 4:
				secondR.current.style = styleText1(3) + styleText2(0, 0);
				break;
			default:
				break;
		}
	}

	const contents_list = list.map((item, index) => {
		return (
			<div className='contents' key={index} ref={refs[index]}>
				<iframe
					src={item.url}
					title='YouTube video player'
					frameBorder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowFullScreen
				></iframe>
			</div>
		);
	});

	return (
		<div className='homepage-slide'>
			<input type='button' className='buttonL' onClick={left} style={{ zIndex: 1000 }}></input>
			<div className='container' style={{ zIndex: 10 }}>
				{contents_list}
			</div>
			<input type='button' className='buttonR' onClick={right} style={{ zIndex: 1000 }}></input>
			<input
				className='size-change-btn'
				type='checkbox'
				style={{ position: 'absolute', top: '0px', right: '0px' }}
				onChange={(e) => {
					if (e.target.checked === true) {
						sizeLarge();
					} else {
						sizeNormal();
					}
				}}
			/>
		</div>
		// </div>
	);
}

export default Slide;
