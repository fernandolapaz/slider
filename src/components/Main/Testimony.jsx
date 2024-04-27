import React from 'react'
import prev from '/images/icon-prev.svg'
import next from '/images/icon-next.svg'
import { motion } from 'framer-motion'

const slide = {
	hidden: {
		x: '-50vw',
		rotate: '-25deg',
	},
	visible: {
		x: 0,
		rotate: 0,
		transition: {
			type: 'spring',
			stiffness: 300,
		},
	},
}

export default function Testimony(props) {
	return (
		<>
			<div className='hero'>
				<motion.img
					className='avatar'
					src={props.img}
					alt={`${props.name}'s profile picture, ${props.skill}`}
					width={540}
					height={540}
					variants={slide}
					initial='hidden'
					animate='visible'
				/>
				<div className='slider'>
					<button
						type='button'
						className='btn'
						aria-label='View previous testimony'
						onClick={() => props.onClick(props.id, 'prev')}
						disabled={props.id === 1 && true}
						aria-hidden={props.id === 1 && true}
					>
						<img
							className='icon'
							src={prev}
							alt=''
							width={12}
							height={18}
						/>
					</button>
					<button
						type='button'
						className='btn'
						aria-label='View next testimony'
						onClick={() => props.onClick(props.id, 'next')}
						disabled={props.id === props.testimonies.length && true}
						aria-hidden={props.id === props.testimonies.length && true}
					>
						<img
							className='icon'
							src={next}
							alt=''
							width={12}
							height={18}
						/>
					</button>
				</div>
			</div>
			<div className='info'>
				<q className='testimony'>{` ${props.testimony} `}</q>
				<p
					className='pupil'
					aria-hidden='true'
				>
					{props.name}
					<span className='skill'>{props.skill}</span>
				</p>
			</div>
		</>
	)
}
