import React from 'react'
import styles from './styles.module.scss'
import client1 from "./../../assets/Clients/client-1.png"
import client2 from "./../../assets/Clients/client-2.png"
import client3 from "./../../assets/Clients/client-3.png"
import client4 from "./../../assets/Clients/client-4.png"
import client5 from "./../../assets/Clients/client-5.png"

const Clients = () => {
  return (
	<div className={styles.clientWrapper}>
		<ul className={styles.clientContainer}>
			<li className={styles.clientItem}>
				<img src={client1} alt="client logo" />
			</li>
			<li className={styles.clientItem}>
				<img src={client2} alt="client logo" />	
			</li>
			<li className={styles.clientItem}>
				<img src={client3} alt="client logo" />	
			</li>
			<li className={styles.clientItem}>
				<img src={client4} alt="client logo" />	
			</li>
			<li className={styles.clientItem}>
				<img src={client5} alt="client logo" />	
			</li>
		</ul>
	</div>
  )
}

export default Clients