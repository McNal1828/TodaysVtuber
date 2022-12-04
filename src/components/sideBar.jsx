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
						<div className='image'>
							<img src={process.env.PUBLIC_URL + '/images/cheers.gif'} alt='로딩실패' />
						</div>
						<div className='text'>
							<span className='title'> TodaysVtuber</span>
							<span className='description'>팬메이드 웹페이지</span>
						</div>
					</div>
					<div
						className='toggle-btn'
						onClick={(e) => {
							const sidebar = document.querySelector('.sidebar');
							sidebar.classList.toggle('close');
						}}
					>
						V
					</div>
				</header>
				<div className='menu-bar'>
					<div className='menu'>
						<li className='search-menu'>
							<i className='search-icon icon'>A</i>
							<input type='search' name='' id='' placeholder='검색' />
						</li>
						<div className='nav'>
							<ul className='nav-link'>
								<li>
									<NavLink to='/'>
										<i className='icon'>B</i>
										<span className='text'>Home</span>
									</NavLink>
								</li>
								<li>
									<NavLink to='/tt'>
										<i className='icon'>C</i>
										<span className='text'>키 리 누 커</span>
									</NavLink>
								</li>
								<li>
									<NavLink to='/tt1'>
										<i className='icon'>D</i>
										<span className='text'>Vtuber</span>
									</NavLink>
								</li>
								<li>
									<NavLink to='/tt2'>
										<i className='icon'>E</i>
										<span className='text'>최 신 영 상</span>
									</NavLink>
								</li>
								<li>
									<NavLink to='/tt2'>
										<i className='icon'>F</i>
										<span className='text'>즐 겨 찾 기</span>
									</NavLink>
								</li>
							</ul>
						</div>
					</div>
					<footer>
						<li className='mode'>
							<div className='sun-moon'>
								{/* TODO 다크모드 설정 해지때 opacity변경하는 css수정해야함  */}
								{/* TODO 사이드바 닫앗을때는 --- 열었을때는 로고  */}
								{/* TODO 뒷배경에 캐릭터삽입  */}

								<i className='icon sun'>S</i>
								<i className='icon moon'>M</i>
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
				<div className='search-box' ref={searchR}>
					<div className='search-bar'>
						<i
							className='search-icon icon'
							onClick={(e) => {
								alert('tlqkf');
							}}
						>
							A
						</i>
						<input type='search' name='' id='' placeholder='검색어를 입력해주세요' />
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
