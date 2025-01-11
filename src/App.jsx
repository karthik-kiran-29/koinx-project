
import './App.css'
import Header from './components/Header'
import TrendingViewWidget from './components/ChartView/TrendingViewWidget'
import PerformanceSection from './components/Performance/PerformanceSection';
import Sentiment from './components/Sentiment/Sentiment';
import About from './components/about';
import Tokenomics from './components/Tokenomics';
import Team from './components/Team';
import MainLayout from './layouts/MainLayout';

function App() {

  return (
    <div className='bg-gray-200'>
       <Header/>
       <div className='black mx-10 p-4'>Cryptocurrency &gt;&gt; Bitcoin</div>
       <MainLayout/>
    </div>
  )
}

export default App;
