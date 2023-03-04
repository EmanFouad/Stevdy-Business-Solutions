import React from 'react'
import styles from './styles.module.scss'

const BestPlatform = ({ positionRight }) => {
	return (
		<div className={styles.bestPlatformWrapper}>
			<div className={styles.bestplatformContainer}>
				<div className={`${styles.imageBgContainer} ${positionRight && styles.imgPositionRight}`} >
					<div className={styles.imageWrapper}>
						<img src="/assets/Best-Platform/image.png" alt="dashboard" />
					</div>
				</div>
				<div className={`${styles.contentContainer} ${positionRight && styles.contentPositionRight}`}>
					<h3 className='headTitle'>Best Platform for the Technological Era</h3>
					<p className={styles.description}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
						Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet</p>
					<button className='btnLearn'>
						<p>Learn About Our Success</p>
						<img src="/assets/Best-Platform/next.svg" alt="next icon" />
					</button>
				</div>
			</div>
		</div>
	)
}

export default BestPlatform