import Calender from './calender';
import Slide from './homepage_slide';
import Livenow from './livenow';

function Homepage() {
	return (
		<div className='homepage'>
			<Slide />
			<div className='row'>
				<Livenow />
				<Calender />
			</div>
		</div>
	);
}

export default Homepage;
