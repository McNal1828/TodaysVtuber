import { NavLink } from 'react-router-dom';

function SideBar() {
	return (
		<div className='sidebar close'>
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
					<li className='search-box'>
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
	);
}

export default SideBar;
