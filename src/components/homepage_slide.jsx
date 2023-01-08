import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { tvapi } from '../app/api';

function Slide() {
	const recent = useSelector((state) => {
		return state.favorite.recentVideos;
	});
	const [lazyGetKirinukerIdQuery, lazyGetKirinukerIdQueryResult] = tvapi.useLazyGetKirinukerIdQuery();
	const [lazyGetClipVideo, lazyGetClipVideoResult] = tvapi.useLazyGetClipVideoQuery();
	const [lazyGetClipVtuber, lazyGetClipVtuberResult] = tvapi.useLazyGetClipVtuberQuery();
	const [lazyGetClipRelate, lazyGetClipRelateResult] = tvapi.useLazyGetClipRelateQuery();
	// console.log(lazyGetKirinukerIdQueryResult);

	const thumb1 = useRef(null);
	const thumb2 = useRef(null);
	const thumb3 = useRef(null);
	const thumb4 = useRef(null);
	const thumb5 = useRef(null);
	const thumb6 = useRef(null);
	const thumb7 = useRef(null);
	const thumb8 = useRef(null);
	const thumb9 = useRef(null);
	const videoR = useRef(null);
	const videoDetail = useRef(null);
	const thumbRList = [thumb1, thumb2, thumb3, thumb4, thumb5, thumb6, thumb7, thumb8, thumb9];
	const [positionList, setPositionList] = useState([300, 300, 280, 140, 0, -140, -280, -300, -300]);
	const [zIndexList, setZIndexList] = useState([60, 70, 80, 90, 100, 90, 80, 70, 60]);
	const [sizeList, setSizeList] = useState([0, 0, 0.75, 0.9, 1, 0.9, 0.75, 0, 0]);
	const [brightnessList, setBrightnessList] = useState([0, 0, 30, 60, 100, 60, 30, 0, 0]);

	const slideR = useRef(null);
	const liveContainer = useRef(null);

	const [liveContainerCnt, setliveContainerCnt] = useState(1);
	const [isSliding, setIsSliding] = useState(false);
	const [slideCnt, setSlideCnt] = useState(0);
	const [isBig, setIsBig] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const [windowSize, setWindowSize] = useState([window.innerHeight, window.innerWidth]);

	const [videoDescription, setVideoDescription] = useState(`sample`);

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
	const ytList = recent.map((item) => {
		return 'https://www.youtube-nocookie.com/embed/' + item.id;
	});
	const thumbList = recent.map((item) => {
		return item.thumb;
	});
	function styleText1(n) {
		return `
		left : ${positionList[(slideCnt + n) % 9] + 'px'};
		z-index : ${zIndexList[(slideCnt + n) % 9]};
		transform : scale(${sizeList[(slideCnt + n) % 9]});
		filter : brightness(${brightnessList[(slideCnt + n) % 9]}%);
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
			thumb1.current.style = styleText1(5);
			thumb2.current.style = styleText1(4);
			thumb3.current.style = styleText1(3);
			thumb4.current.style = styleText1(2);
			thumb5.current.style = styleText1(1);
			thumb6.current.style = styleText1(0);
			thumb7.current.style = styleText1(8);
			thumb8.current.style = styleText1(7);
			thumb9.current.style = styleText1(6);

			sizeNormal();
			setIsBig(false);
			// window.scrollTo({ top: 0, behavior: 'smooth' });
			videoR.current.style = 'opacity:0';

			setSlideCnt((slideCnt + 1) % 9);
			setTimeout(() => {
				videoR.current.style = 'opacity:1';
				setIsSliding(false);
				// console.log(isSliding);
				// console.log(slideCnt);
				// switch (slideCnt % 5) {
				// 	case 0:
				// 		fourthR.current.style = fourthR.current.style.cssText + 'opacity:0;';
				// 		break;
				// 	case 1:
				// 		fifthR.current.style = fifthR.current.style.cssText + 'opacity:0;';
				// 		break;
				// 	case 2:
				// 		firstR.current.style = firstR.current.style.cssText + 'opacity : 0;';
				// 		break;
				// 	case 3:
				// 		secondR.current.style = secondR.current.style.cssText + 'opacity:0;';
				// 		break;
				// 	case 4:
				// 		thirdR.current.style = thirdR.current.style.cssText + 'opacity:0;';
				// 		break;
				// 	default:
				// 		break;
				// }
			}, 800);
		}
	}
	function left() {
		if (!isSliding) {
			setIsSliding(true);
			thumb1.current.style = styleText1(3);
			thumb2.current.style = styleText1(2);
			thumb3.current.style = styleText1(1);
			thumb4.current.style = styleText1(0);
			thumb5.current.style = styleText1(8);
			thumb6.current.style = styleText1(7);
			thumb7.current.style = styleText1(6);
			thumb8.current.style = styleText1(5);
			thumb9.current.style = styleText1(4);

			sizeNormal();
			setIsBig(false);
			// window.scrollTo({ top: 0, behavior: 'smooth' });
			videoR.current.style = 'opacity:0';

			setSlideCnt((slideCnt + 8) % 9);
			setTimeout(() => {
				setIsSliding(false);
				videoR.current.style = 'opacity:1';
				// console.log(thumbRList[slideCnt]);
				// console.log('tlqkf');
				// thumbRList[slideCnt - 1].current.style = 'opacity:0';
				// switch (slideCnt % 5) {
				// 	case 0:
				// 		secondR.current.style = secondR.current.style.cssText + 'opacity:0';
				// 		break;
				// 	case 1:
				// 		thirdR.current.style = thirdR.current.style.cssText + 'opacity:0';
				// 		break;
				// 	case 2:
				// 		fourthR.current.style = fourthR.current.style.cssText + 'opacity:0';
				// 		break;
				// 	case 3:
				// 		fifthR.current.style = fifthR.current.style.cssText + 'opacity:0';
				// 		break;
				// 	case 4:
				// 		firstR.current.style = firstR.current.style.cssText + 'opacity : 0;';
				// 		break;
				// 	default:
				// 		break;
				// }
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
		videoR.current.style = styleText2(10);
		videoDetail.current.style = 'width:27%;height:120.5%;top:-9.7%;left:97%;opacity:1;';
		slideR.current.style = 'justify-content: space-between;';
		setDescription();
		// console.log(slideCnt);
		// console.log(recent[slideCnt].kirinuker);
		lazyGetKirinukerIdQuery({ id: recent[slideCnt].kirinuker });
		lazyGetClipVideo({ id: recent[slideCnt].id });
		lazyGetClipVtuber({ id: recent[slideCnt].id });
		lazyGetClipRelate({ id: recent[slideCnt].id });
	}
	function sizeNormal() {
		videoR.current.style = styleText2(0);
		videoDetail.current.style = 'width:0px;height:100%;top:0%;left:93%;opacity:0;';
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
		// console.log(slideCnt);
		videoR.current.querySelector('iframe').src = ytList[slideCnt];
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

	function setDescription() {
		const descript = recent[slideCnt].description;
		setVideoDescription(descript);
	}

	const contents_list = thumbList.map((item, index) => {
		return (
			<div className='contents' key={index} ref={thumbRList[index]}>
				<img className='slide-thumb' src={item} alt='경로이상' />
			</div>
		);
	});

	const YtbDescription = () => {
		if (lazyGetKirinukerIdQueryResult.isUninitialized) {
			return (
				<div className='ytb-description'>
					<div className='ytb-detail'>
						<div className='ytb-icon'>
							<img alt='경로이상' />
						</div>
						<p className='text'>로딩중...</p>
					</div>
					<div className='ytb-btns'>
						<button className='sub-btn'>
							<p>로딩중...</p>
						</button>
						<button className='sub-btn'>
							<p>로딩중...</p>
						</button>
					</div>
				</div>
			);
		} else {
			const data = lazyGetKirinukerIdQueryResult.data[0];
			return (
				<div className='ytb-description'>
					<div className='ytb-detail'>
						<div className='ytb-icon'>
							<img src={data.icon} alt='경로이상' />
						</div>
						<p className='text'>{data.name}</p>
					</div>
					<div className='ytb-btns'>
						<button className='sub-btn'>
							<a href={data.link} target='blank'>
								<i className='bx bx-right-arrow'></i>
							</a>
						</button>
						<button className='sub-btn'>
							<a href={data.link + '?sub_confirmation=1'} target='blank'>
								구독
							</a>
						</button>
					</div>
				</div>
			);
		}
	};
	const RelatedVideo = () => {
		if (lazyGetClipVideoResult.isUninitialized || lazyGetClipVideoResult.isFetching) {
			return (
				<div className='description-cell'>
					<p className='text'>관련영상</p>
					<div className='youtube-section-no-icon'>
						<div className='thumb'>
							<img alt='로딩중' />
						</div>
						<div className='detail'>
							<div className='title'>
								<p className='text'>로딩중</p>
							</div>
							<div className='name'>
								<p className='text'>로딩중</p>
							</div>
						</div>
					</div>
				</div>
			);
		} else {
			// console.log(lazyGetClipVideoResult);
			const data = lazyGetClipVideoResult.data;
			return (
				<div className='description-cell'>
					<p className='text'>관련영상</p>
					{data.map((item, index) => {
						return (
							<div
								className='youtube-section-no-icon'
								onClick={(e) => {
									window.open('https://youtu.be/' + item.video_id, 'blank');
								}}
								key={index}
							>
								<div className='thumb'>
									<img src={'https://i.ytimg.com/vi/' + item.video_id + '/hqdefault.jpg'} alt='경로이상' />
								</div>
								{/* <div className='detail'>
									<div className='title'>
										<p className='text'>어떻게나오나</p>
									</div>
									<div className='name'>
										<p className='text'>고민이되는군</p>
									</div>
								</div> */}
							</div>
						);
					})}
				</div>
			);
		}
	};
	const RelatedVtuber = () => {
		if (lazyGetClipVtuberResult.isUninitialized || lazyGetClipVtuberResult.isFetching) {
			return (
				<div className='description-cell'>
					<p className='text'>관련 Vtuber</p>
					<div className='ytb-icon-list'>
						<div className='ytb-icon'>
							<img alt='로딩중' />
						</div>
					</div>
				</div>
			);
		} else {
			// console.log(lazyGetClipVtuberResult);
			const data = lazyGetClipVtuberResult.data;
			return (
				<div className='description-cell'>
					<p className='text'>관련 Vtuber</p>
					<div className='ytb-icon-list'>
						{data.map((item, index) => {
							return (
								<div
									className='ytb-icon'
									onClick={(e) => {
										window.open(item.link, 'blank');
									}}
									key={index}
								>
									<img src={item.icon} alt='경로이상' />
								</div>
							);
						})}
					</div>
				</div>
			);
		}
	};
	const RelatedClip = () => {
		if (lazyGetClipRelateResult.isUninitialized || lazyGetClipRelateResult.isFetching) {
			return (
				<div className='description-cell'>
					<p className='text'>관련클립</p>
					<div className='youtube-section-no-icon'>
						<div className='thumb'>
							<img alt='로딩중' />
						</div>
						<div className='detail'>
							<div className='title'>
								<p className='text'>로딩중</p>
							</div>
							<div className='name'>
								<p className='text'>로딩중</p>
							</div>
						</div>
					</div>
				</div>
			);
		} else {
			// console.log(lazyGetClipRelateResult);
			const data = lazyGetClipRelateResult.data;
			return (
				<div className='description-cell'>
					<p className='text'>관련클립</p>
					{data.map((item, index) => {
						return (
							<div
								className='youtube-section-no-icon'
								onClick={(e) => {
									window.open('https://youtu.be/' + item.clip_id, 'blank');
								}}
								key={index}
							>
								<div className='thumb'>
									<img src={item.thumb} alt='경로이상' />
								</div>
								<div className='detail'>
									<div className='title'>
										<p className='text'>{item.title}</p>
									</div>
									{/* <div className='name'>
										<p className='text'>{item.kirinuker}</p>
									</div> */}
								</div>
							</div>
						);
					})}
				</div>
			);
		}
	};
	return (
		<div
			className='homepage-slide'
			onWheel={(e) => {
				if (e.deltaY > 0 && window.scrollY <= 1 && !videoDetail.current.contains(e.target)) {
					slideDown();
				}
			}}
			ref={slideR}
		>
			<i className='bx bxs-chevron-left buttonL' onClick={left} style={{ zIndex: 1000 }}></i>
			<div className='container' style={{ zIndex: 10 }}>
				{contents_list}
				<div className='contents' ref={videoR}>
					<iframe
						src={ytList[0]}
						title='YouTube video player'
						className='slide-youtube'
						frameBorder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowFullScreen
					></iframe>
				</div>
				<div className='contents main-description' ref={videoDetail}>
					<YtbDescription />
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
					<RelatedVideo />
					<RelatedVtuber />
					<RelatedClip />
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
