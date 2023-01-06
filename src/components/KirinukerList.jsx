import { useEffect, useState } from 'react';

function KirinukerList() {
	const [originalVideo, setOriginalVideo] = useState({});
	function setFront(icon, name, link, description, original, related, sameOthers, videoRelated) {
		setOriginalVideo({
			link: 'https://www.youtube.com/watch?v=DPEtmqvaKqY',
			thumb: 'https://i.ytimg.com/vi/DPEtmqvaKqY/maxresdefault.jpg',
			title: '[MV] 팬서비스( ファンサ ) COVER by 고세구[MV] 팬서비스( ファンサ ) COVER by 고세구[MV] 팬서비스( ファンサ ) COVER by 고세구[MV] 팬서비스( ファンサ ) COVER by 고세구',
			name: '오리고기 origogi',
		});
	}

	useEffect(() => {
		setFront();
	}, []);

	const recent = (url) => {
		return (
			<div
				className='youtube-section-no-icon'
				onClick={(e) => {
					window.open(originalVideo.link, 'blank');
				}}
			>
				<div className='thumb'>
					<img src={originalVideo.thumb} alt='경로이상' loading='lazy' />
				</div>
				<div className='detail'>
					<div className='title'>
						<p className='text'>{originalVideo.title}</p>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className='kirinukerList'>
			<div className='kirinuker'>
				<div className='header'>
					<div className='ytb-detail'>
						<div className='ytb-icon'>
							<img src={originalVideo.thumb} alt='경로이상' />
						</div>
						<p className='text'>{originalVideo.name}</p>
					</div>
					<div className='analysis'>
						<div className='vtuber-analysis'>
							<div className='ytb-icon'>
								<img src={originalVideo.thumb} alt='경로이상' />
							</div>
							<div className='detail'>
								<p className='name text'>샤이릴리 shylily</p>
								<p className='percentage text'>59%</p>
							</div>
						</div>
						<div className='vtuber-analysis'>
							<div className='ytb-icon'>
								<img src={originalVideo.thumb} alt='경로이상' />
							</div>
							<div className='detail'>
								<p className='name text'>가우르 구라</p>
								<p className='percentage text'>20%</p>
							</div>
						</div>
						<div className='vtuber-analysis'>
							<div className='ytb-icon'>
								<img src={originalVideo.thumb} alt='경로이상' />
							</div>
							<div className='detail'>
								<p className='name text'>에밀리아 왓슨</p>
								<p className='percentage text'>11%</p>
							</div>
						</div>
						<div className='vtuber-analysis'>
							<div className='ytb-icon'>
								<img src={originalVideo.thumb} alt='경로이상' />
							</div>
							<div className='detail'>
								<p className='name text'>기타</p>
								<p className='percentage text'>10%</p>
							</div>
						</div>
					</div>
					<div className='btns'>
						<button className='sub-btn'>
							<a href={originalVideo.link + '?sub_confirmation=1'} target='blank'>
								해제
							</a>
						</button>
					</div>
				</div>
				<div className='body'>
					<div className='kirinuker-recent'>
						{recent()}
						{recent()}
						{recent()}
						{recent()}
						{recent()}
						{recent()}
						{recent()}
						{recent()}
						{recent()}
					</div>
				</div>
				<div className='footer'>
					<div className='widen'>
						<i
							className='bx bxs-chevrons-down'
							onClick={(e) => {
								e.target.parentElement.parentElement.parentElement.children[1].children[0].classList.toggle('open');
								e.target.parentElement.classList.toggle('up');
								e.target.classList.toggle('bxs-chevrons-down');
								// e.target.classList.toggle('bx-fade-down');
								e.target.classList.toggle('bxs-chevrons-up');
								// e.target.classList.toggle('bx-fade-up');
							}}
						></i>
					</div>
				</div>
			</div>
		</div>
	);
}

export default KirinukerList;
