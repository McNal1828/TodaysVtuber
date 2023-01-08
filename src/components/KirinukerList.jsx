import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tvapi } from '../app/api';
import { addRecentVideos, resetRecentVideos } from '../app/favoriteSlice';

// let kirinukervideolist = [];
const KirinukerRecents = ({ id }) => {
	const dispatch = useDispatch();
	const query = tvapi.useGetKirinukerVideosQuery({ id });
	// console.log('KirinukerRecents', id, query.isLoading);
	const data = query.data;
	// let list = [];
	useEffect(() => {
		if (data != null) {
			// console.log('insert');
			data.map((dat) => {
				dispatch(
					addRecentVideos({
						id: dat.id,
						thumb: dat.thumb,
						title: dat.title,
						description: dat.description,
						upload: dat.upload,
						kirinuker: dat.kirinuker,
					})
				);
			});
		}
	}, [data]);
	if (query.isLoading) {
		var vel = [];
		var i = 0;
		while (i < 10) {
			vel.push(
				<div className='youtube-section-no-icon' key={i}>
					<div className='thumb'>
						<p className='text'>로딩중</p>
					</div>
					<div className='detail'>
						<div className='title'>
							<p className='text'>로딩중</p>
						</div>
					</div>
				</div>
			);
			i++;
		}
		return vel;
	} else {
		// console.log(data);
		const datas = data.map((dat) => {
			// console.log(dat.id);
			// console.log(dat.upload);
			// console.log(new Date(dat.upload).toLocaleString());
			// list.push({ id: dat.id, upload: new Date(dat.upload) });
			// console.log(list);
			// dispatch(addRecentVideos({ id: dat.id, upload: dat.upload }));
			// kirinukervideolist.push({ id: dat.id, upload: dat.upload });
			return (
				<div
					className='youtube-section-no-icon'
					onClick={(e) => {
						window.open(`https://www.youtube.com/watch?v=${dat.id}`, 'blank');
					}}
					key={dat.id}
				>
					<div className='thumb'>
						<img src={dat.thumb} alt='경로이상' loading='lazy' />
					</div>
					<div className='detail'>
						<div className='title'>
							<p className='text'>{dat.title}</p>
						</div>
					</div>
				</div>
			);
		});
		return datas;
	}
};
const Kirinuker = ({ id }) => {
	const query = tvapi.useGetKirinukerIdQuery({ id });
	const datas = query.data;
	// console.log('kirinuker', id, query.isLoading);
	if (query.isLoading) {
		return (
			<div className='kirinuker'>
				<div className='header'>
					<div className='ytb-detail'>
						<div className='ytb-icon'></div>
						<p className='text'>로딩중</p>
					</div>
					<div className='analysis'></div>
					<div className='btns'>
						<button className='sub-btn'>
							<p>로딩중</p>
						</button>
					</div>
				</div>
				<div className='body'>
					<div className='kirinuker-recent'></div>
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
		);
	} else {
		const data = query.data[0];
		return (
			<div className='kirinuker'>
				<div className='header'>
					<div className='ytb-detail'>
						<div className='ytb-icon'>
							<img src={data.icon} alt='경로이상' />
						</div>
						<p className='text'>{data.name}</p>
					</div>
					<div className='analysis'>
						<div className='vtuber-analysis'>
							<div className='ytb-icon'>
								<img src={data['1st_icon']} alt='경로이상' />
							</div>
							<div className='detail'>
								<p className='name text'>{data['1st_name']}</p>
								<p className='percentage text'>{data['1st_p']}%</p>
							</div>
						</div>
						<div className='vtuber-analysis'>
							<div className='ytb-icon'>
								<img src={data['2nd_icon']} alt='경로이상' />
							</div>
							<div className='detail'>
								<p className='name text'>{data['2nd_name']}</p>
								<p className='percentage text'>{data['2nd_p']}%</p>
							</div>
						</div>
						<div className='vtuber-analysis'>
							<div className='ytb-icon'>
								<img src={data['3rd_icon']} alt='경로이상' />
							</div>
							<div className='detail'>
								<p className='name text'>{data['3rd_name']}</p>
								<p className='percentage text'>{data['3rd_p']}%</p>
							</div>
						</div>
						<div className='vtuber-analysis'>
							<div className='ytb-icon'>
								<img src={data['4th_icon']} alt='경로이상' />
							</div>
							<div className='detail'>
								<p className='name text'>{data['4th_name']}</p>
								<p className='percentage text'>{data['4th_p']}%</p>
							</div>
						</div>
						<div className='vtuber-analysis'>
							<div className='ytb-icon'>
								<img src={data['5th_icon']} alt='경로이상' />
							</div>
							<div className='detail'>
								<p className='name text'>{data['5th_name']}</p>
								<p className='percentage text'>{data['5th_p']}%</p>
							</div>
						</div>
					</div>
					<div className='btns'>
						<button className='sub-btn'>
							<a href={data.link + '?sub_confirmation=1'} target='blank'>
								해제
							</a>
						</button>
					</div>
				</div>
				<div className='body'>
					<div className='kirinuker-recent'>
						<KirinukerRecents id={id} />
					</div>
				</div>
				<div className='footer'>
					<div className='widen'>
						<i
							className='bx bxs-chevron-down'
							onClick={(e) => {
								e.target.parentElement.parentElement.parentElement.children[1].children[0].classList.toggle('open');
								e.target.parentElement.classList.toggle('up');
								e.target.classList.toggle('bxs-chevron-down');
								// e.target.classList.toggle('bx-fade-down');
								e.target.classList.toggle('bxs-chevron-up');
								// e.target.classList.toggle('bx-fade-up');
							}}
						></i>
					</div>
				</div>
			</div>
		);
	}
};
const Kirinukers = ({ list }) => {
	// console.log(list);

	const kirinukers = list.map((id) => {
		return <Kirinuker id={id} key={id} />;
	});
	return kirinukers;
};
function KirinukerList() {
	const list = ['UCGphOcrcx_oLH22bevHe8og', 'UCt_ntnKaZFs8OXINziOO0Zw', 'UCje0SVcZO29akCbEzDQxwcw', 'UCp5cDlDvsLUp6wjl4ELtmNw'];
	const recent = useSelector((state) => {
		return state.favorite.recentVideos;
	});
	const dispatch = useDispatch();
	useEffect(() => {
		return () => {
			// console.log('reset');
			dispatch(resetRecentVideos());
		};
	}, []);
	return (
		<div className='kirinukerList'>
			<Kirinukers list={list} />

			{recent.map((item, index) => {
				var date = new Date(item.upload).toLocaleString();
				return (
					<h1 key={index}>
						{item.id},{date}
					</h1>
				);
			})}
		</div>
	);
}

export default KirinukerList;
