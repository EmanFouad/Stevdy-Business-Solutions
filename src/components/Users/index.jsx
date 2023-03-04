import React from 'react'
import ContentCard from '../common/ContentCard'
import SliderPagination from '../common/SliderPagination'
import styles from './styles.module.scss'
import user from './../../assets/Users/user.png'
import star from './../../assets/Users/star.svg'

const Users = () => {
  return (
	<div className={styles.usersWrapper}>
		<div className={styles.usersContainer}>
			<div className={styles.sliderContainer}>
				<div className={styles.slidersWrapper}>
					<div className={styles.sliderItemContainer}>
						<div className={styles.imageWrapper}>
							<img src={user} alt="user" />
						</div>
						<div className={styles.contentContainer}>
							<div className={styles.contentHead}>
								<p>Florrie Jacobs</p>
								<h5>CEO of Company</h5>
							</div>
							<div className={styles.contentBody}>
								<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
								<ul className={styles.starsContainer}>
									<li className={styles.starItemWrapper}>
										<img src={star} alt="star" />
									</li>
									<li className={styles.starItemWrapper}>
										<img src={star} alt="star" />
									</li>
									<li className={styles.starItemWrapper}>
										<img src={star} alt="star" />
									</li>
									<li className={styles.starItemWrapper}>
										<img src={star} alt="star" />
									</li>
									<li className={styles.starItemWrapper}>
										<img src={star} alt="star" />
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.sliderPaginationWrapper}>
					<SliderPagination />
				</div>
			</div>
			<div className={styles.contentWrapper}>
				<ContentCard />
			</div>
		</div>
	</div>
  )
}

export default Users