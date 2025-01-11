
import './App.css'
import Header from './components/Header'
import TrendingViewWidget from './components/ChartView/TrendingViewWidget'
import PerformanceSection from './components/Performance/PerformanceSection';
import Sentiment from './components/Sentiment/Sentiment';
import About from './components/about';

function App() {

  return (
    <div className='bg-slate-400'>
       <Header/>
       <About/>
    </div>
  )
}

export default App;
