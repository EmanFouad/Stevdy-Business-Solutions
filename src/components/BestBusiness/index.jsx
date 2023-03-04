import React from 'react'
import BestBusinessItem from './BestBusinessItem'
import styles from './styles.module.scss'

function BestBusiness() {
	let bestBusinessItems = [
		{ icon: "/assets/Best-Business/icon1.svg", iconBgColor: "#F1291E", title: "Scale Your Activity", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore" },
		{ icon: "/assets/Best-Business/icon2.svg", iconBgColor: "#36C5AD", title: "Bootcamps", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore" },
		{ icon: "/assets/Best-Business/icon3.svg", iconBgColor: "#CB4BF8", title: "Hight Quality", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore" },
		{ icon: "/assets/Best-Business/icon4.svg", iconBgColor: "#56E65B", title: "Get Certifcation", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore" },
	]

	return (
		<div className={styles.bestBusinessWrapper}>
			<div className={styles.bestBusinessContainer}>
				<div className={styles.contentContainer}>
					<h3 className='headTitle'>The best business solution for you</h3>
					<p className={styles.description}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
						Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet</p>
					<button className='btnLearn'>
						<p>Learn About Our Success</p>
						<img src="/assets/Best-Platform/next.svg" alt="next icon" />
					</button>
				</div>
				<div className={styles.bestBusinessItemsWrapper}>
					{
						bestBusinessItems.map((item, indx) => (
							<div className={styles.bestBusinessItemWrapper} key={indx}>
								<BestBusinessItem item={item} />
							</div>
						))
					}
				</div>
			</div>
		</div>
	)
}

export default BestBusiness