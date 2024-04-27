import React from 'react'
import data from '../../data/testimonials.json'
import Testimony from './Testimony'
import { nanoid } from 'nanoid'

export default function Main() {
	const [testimonies, setTestimonies] = React.useState(data)

	const handleClick = (id, icon) => {
		setTestimonies(
			testimonies.map(testimony => {
				return icon === 'next'
					? testimony.id === id + 1
						? { ...testimony, show: true }
						: { ...testimony, show: false }
					: testimony.id === id - 1
					? { ...testimony, show: true }
					: { ...testimony, show: false }
			})
		)
	}

	const testElem = testimonies.map(
		item =>
			item.show && (
				<Testimony
					key={nanoid()}
					id={item.id}
					img={item.img}
					testimony={item.testimony}
					name={item.name}
					skill={item.skill}
					show={item.show}
					onClick={handleClick}
					testimonies={testimonies}
				/>
			)
	)

	return <main>{testElem}</main>
}
