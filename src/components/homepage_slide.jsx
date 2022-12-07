import { useEffect, useRef, useState } from 'react';

function Slide() {
	const firstR = useRef(null);
	const secondR = useRef(null);
	const thirdR = useRef(null);
	const fourthR = useRef(null);
	const fifthR = useRef(null);
	const sixthR = useRef(null);
	const sevenR = useRef(null);
	const refs = [firstR, secondR, thirdR, fourthR, fifthR];
	const slideR = useRef(null);

	const [isSliding, setIsSliding] = useState(false);
	const [slideCnt, setSlideCnt] = useState(0);
	const [isBig, setIsBig] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const [pl, setPl] = useState([280, 140, 0, -140, -280]);
	const [zl, setZl] = useState([80, 90, 100, 90, 80]);
	const [sl, setSl] = useState([0.75, 0.9, 1, 0.9, 0.75]);
	const [bl, setBl] = useState([30, 60, 100, 60, 30]);
	const [windowSize, setWindowSize] = useState([window.innerHeight, window.innerWidth]);

	const [videoYoutuberIcon, setVideoYoutuberIcon] = useState(`sample`);
	const [videoYoutuberName, setVideoYoutuberName] = useState(`sample`);
	const [videoYoutuberLink, setVideoYoutuberLink] = useState(`sample`);
	const [videoDescription, setVideoDescription] = useState(`sample`);
	const [originalVideo, setOriginalVideo] = useState({});
	const [sameOthers, setSameOthers] = useState([]);
	const [VtuberRelated, setVtuberRelated] = useState([]);
	const [videoRelated, setVideoRelated] = useState([]);

	const ytList = [
		{ url: 'https://www.youtube-nocookie.com/embed/GspDybPhOeY?autoplay=1' },
		{ url: 'https://www.youtube-nocookie.com/embed/lttoODN5hOo?autoplay=1' },
		{ url: 'https://www.youtube-nocookie.com/embed/h5hMNF3kDm0?autoplay=1' },
		{ url: 'https://www.youtube-nocookie.com/embed/NVns4yRoTlU?autoplay=1' },
		{ url: 'https://www.youtube-nocookie.com/embed/pBQpwWij1nE?autoplay=1' },
	];
	const thumbList = [
		{ url: 'https://i.ytimg.com/vi/GspDybPhOeY/maxresdefault.jpg' },
		{ url: 'https://i.ytimg.com/vi/lttoODN5hOo/maxresdefault.jpg' },
		{ url: 'https://i.ytimg.com/vi/h5hMNF3kDm0/maxresdefault.jpg' },
		{ url: 'https://i.ytimg.com/vi/NVns4yRoTlU/maxresdefault.jpg' },
		{ url: 'https://i.ytimg.com/vi/pBQpwWij1nE/maxresdefault.jpg' },
	];

	function styleText1(n) {
		return `
		left : ${pl[(slideCnt + n) % 5] + 'px'};
		z-index : ${zl[(slideCnt + n) % 5]};
		transform : scale(${sl[(slideCnt + n) % 5]});
		filter : brightness(${bl[(slideCnt + n) % 5]}%);
		`;
	}
	function styleText2(p) {
		return `
		width : ${100 + p + '%'};
		height : ${100 + p + '%'};
		left : ${-p * 2.4 + '%'};
		top : ${-p + '%'};
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
			sizeNormal();
			setIsBig(false);
			// window.scrollTo({ top: 0, behavior: 'smooth' });
			sixthR.current.style = 'opacity:0';

			setSlideCnt((slideCnt + 1) % 5);
			setTimeout(() => {
				sixthR.current.style = 'opacity:1';
				setIsSliding(false);
				console.log(isSliding);
				switch (slideCnt % 5) {
					case 0:
						fourthR.current.style = fourthR.current.style.cssText + 'opacity:0;';
						break;
					case 1:
						fifthR.current.style = fifthR.current.style.cssText + 'opacity:0;';
						break;
					case 2:
						firstR.current.style = firstR.current.style.cssText + 'opacity : 0;';
						break;
					case 3:
						secondR.current.style = secondR.current.style.cssText + 'opacity:0;';
						break;
					case 4:
						thirdR.current.style = thirdR.current.style.cssText + 'opacity:0;';
						break;
					default:
						break;
				}
			}, 800);
		}
	}
	function left() {
		if (!isSliding) {
			console.log('left');
			setIsSliding(true);
			firstR.current.style = styleText1(3);
			secondR.current.style = styleText1(2);
			thirdR.current.style = styleText1(1);
			fourthR.current.style = styleText1(0);
			fifthR.current.style = styleText1(4);
			sizeNormal();
			setIsBig(false);
			// window.scrollTo({ top: 0, behavior: 'smooth' });
			sixthR.current.style = 'opacity:0';

			setSlideCnt((slideCnt + 4) % 5);
			setTimeout(() => {
				setIsSliding(false);
				sixthR.current.style = 'opacity:1';
				switch (slideCnt % 5) {
					case 0:
						secondR.current.style = secondR.current.style.cssText + 'opacity:0';
						break;
					case 1:
						thirdR.current.style = thirdR.current.style.cssText + 'opacity:0';
						break;
					case 2:
						fourthR.current.style = fourthR.current.style.cssText + 'opacity:0';
						break;
					case 3:
						fifthR.current.style = fifthR.current.style.cssText + 'opacity:0';
						break;
					case 4:
						firstR.current.style = firstR.current.style.cssText + 'opacity : 0;';
						break;
					default:
						break;
				}
			}, 800);
		}
	}
	function sizeLarge() {
		sixthR.current.style = styleText2(10);
		sevenR.current.style = 'width:27%;height:121.1%;top:-10%;left:97.5%;opacity:1;';
		slideR.current.style = 'justify-content: space-between;';
	}
	function sizeNormal() {
		sixthR.current.style = styleText2(0);
		sevenR.current.style = 'width:0px;height:100%;top:0%;left:93%;opacity:0;';
		slideR.current.style = 'justify-content: space-evenly;';
	}

	useEffect(() => {
		// window.scrollTo({ top: 0, behavior: 'smooth' });
		function handleWindowResize() {
			setWindowSize([window.innerHeight, window.innerWidth]);
		}
		window.addEventListener('resize', handleWindowResize);
	}, []);

	useEffect(() => {
		sixthR.current.querySelector('iframe').src = ytList[(slideCnt + 2) % 5].url;
		setFront();
		return () => {};
	}, [slideCnt]);

	function wheel() {
		window.scrollTo({
			top: windowSize[0],
			behavior: 'smooth',
		});
	}
	const preventDefault = (e) => {
		e.preventDefault();
	};
	useEffect(() => {
		slideR.current.addEventListener('wheel', (e) => {
			if (window.scrollY === 1) {
				e.preventDefault();
			}
		});
	}, [slideR]);

	function slideDown() {
		sizeNormal();
		setIsBig(false);
		if (!isSliding) {
			setIsSliding(true);
			wheel();
			window.addEventListener('wheel', preventDefault, { passive: false });
			setTimeout(() => {
				window.removeEventListener('wheel', preventDefault, { passive: false });
				setIsSliding(false);
			}, 900);
		}
	}
	setTimeout(() => {
		document.querySelector('.goingDown').style = 'opacity:0';
	}, 2600);

	/**
	 *
	 * @param {url} icon 영상주인 아이콘
	 * @param {string} name 영상주인 이름
	 * @param {string} description 영상 설명
	 * @param {url} link 영상주인 유튜브주소
	 * @param {{link:url,thumb:url,title:string,name:string}} original 원본영상주소
	 * @param {[url]} related 나온버튜버목록
	 * @param {[{link:url,thumb:url,title:string,name:string}]} sameOthers
	 * @param {[{link:url,thumb:url,title:string,name:string}]} videoRelated
	 */
	function setFront(icon, name, link, description, original, related, sameOthers, videoRelated) {
		setVideoYoutuberIcon('https://yt3.ggpht.com/AIoO_0IdKYBdzlcRQ85oZxMaTBj_RVDvP8QmTmJZoOO_TTJd5NXql17hDfIl_bvcTQ4aAqFGIA=s800-c-k-c0x00ffffff-no-rj');
		setVideoYoutuberName('오리고기 origogi');
		setVideoYoutuberLink('https://www.youtube.com/channel/UCs6EwgxKLY9GG4QNUrP5hoQ');
		setVideoDescription(`・Original : 취기를 빌려 - 산들 (Slightly Tipsy)
・Director : 샤인머시깽
・Project Manager : 보도도
・Blender : 샤인머시깽
・Unreal Engine : Ojik, 보도도
・Motion/Facial capture : 보도도
・Motion Guide : 비챤
・Avatar Editing : 링고
・Vocal : 비챤
・Mix/Mastering : Chocotree
・Instrument : 와하후
・Instrument (Guitar) : 슬랩혀
・MV Edit : 판다
・MV Edit (Teaser) : 호챤
・Thumbnail Design : 크리앤탈
・Special Thanks : 송도경찰메시
・생방송　https://www.twitch.tv/viichan6
・인스타그램　https://www.instagram.com/viichan6
・아바타　https://hyuuganatu.booth.pm (ひゅうがなつ様)
#비챤 #이세돌 #취기를빌려
・Original : 취기를 빌려 - 산들 (Slightly Tipsy)
・Director : 샤인머시깽
・Project Manager : 보도도
・Blender : 샤인머시깽
・Unreal Engine : Ojik, 보도도
・Motion/Facial capture : 보도도
・Motion Guide : 비챤
・Avatar Editing : 링고
・Vocal : 비챤
・Mix/Mastering : Chocotree
・Instrument : 와하후
・Instrument (Guitar) : 슬랩혀
・MV Edit : 판다
・MV Edit (Teaser) : 호챤
・Thumbnail Design : 크리앤탈
・Special Thanks : 송도경찰메시
・생방송　https://www.twitch.tv/viichan6
・인스타그램　https://www.instagram.com/viichan6
・아바타　https://hyuuganatu.booth.pm (ひゅうがなつ様)
#비챤 #이세돌 #취기를빌려`);
		setOriginalVideo({
			link: 'https://www.youtube.com/watch?v=DPEtmqvaKqY',
			thumb: 'https://i.ytimg.com/vi/DPEtmqvaKqY/maxresdefault.jpg',
			title: '[MV] 팬서비스( ファンサ ) COVER by 고세구',
			name: '고세구 GOSEGU',
		});
	}

	const contents_list = thumbList.map((item, index) => {
		return (
			<div className='contents' key={index} ref={refs[index]}>
				<img className='slide-thumb' src={item.url} alt='경로이상' />
			</div>
		);
	});
	return (
		<div
			className='homepage-slide'
			onWheel={(e) => {
				if (e.deltaY > 0 && window.scrollY <= 1 && !sevenR.current.contains(e.target)) {
					slideDown();
				}
			}}
			ref={slideR}
		>
			<i className='bx bxs-chevron-left buttonL' onClick={left} style={{ zIndex: 1000 }}></i>
			<div className='container' style={{ zIndex: 10 }}>
				{contents_list}
				<div className='contents' ref={sixthR}>
					<iframe
						src={ytList[2].url.slice(0, -1) + '0'}
						title='YouTube video player'
						className='slide-youtube'
						frameBorder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowFullScreen
					></iframe>
				</div>
				<div className='contents main-description' ref={sevenR}>
					<div className='ytb-description'>
						<div className='ytb-detail'>
							<div className='ytb-icon'>
								<img src={videoYoutuberIcon} alt='경로이상' />
							</div>
							<p className='text'>{videoYoutuberName}</p>
						</div>
						<div className='ytb-btns'>
							<button className='sub-btn'>
								<a href={videoYoutuberLink} target='blank'>
									<i className='bx bx-right-arrow'></i>
								</a>
							</button>
							<button className='sub-btn'>
								<a href={videoYoutuberLink + '?sub_confirmation=1'} target='blank'>
									구독
								</a>
							</button>
						</div>
					</div>
					<div className='description-cell'>
						<pre className='text video-description'>{videoDescription}</pre>
						<p
							className='text'
							onClick={(e) => {
								document.querySelector('.video-description').classList.toggle('open');
								isOpen ? setIsOpen(false) : setIsOpen(true);
							}}
						>
							{!isOpen ? '더보기...' : ' 간략히...'}
						</p>
					</div>
					<div className='description-cell'>
						<p className='text'>원본영상</p>
						<div className='youtube-section-no-icon'>
							<div className='thumb'>
								<img src={originalVideo.thumb} alt='경로이상' />
							</div>
							<div className='detail'>
								<div className='title'></div>
								<div className='name'></div>
							</div>
						</div>
					</div>
					<div className='description-cell'>
						<p className='text'>관련 Vtuber</p>
					</div>

					<div className='description-cell'>
						<p className='text'>동일원본</p>
						<div className='youtube-section-no-icon'>
							<div className='thumb'></div>
							<div className='detail'>
								<div className='title'></div>
								<div className='name'></div>
							</div>
						</div>
						<div className='youtube-section-no-icon'>
							<div className='thumb'></div>
							<div className='detail'>
								<div className='title'></div>
								<div className='name'></div>
							</div>
						</div>
					</div>

					<div className='description-cell'>
						<p className='text'>추천영상</p>
						<div className='youtube-section-no-icon'>
							<div className='thumb'></div>
							<div className='detail'>
								<div className='title'></div>
								<div className='name'></div>
							</div>
						</div>
						<div className='youtube-section-no-icon'>
							<div className='thumb'></div>
							<div className='detail'>
								<div className='title'></div>
								<div className='name'></div>
							</div>
						</div>
						<div className='youtube-section-no-icon'>
							<div className='thumb'></div>
							<div className='detail'>
								<div className='title'></div>
								<div className='name'></div>
							</div>
						</div>
						<div className='youtube-section-no-icon'>
							<div className='thumb'></div>
							<div className='detail'>
								<div className='title'></div>
								<div className='name'></div>
							</div>
						</div>
						<div className='youtube-section-no-icon'>
							<div className='thumb'></div>
							<div className='detail'>
								<div className='title'></div>
								<div className='name'></div>
							</div>
						</div>
						<div className='youtube-section-no-icon'>
							<div className='thumb'></div>
							<div className='detail'>
								<div className='title'></div>
								<div className='name'></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<i className='bx bxs-chevron-right buttonR' onClick={right} style={{ zIndex: 1000 }}></i>
			<div className='size-change-btn-cover'>
				<button
					className='size-change-btn'
					onClick={(e) => {
						if (!isBig) {
							sizeLarge();
							setIsBig(true);
							window.scrollTo({ top: 0, behavior: 'smooth' });
						} else {
							sizeNormal();
							setIsBig(false);
							window.scrollTo({ top: 0, behavior: 'smooth' });
						}
					}}
				>
					상세설명보기
				</button>
			</div>
			<div className='goingDown'>
				<i className='bx bxs-chevrons-down bx-fade-down'></i>
			</div>
		</div>
	);
}

export default Slide;
