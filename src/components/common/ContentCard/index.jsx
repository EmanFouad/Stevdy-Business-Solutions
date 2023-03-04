import React from 'react'
import styles from './styles.module.scss'

const ContentCard = () => {
	return (
		<div className={styles.contentContainer}>
			<h2 className={styles.title}>Acceleration Process to Grow Your Business</h2>
			<p className={styles.description}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
				Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet</p>
			<button>
				<p>About us</p>
			</button>
		</div>
	)
}

export default ContentCard