
import './App.css'
import Header from './components/Header'
import TrendingViewWidget from './components/ChartView/TrendingViewWidget'

function App() {

  return (
    <div className='bg:grey-500'>
       <Header/>
       <TrendingViewWidget/>
    </div>
  )
}

export default App;
