import React, { useState } from 'react'
import SideMenu from './SideMenu'
import styles from './styles.module.scss'
import logo from "./../../assets/Main/logo.svg"
import more from "./../../assets/Main/more.png"

const Header = () => {
	const [showSideMenu, setShowSidemenu] = useState(false)

	const handleShowSidemenu = () => {
		setShowSidemenu(true)
	}

	const handleCloseSidemenu = () => {
		setShowSidemenu(false)
	}

	return (
		<>
			<nav className={styles.headerWrapper}>
				<div className={styles.headerContainer}>
					<div className={styles.menuWrapper} onClick={handleShowSidemenu}>
						<img src={more} alt="menu" />
					</div>
					<div className={styles.logoWrapper}>
						<img src={logo} alt="logo" />
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
			</nav>
			{
				showSideMenu ? <SideMenu handleClose={handleCloseSidemenu} /> : null
			}
		</>
	)
}

export default Header