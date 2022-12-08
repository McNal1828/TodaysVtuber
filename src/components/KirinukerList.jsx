import { useEffect, useState } from 'react';

function KirinukerList() {
	const [originalVideo, setOriginalVideo] = useState({});
	function setFront(icon, name, link, description, original, related, sameOthers, videoRelated) {
		setOriginalVideo({
			link: 'https://www.youtube.com/watch?v=DPEtmqvaKqY',
			thumb: 'https://i.ytimg.com/vi/DPEtmqvaKqY/maxresdefault.jpg',
			title: '[MV] 팬서비스( ファンサ ) COVER by 고세구',
			name: '고세구 GOSEGUUUUUUUU',
		});
	}
	useEffect(() => {
		setFront();
	}, []);

	return (
		<div className='kirinukerList'>
			<div className='kirinuker'>
				<div className='kirinuker-detail'>
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
				<div className='kirinuker-analysis'></div>
			</div>
		</div>
	);
}

export default KirinukerList;
