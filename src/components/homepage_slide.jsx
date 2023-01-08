import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

function Slide() {
	const recent = useSelector((state) => {
		return state.favorite.recentVideos;
	});

	const firstR = useRef(null);
	const secondR = useRef(null);
	const thirdR = useRef(null);
	const fourthR = useRef(null);
	const fifthR = useRef(null);
	const sixthR = useRef(null);
	const sevenR = useRef(null);
	const refs = [firstR, secondR, thirdR, fourthR, fifthR];
	const slideR = useRef(null);
	const liveContainer = useRef(null);

	const [liveContainerCnt, setliveContainerCnt] = useState(1);
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

	const liveOnMark = () => {
		var cc = '#FF3636';
		return (
			<div className='icon' style={{ position: 'relative', left: '23.3%', top: '63%' }}>
				<i
					className='bx bx-wifi-2'
					style={{ position: 'absolute', transform: 'rotate(0.25turn)', top: '3px', left: '18px', fontSize: '20px', color: cc }}
				></i>
				<i
					className='bx bx-wifi-2'
					style={{ position: 'absolute', transform: 'rotate(0.75turn)', top: '3px', left: '4px', fontSize: '20px', color: cc }}
				></i>
				<i className='bx bxs-circle' style={{ position: 'absolute', top: '8.5px', left: '16px', fontSize: '1px', color: cc }}></i>
			</div>
		);
	};
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
	function liveRight() {
		liveContainer.current.style.transform = `translateX(${-450 * liveContainerCnt}px)`;
		setliveContainerCnt(liveContainerCnt + 1);
	}
	function liveLeft() {
		liveContainer.current.style.transform = `translateX(${-450 * (liveContainerCnt - 2)}px)`;
		setliveContainerCnt(liveContainerCnt - 1);
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
		setVideoDescription(recent[0]);
		// 		setVideoDescription(`・Original : 취기를 빌려 - 산들 (Slightly Tipsy)
		// ・Director : 샤인머시깽
		// ・Project Manager : 보도도
		// ・Blender : 샤인머시깽
		// ・Unreal Engine : Ojik, 보도도
		// ・Motion/Facial capture : 보도도
		// ・Motion Guide : 비챤
		// ・Avatar Editing : 링고
		// ・Vocal : 비챤
		// ・Mix/Mastering : Chocotree
		// ・Instrument : 와하후
		// ・Instrument (Guitar) : 슬랩혀
		// ・MV Edit : 판다
		// ・MV Edit (Teaser) : 호챤
		// ・Thumbnail Design : 크리앤탈
		// ・Special Thanks : 송도경찰메시
		// ・생방송　https://www.twitch.tv/viichan6
		// ・인스타그램　https://www.instagram.com/viichan6
		// ・아바타　https://hyuuganatu.booth.pm (ひゅうがなつ様)
		// #비챤 #이세돌 #취기를빌려
		// ・Original : 취기를 빌려 - 산들 (Slightly Tipsy)
		// ・Director : 샤인머시깽
		// ・Project Manager : 보도도
		// ・Blender : 샤인머시깽
		// ・Unreal Engine : Ojik, 보도도
		// ・Motion/Facial capture : 보도도
		// ・Motion Guide : 비챤
		// ・Avatar Editing : 링고
		// ・Vocal : 비챤
		// ・Mix/Mastering : Chocotree
		// ・Instrument : 와하후
		// ・Instrument (Guitar) : 슬랩혀
		// ・MV Edit : 판다
		// ・MV Edit (Teaser) : 호챤
		// ・Thumbnail Design : 크리앤탈
		// ・Special Thanks : 송도경찰메시
		// ・생방송　https://www.twitch.tv/viichan6
		// ・인스타그램　https://www.instagram.com/viichan6
		// ・아바타　https://hyuuganatu.booth.pm (ひゅうがなつ様)
		// #비챤 #이세돌 #취기를빌려`);
		setOriginalVideo({
			link: 'https://www.youtube.com/watch?v=DPEtmqvaKqY',
			thumb: 'https://i.ytimg.com/vi/DPEtmqvaKqY/maxresdefault.jpg',
			title: '[MV] 팬서비스( ファンサ ) COVER by 고세구',
			name: '고세구 GOSEGUUUUUUUU',
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
						<div className='text'>
							<pre className='video-description'>{videoDescription}</pre>
						</div>
						<p
							className='text'
							onClick={(e) => {
								document.querySelector('.video-description').classList.toggle('open');
								isOpen ? setIsOpen(false) : setIsOpen(true);
							}}
							style={{ cursor: 'pointer' }}
						>
							{!isOpen ? '더보기...' : ' 간략히...'}
						</p>
					</div>
					<div className='description-cell'>
						<p className='text'>원본영상</p>
						<div
							className='youtube-section-no-icon'
							onClick={(e) => {
								window.open(originalVideo.link, 'blank');
							}}
						>
							<div className='thumb'>
								<img src={originalVideo.thumb} alt='경로이상' />
							</div>
							<div className='detail'>
								<div className='title'>
									<p className='text'>{originalVideo.title}</p>
								</div>
								<div className='name'>
									<p className='text'>{originalVideo.name}</p>
								</div>
							</div>
						</div>
					</div>
					<div className='description-cell'>
						<p className='text'>관련 Vtuber</p>
						<div className='ytb-icon-list'>
							<div className='ytb-icon'>
								<img
									src='https://yt3.ggpht.com/ytc/AMLnZu8ofVKsVwxjdBgpmzWN4QyGjzDl7PX1O3FZ_EmsEg=s800-c-k-c0x00ffffff-no-rj-mo'
									alt='경로이상'
								/>
							</div>
							<div className='ytb-icon'>
								<img
									src='https://yt3.ggpht.com/ytc/AMLnZu8ofVKsVwxjdBgpmzWN4QyGjzDl7PX1O3FZ_EmsEg=s800-c-k-c0x00ffffff-no-rj-mo'
									alt='경로이상'
								/>
							</div>
							<div className='ytb-icon'>
								<img
									src='https://yt3.ggpht.com/ytc/AMLnZu8ofVKsVwxjdBgpmzWN4QyGjzDl7PX1O3FZ_EmsEg=s800-c-k-c0x00ffffff-no-rj-mo'
									alt='경로이상'
								/>
							</div>
						</div>
					</div>

					<div className='description-cell'>
						<p className='text'>관련클립</p>
						<div
							className='youtube-section-no-icon'
							onClick={(e) => {
								window.open(originalVideo.link, 'blank');
							}}
						>
							<div className='thumb'>
								<img src={originalVideo.thumb} alt='경로이상' />
							</div>
							<div className='detail'>
								<div className='title'>
									<p className='text'>{originalVideo.title}</p>
								</div>
								<div className='name'>
									<p className='text'>{originalVideo.name}</p>
								</div>
							</div>
						</div>
						<div
							className='youtube-section-no-icon'
							onClick={(e) => {
								window.open(originalVideo.link, 'blank');
							}}
						>
							<div className='thumb'>
								<img src={originalVideo.thumb} alt='경로이상' />
							</div>
							<div className='detail'>
								<div className='title'>
									<p className='text'>{originalVideo.title}</p>
								</div>
								<div className='name'>
									<p className='text'>{originalVideo.name}</p>
								</div>
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
			<div className='live-on'>
				<i className='bx bxs-chevron-left live-buttonL' onClick={liveLeft} style={{ zIndex: 900 }}></i>
				<div className='live-container-wrap'>
					<div className='live-container' ref={liveContainer}>
						<div className='ytb-icon-list'>
							<div className='ytb-icon'>
								{liveOnMark()}
								<img
									className='live'
									src='https://yt3.ggpht.com/ytc/AMLnZu8ofVKsVwxjdBgpmzWN4QyGjzDl7PX1O3FZ_EmsEg=s800-c-k-c0x00ffffff-no-rj-mo'
									alt='경로이상'
								/>
							</div>
							<div className='ytb-icon'>
								{liveOnMark()}
								<img
									className='live'
									src='https://yt3.ggpht.com/AIoO_0IdKYBdzlcRQ85oZxMaTBj_RVDvP8QmTmJZoOO_TTJd5NXql17hDfIl_bvcTQ4aAqFGIA=s800-c-k-c0x00ffffff-no-rj'
									alt='경로이상'
								/>
							</div>
							<div className='ytb-icon'>
								{liveOnMark()}
								<img
									className='live'
									src='https://yt3.ggpht.com/ytc/AMLnZu-qIRWBQWhOxBeYS5gd5H-sqys1F6EPAmqCW1Q6HQ=s800-c-k-c0x00ffffff-no-rj'
									alt='경로이상'
								/>
							</div>
							<div className='ytb-icon'>
								{liveOnMark()}
								<img
									className='live'
									src='https://yt3.ggpht.com/QJdHgfT3P2HhhX4NdjtWYMK5vUNAjOmrKzBahdYOPMm62Qh2v3LaOOh_VW8pZso5TS8-gveo=s800-c-k-c0x00ffffff-no-rj'
									alt='경로이상'
								/>
							</div>
							<div className='ytb-icon'>
								{liveOnMark()}
								<img
									className='live'
									src='https://yt3.ggpht.com/hk4Bg_RBb21e2IDLN_Gjmw0jGfMIh26usUwjBvLr472mX8_l8dednSbifhXKPP0QCN8_EPAWBV0=s800-c-k-c0x00ffffff-no-rj'
									alt='경로이상'
								/>
							</div>
							<div className='ytb-icon'>
								<img
									src='https://yt3.ggpht.com/OWP5IUNUf0ja8UZfD7qJJ8Qyw5Gr2zXwfavKM96L2x6XQVgDxwOdWp-JmAzeCDecL2yTpoyN=s800-c-k-c0x00ffffff-no-rj'
									alt='경로이상'
								/>
							</div>
							<div className='ytb-icon'>
								<img
									src='https://yt3.ggpht.com/ZFF_hEJhjNyF3UJLolZZPEV8EMM7V-e8HtTvzLiZXNM6s4rh518242ghR-bUXRYkMaJtedKoaZA=s800-c-k-c0x00ffffff-no-rj'
									alt='경로이상'
								/>
							</div>
							<div className='ytb-icon'>
								<img
									src='https://yt3.ggpht.com/5vwZ3NZL6Zv4C7cl5sshsTk-XycH7r-4zo6nQR7g9Z7SLrMzeabWWzn5M1V3SqJXjTxLj_hb=s800-c-k-c0x00ffffff-no-rj'
									alt='경로이상'
								/>
							</div>
							<div className='ytb-icon'>
								<img
									src='https://yt3.ggpht.com/v3a75a7gUHU6E-gaJww_k5gkFYI8jthCtAR9ELMaRemymZhIyQLiIIRu4cWOt289DFH1UNkFMA=s800-c-k-c0x00ffffff-no-rj'
									alt='경로이상'
								/>
							</div>
							<div className='ytb-icon'>
								<img
									src='https://yt3.ggpht.com/ytc/AMLnZu8ofVKsVwxjdBgpmzWN4QyGjzDl7PX1O3FZ_EmsEg=s800-c-k-c0x00ffffff-no-rj-mo'
									alt='경로이상'
								/>
							</div>
							<div className='ytb-icon'>
								<img
									src='https://yt3.ggpht.com/AIoO_0IdKYBdzlcRQ85oZxMaTBj_RVDvP8QmTmJZoOO_TTJd5NXql17hDfIl_bvcTQ4aAqFGIA=s800-c-k-c0x00ffffff-no-rj'
									alt='경로이상'
								/>
							</div>
						</div>
					</div>
				</div>
				<i className='bx bxs-chevron-right live-buttonR' onClick={liveRight} style={{ zIndex: 900 }}></i>
			</div>
		</div>
	);
}

export default Slide;
