import { Route } from 'react-router-dom';

function Main() {
	return (
		<div>
			<h1>하와와</h1>
			<img src={process.env.PUBLIC_URL + '/images/cheers.gif'} alt='경로이상' />
		</div>
	);
}

export default Main;
