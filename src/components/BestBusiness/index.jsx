import React from 'react'
import BestBusinessItem from './BestBusinessItem'
import styles from './styles.module.scss'
import icon1 from "./../../assets/Best-Business/icon1.svg"
import icon2 from "./../../assets/Best-Business/icon1.svg"
import icon3 from "./../../assets/Best-Business/icon1.svg"
import icon4 from "./../../assets/Best-Business/icon1.svg"
import arrow from "./../../assets/Best-Platform/next.svg"

function BestBusiness() {
	let bestBusinessItems = [
		{ icon: icon1, iconBgColor: "#F1291E", title: "Scale Your Activity", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore" },
		{ icon: icon2, iconBgColor: "#36C5AD", title: "Bootcamps", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore" },
		{ icon: icon3, iconBgColor: "#CB4BF8", title: "Hight Quality", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore" },
		{ icon: icon4, iconBgColor: "#56E65B", title: "Get Certifcation", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore" },
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
						<img src={arrow} alt="next icon" />
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