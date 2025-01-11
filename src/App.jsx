
import './App.css'
import Header from './layouts/Header'
import TrendingViewWidget from './components/ChartView/TrendingViewWidget'
import PerformanceSection from './components/Performance/PerformanceSection';
import Sentiment from './components/Sentiment/Sentiment';
import About from './components/about';
import Tokenomics from './components/Tokenomics';
import Team from './components/Team';
import MainLayout from './layouts/MainLayout';
import SideLayout from './layouts/SideLayout';
import Footer from './layouts/Footer';

function App() {

  return (
    <div className='bg-gray-200'>
       <Header/>
       <div className='black mx-10 p-4'>Cryptocurrency &gt;&gt; Bitcoin</div>
       <div className='flex'>
          <MainLayout/>
          <SideLayout/>
       </div>
       <Footer/>
    </div>
  )
}

export default App;
