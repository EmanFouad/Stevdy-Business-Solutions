import React from 'react'
import MainSection from '../../components/Main'
import Clients from '../../components/Clients'
import BestBusiness from '../../components/BestBusiness'
import BestPlatform from '../../components/BestPlatform'
import PlatformOverview from '../../components/PlatformOverview'
import Footer from '../../layout/Footer'
import Acceleration from '../../components/Acceleration'
import OurWorld from '../../components/OurWorld'
import Users from '../../components/Users'

const Landing = () => {
  return (
	<>
	 <MainSection />
	 <Clients />
	 <BestBusiness />
	 <BestPlatform />
	 <PlatformOverview />
	 <BestPlatform  positionRight={true}/>
	 <Acceleration />
	 <OurWorld />
	 <Users />
	 <Footer />
	</>
  )
}

export default Landing