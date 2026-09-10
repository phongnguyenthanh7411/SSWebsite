import Header from '../../components/Header'
import AnimatedTitle from '../../components/AnimatedTitle'
import MatrixOverview from '../../components/MatrixOverview'
import DatabaseBuilding from '../../components/DatabaseBuilding'
import BackendBuilding from '../../components/BackendBuilding'
import FrontendBuilding from '../../components/FrontendBuilding'
import AIMLBuilding from '../../components/AIMLBuilding'
import BILowCodeBuilding from '../../components/BILowCodeBuilding'
import GoToTop from '@/components/GoToTop'
import ZaloButton from '@/components/ZaloButton'

export default function Products() {
  return (
    <div className="scroll-smooth">
      <Header />
      <AnimatedTitle text="FULL-STACK TECHNOLOGY & SOLUTIONS" />
      <MatrixOverview />
      <div className="border-b border-solid border-gray-300 mx-6"></div>
      <DatabaseBuilding />
      <div className="border-b border-solid border-gray-300 mx-6"></div>
      <BackendBuilding />
      <div className="border-b border-solid border-gray-300 mx-6"></div>
      <FrontendBuilding />
      <div className="border-b border-solid border-gray-300 mx-6"></div>
      <AIMLBuilding />
      <div className="border-b border-solid border-gray-300 mx-6"></div>
      <BILowCodeBuilding />
      <GoToTop />
      <ZaloButton />
    </div>
  )
}