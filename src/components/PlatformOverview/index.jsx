import React from 'react'
import SliderPagination from '../common/SliderPagination'
import styles from './styles.module.scss'

const PlatformOverview = () => {
	return (
		<div className={styles.platformOverviewWrapper}>
			<div className={styles.platformOverviewContainer}>
				<div className={styles.platformOverviewHead}>
					<p className={styles.upperTitle}>Advanced Customer Service Platform
					</p>
					<h3 className={styles.title}>Platform Overview</h3>
					<p className={styles.description}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
						Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet</p>
				</div>
				<div className={styles.platformOverviewBody}>
					<div className={styles.sliderImagesWrapper}>
						<div className={styles.sliderImageContainer}>
							<img src="/assets/Main/image.png" alt="dashboard" />
						</div>
					</div>
					<SliderPagination />
				</div>
			</div>
		</div>
	)
}

export default PlatformOverview