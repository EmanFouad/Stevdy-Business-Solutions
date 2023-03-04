import React from 'react'
import styles from './styles.module.scss'

const SideMenu = ({ handleClose }) => {
	return (
		<div className={styles.sidemenuWrapper}>
			<div className={styles.sidemenuContainer}>
				<div className={styles.closeIconWrapper} onClick={handleClose}>
					<img src="/assets/Main/close.png" alt="close" />
				</div>
				<ul className={styles.navItemsListContainer}>
					<li className={styles.navItemWrapper}>
						<p>Browser</p>
					</li>
					<li className={styles.navItemWrapper}>
						<p>Bootcamps</p>
					</li>
					<li className={styles.navItemWrapper}>
						<p>How It Works</p>
					</li>
					<li className={styles.navItemWrapper}>
						<p>Testemonial</p>
					</li>
				</ul>
				<div className={styles.actionBtnWrapper}>
					<button>
						<p>About us</p>
					</button>
				</div>
			</div>
		</div>
	)
}

export default SideMenu