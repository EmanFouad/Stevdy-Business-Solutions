import React from 'react'
import Header from '../../layout/Header'
import styles from './styles.module.scss'

const MainSection = () => {
	return (
		<header>
			<Header />
			<main className={styles.mainSectionWrapper}>
				<div className={styles.mainSectionContainer}>
					<div className={styles.contentContainer}>
						<p className={styles.subTitle}>Advanced Platform</p>
						<h1 className={styles.title}>
							Take your team to the next level
						</h1>
						<p className={styles.description}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod </p>
						<button className={styles.btnAction}>About us</button>
					</div>
					<div className={styles.imageWrapper}>
						<img src="/assets/Main/image.png" alt="dashboard" />
					</div>
				</div>
			</main>
		</header>
	)
}

export default MainSection