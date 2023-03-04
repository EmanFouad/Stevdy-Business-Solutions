import React from 'react'
import styles from './styles.module.scss'

const ProcessItem = () => {
	return (
		<div className={styles.processItemContainer}>
			<div className={styles.numbercontainer}>
				<div className={styles.numberWrapper}>
					<p>1</p>
				</div>
			</div>
			<div className={styles.infoContainer}>
				<h4>Market Research</h4>
				<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
			</div>
		</div>
	)
}

export default ProcessItem