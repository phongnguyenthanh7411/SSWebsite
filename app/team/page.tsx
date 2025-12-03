import Header from '../../components/Header'
import AnimatedTitle from '../../components/AnimatedTitle'
import CEOBuilding from '../../components/CEOBuilding'
import CPOBuilding from '../../components/CPOBuilding'
import SDBuilding from '../../components/SDBuilding'
import CFOBuilding from '../../components/CFOBuilding'
import WWBBuilding from '../../components/WWBBuilding'
import GoToTop from '@/components/GoToTop'
import ZaloButton from '@/components/ZaloButton'

export default function Team() {
  return (
    <div>
      <Header />
      <AnimatedTitle text="MEET OUR TEAM" />
      <CEOBuilding />
      <div className="border-b border-solid border-gray-300 mx-6"></div>
      <CPOBuilding />
      <div className="border-b border-solid border-gray-300 mx-6"></div>
      <SDBuilding />
      <div className="border-b border-solid border-gray-300 mx-6"></div>
      <CFOBuilding />
      <div className="border-b border-solid border-gray-300 mx-6"></div>
      <AnimatedTitle text="WHAT WE BELIEVE" />
      <WWBBuilding />
      <GoToTop />
      <ZaloButton />
    </div>
  )
}