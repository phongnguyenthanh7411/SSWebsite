import Header from '../../components/Header'
import WHBuilding from '../../components/WHBuilding'
import MSBuilding from '../../components/MSBuilding'
import DMSBuilding from '../../components/DMSBuilding'
import PBIBuilding from '../../components/PBIBuilding'
import ATMBuilding from '../../components/ATMBuilding'
import ADBuilding from '../../components/ADBuilding'
import AnimatedTitle from '../../components/AnimatedTitle'
import GoToTop from '@/components/GoToTop'
import ZaloButton from '@/components/ZaloButton'

export default function Products() {
  return (
    <div>
      <Header />
      <AnimatedTitle text="WHAT ARE WE BUILDING ?" />
      <WHBuilding />
      <div className="border-b border-solid border-gray-300 mx-6"></div>
      <MSBuilding />
      <div className="border-b border-solid border-gray-300 mx-6"></div>
      <DMSBuilding />
      <div className="border-b border-solid border-gray-300 mx-6"></div>
      <PBIBuilding />
      <div className="border-b border-solid border-gray-300 mx-6"></div>
      <ATMBuilding />
      <div className="border-b border-solid border-gray-300 mx-6"></div>
      <AnimatedTitle text="ADVANCE FRAMEWORK DEVELOPMENT" />
      <ADBuilding />
      <GoToTop />
      <ZaloButton />

    </div>
  )
}