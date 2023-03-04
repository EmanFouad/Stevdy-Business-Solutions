import React from 'react'
import OurWorldItem from './OurWorldItem'
import styles from './styles.module.scss'

const OurWorld = () => {
	return (
		<div className={styles.ourWorldWrapper}>
			<div className={styles.ourWorldContainer}>
				<div className={styles.ourWorldHead}>
					<h2>Don't Just Take our Word for it!</h2>
				</div>
				<div className={styles.ourWorldBody}>
					<OurWorldItem title="Dowload" />
					<OurWorldItem title="Active User" />
					<OurWorldItem title="Positive Feedback" />
					<OurWorldItem title="+ rating" />
				</div>
			</div>
		</div>
	)
}

export default OurWorld