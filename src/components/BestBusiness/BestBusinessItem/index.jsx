import React from 'react'
import styles from './styles.module.scss'

const BestBusinessItem = ({item}) => {
	return (
		<div className={styles.bestBusinessItemContainer}>
			<div className={styles.iconWrapper} style={{backgroundColor: `${item.iconBgColor}`}}>
				<img src={item.icon} alt="icon" />
			</div>
			<div className={styles.itemHead}>
				<h4>{item.title}</h4>
			</div>
			<div className={styles.itemBody}>
				<p>{item.description}</p>
			</div>
		</div>
	)
}

export default BestBusinessItem