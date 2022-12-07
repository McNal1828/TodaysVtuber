import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

function SideBar() {
	const sidebarR = useRef(null);
	const searchR = useRef(null);

	const sidebarClose = (e) => {
		// let sideArea = sidebarR.current;
		let sideCildren = sidebarR.current.contains(e.target);
		let searchCildren = searchR.current.contains(e.target);
		// console.log(sideArea);
		// console.log(sideCildren);
		// console.log(searchCildren);
		if (!sideCildren && !searchCildren) {
			sidebarR.current.classList.add('close');
		}
	};

	useEffect(() => {
		window.addEventListener('click', sidebarClose);
		return () => {
			window.removeEventListener('click', sidebarClose);
		};
	}, []);

	return (
		<div>
			<div className='sidebar close' ref={sidebarR}>
				<header>
					<div className='image-text'>
						<i
							className='bx bx-menu icon'
							onClick={(e) => {
								const sidebar = document.querySelector('.sidebar');
								sidebar.classList.toggle('close');
							}}
							style={{ fontSize: '30px' }}
						></i>
						{/* <div className='image'>
							<img src={process.env.PUBLIC_URL + '/images/cheers.gif'} alt='로딩실패' />
						</div> */}
						<div className='text'>
							<span className='title'> TodaysVtuber</span>
							<span className='description'>팬메이드 웹페이지</span>
						</div>
					</div>
					{/* <div
						className='toggle-btn'
						onClick={(e) => {
							const sidebar = document.querySelector('.sidebar');
							sidebar.classList.toggle('close');
						}}
					>
						V
					</div> */}
				</header>
				<div className='menu-bar'>
					<div className='menu'>
						<li className='search-menu'>
							<i
								className='bx bx-search-alt icon'
								onClick={(e) => {
									const sidebar = document.querySelector('.sidebar');
									sidebar.classList.remove('close');
								}}
							></i>
							{/* <i className='search-icon icon'>A</i> */}
							<span className='text'>search</span>
							{/* <input type='search' name='' id='' placeholder='검색' /> */}
						</li>
						<div className='nav'>
							<ul className='nav-link'>
								<li>
									<NavLink to='/'>
										<i className='bx bx-home icon'></i>
										{/* <i className='icon'>B</i> */}
										<span className='text'>Home</span>
									</NavLink>
								</li>
								<li>
									<NavLink to='/tt'>
										<div className='icon' style={{ position: 'relative' }}>
											<i
												className='bx bx-cut'
												style={{ position: 'absolute', top: '-20px', left: '6px', transform: 'rotate(0.1turn)', fontSize: '18px' }}
											></i>
											<i className='bx bxs-videos' style={{ position: 'absolute', fontSize: '25px' }}></i>
										</div>
										{/* <i className='icon'>C</i> */}
										<span className='text'>클 립 퍼</span>
									</NavLink>
								</li>
								<li>
									<NavLink to='/tt1'>
										<div className='icon' style={{ position: 'relative' }}>
											<i className='bx bxl-vimeo' style={{ position: 'absolute', top: '-18px', left: '8px', fontSize: '25px' }}></i>
											{/* <div style={{ position: 'absolute', width: '10px', height: '10px', backgroundColor: 'white' }}></div> */}
											<i
												className='bx bxl-youtube icon'
												style={{ position: 'absolute', top: '-12px', left: '5px', fontSize: '26px' }}
											></i>
										</div>

										{/* <i className='icon'>D</i> */}
										<span className='text'>Vtuber</span>
									</NavLink>
								</li>
								<li>
									<NavLink to='/tt2'>
										<i className='bx bx-message-square-add icon'></i>
										{/* <i className='icon'>E</i> */}
										<span className='text'>최 신 영 상</span>
									</NavLink>
								</li>
								<li>
									<NavLink to='/tt2'>
										{/* <div className='icon' style={{ position: 'relative' }}>
											<i
												className='bx bx-wifi-2'
												style={{ position: 'absolute', transform: 'rotate(0.25turn)', top: '0px', left: '16px', fontSize: '25px' }}
											></i>
											<i
												className='bx bx-wifi-2'
												style={{ position: 'absolute', transform: 'rotate(0.75turn)', top: '0px', left: '0px', fontSize: '25px' }}
											></i>
											<i class='bx bxs-circle' style={{ position: 'absolute', top: '7.5px', left: '15.5px', fontSize: '10px' }}></i>
										</div> */}
										<i className='bx bx-star icon'></i>
										{/* <i className='icon'>F</i> */}
										<span className='text'>즐 겨 찾 기</span>
									</NavLink>
								</li>
							</ul>
						</div>
					</div>
					<footer>
						<li className='mode'>
							<div className='sun-moon'>
								<i className='bx bx-sun icon'></i>
								<i className='bx bx-moon icon'></i>
								{/* <i className='icon sun'>S</i> */}
								{/* <i className='icon moon'>M</i> */}
							</div>
							<span className='text'>Dark Mode </span>
							<div
								className='toggle-switch'
								onClick={(e) => {
									const body = document.querySelector('body');
									body.classList.toggle('dark');
								}}
							>
								<div className='switch'></div>
							</div>
						</li>
					</footer>
				</div>
			</div>
			<div className='search-center'>
				<div className='search-box'>
					<div className='search-bar'>
						<i className='bx bx-search icon'></i>
						<input type='search' name='' id='' placeholder='검색어를 입력해주세요' ref={searchR} />
					</div>
					<div className='search-results'>
						<ul>
							<li>
								<span className='text'>Vtuber란</span>
							</li>
						</ul>
						<hr />
						<hr />
						<ul>
							<li>
								<span className='text'>Vtuber란</span>
							</li>
						</ul>
						<hr />
						<hr />
						<ul>
							<li>
								<span className='text'>Vtuber란</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SideBar;
