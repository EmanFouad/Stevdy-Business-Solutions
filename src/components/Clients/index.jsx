import React from 'react'
import styles from './styles.module.scss'

const Clients = () => {
  return (
	<div className={styles.clientWrapper}>
		<ul className={styles.clientContainer}>
			<li className={styles.clientItem}>
				<img src="/assets/Clients/client-1.png" alt="client logo" />
			</li>
			<li className={styles.clientItem}>
				<img src="/assets/Clients/client-2.png" alt="client logo" />	
			</li>
			<li className={styles.clientItem}>
				<img src="/assets/Clients/client-3.png" alt="client logo" />	
			</li>
			<li className={styles.clientItem}>
				<img src="/assets/Clients/client-4.png" alt="client logo" />	
			</li>
			<li className={styles.clientItem}>
				<img src="/assets/Clients/client-5.png" alt="client logo" />	
			</li>
		</ul>
	</div>
  )
}

export default Clients