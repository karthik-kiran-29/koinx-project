import Footer from "../layouts/Footer";
import Headers from "../layouts/Headers";
import MainLayout from "../layouts/MainLayout";
import SideLayout from "../layouts/SideLayout";


function HomePage() {

  return (
    <div className='bg-gray-200'>
       <Headers/>
       <div className='black mx-10 p-4'>Cryptocurrency &gt;&gt; Bitcoin</div>
       <div className='md:flex'>
          <MainLayout/>
          <SideLayout/>
       </div>
       <Footer/>
    </div>
  )
}

export default HomePage;
