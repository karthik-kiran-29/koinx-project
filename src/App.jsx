
import './App.css'
import Header from './components/Header'
import TrendingViewWidget from './components/ChartView/TrendingViewWidget'
import PerformanceSection from './components/Performance/PerformanceSection';

function App() {

  return (
    <div className='bg-slate-400'>
       <Header/>
       <PerformanceSection/>
    </div>
  )
}

export default App;
