import React from 'react'
import ContentCard from '../common/ContentCard'
import ProcessItem from './ProcessItem'
import styles from './styles.module.scss'

const Acceleration = () => {
	return (
		<div className={styles.accelerationWrapper}>
			<div className={styles.accelerationContainer}>
				<div className={styles.contentWrapper} >
					<ContentCard />
				</div>
				<div className={styles.processContainer}>
					<ProcessItem />
					<ProcessItem />
					<ProcessItem />
				</div>
			</div>
		</div>
	)
}

export default Acceleration