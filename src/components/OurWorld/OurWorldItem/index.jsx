import React from 'react'
import styles from './styles.module.scss'

const OurWorldItem = ({ title }) => {
	return (
		<div className={styles.ourWorldItemContainer}>
			<p className={styles.number}>570 </p>
			<h5 className={styles.title}>{title}</h5>
		</div>
	)
}

export default OurWorldItem