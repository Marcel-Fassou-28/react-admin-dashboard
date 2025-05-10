import Header from '../components/common/Header'
import OverviewCards from '../components/analytics/OverviewCards'
import RevenueChart from '../components/analytics/RevenueChart'
import ChannelPerformance from '../components/analytics/ChannelPerformance'
import ProductPerformance from '../components/analytics/ProductPerformance'
import UserRetentionPerformance from '../components/analytics/UserRetentionPerformance'
import CustomerSegmentation from '../components/analytics/CustomerSegmentation'
import AIPoweredInsights from '../components/analytics/AIPoweredInsights'

function AnalyticPage() {
  return (
    <div className='flex-1 overflow-auto relative z-10 bg-gray-900'>
      <Header title={'Analytics Dashboard'} />

      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        <OverviewCards />
        <RevenueChart />

        <div className='grid mt-5 grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
          <ChannelPerformance />
          <ProductPerformance />
          <UserRetentionPerformance />
          <CustomerSegmentation />
        </div>
        <AIPoweredInsights />
      </main>
    </div>
  )
}

export default AnalyticPage
