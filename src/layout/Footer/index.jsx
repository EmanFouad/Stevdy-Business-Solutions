import React from 'react'
import styles from './styles.module.scss'

const Footer = () => {
  return (
	<footer className={styles.footerWrapper}>
		<div className={styles.footerContainer}>
			<div className={styles.infoContainer}>
				<div className={styles.logoWrapper}>
					<img src="/assets/Main/logo-footer.svg" alt="logo" />
				</div>
				<p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget diam at mi sollicitudin</p>
			</div>
			<div className={styles.serviceWrapper}>
				<h5>Nos services</h5>
				<ul className={styles.serviceListContainer}>
					<li>Avis clients</li>
					<li>Mentions légales</li>
					<li>Plan du site</li>
					<li>Blog d’Idéematic</li>
					<li>Le dictionnaire du digital</li>
					<li>‹ Notre boutique /›</li>
				</ul>
			</div>
			<div className={styles.subscribeWrapper}>
				<h5>Sign up for Special Offers!</h5>
				<div className={styles.emailInputWrapper}>
					<input type="email" placeholder='Mail' />
					<button>
						<p>Subscribe</p>
					</button>
				</div>
			</div>
		</div>
	</footer>
  )
}

export default Footer