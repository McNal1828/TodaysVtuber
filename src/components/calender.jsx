import { addDays, addMonths, endOfMonth, endOfWeek, format, startOfMonth, startOfWeek, subMonths } from 'date-fns';
import { useState } from 'react';

function Calender() {
	const [today, setToday] = useState(new Date());
	const [selected, setSelected] = useState(new Date());
	const monthStart = startOfMonth(today);
	const monthEnd = endOfMonth(today);
	const weekStart = startOfWeek(monthStart);
	const weekEnd = endOfWeek(monthEnd);
	let day = weekStart;
	let days = [];
	let row = [];
	while (day <= weekEnd) {
		for (let i = 0; i < 7; i++) {
			row.push(
				<div className='day'>
					<p className='text'>{format(day, 'd')}</p>
					<p className='text contents'>하코즈 벨즈 3주년</p>
				</div>
			);
			day = addDays(day, 1);
		}
		days.push(<div className='row'>{row}</div>);
		row = [];
	}

	const dateList = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
	const dates = dateList.map((date, index) => {
		return (
			<span className='date text' key={index}>
				{date}
			</span>
		);
	});
	return (
		<div className='calender'>
			<div className='header'>
				<div>
					<span className='text'>{format(today, 'M')}월</span>
					<span className='text'>{format(today, 'yyyy')}년</span>
				</div>
				<div>
					<input
						type='button'
						value='앞'
						onClick={(e) => {
							setToday(subMonths(today, 1));
						}}
					/>
					<input
						type='button'
						value='뒤'
						onClick={(e) => {
							setToday(addMonths(today, 1));
						}}
					/>
				</div>
			</div>
			<div className='dates'>{dates}</div>
			<div className='days'>{days}</div>
		</div>
	);
}

export default Calender;
