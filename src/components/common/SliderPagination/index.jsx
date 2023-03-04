import React from 'react'
import styles from './styles.module.scss'
const SliderPagination = () => {
	return (
		<ul className={styles.sliderPagination}>
			<li className={`${styles.paginationItem} ${styles.active}`}></li>
			<li className={styles.paginationItem}></li>
			<li className={styles.paginationItem}></li>
		</ul>
	)
}

export default SliderPagination