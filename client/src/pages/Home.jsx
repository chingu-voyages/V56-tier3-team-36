import React from 'react';
import PromoCard from '../components/PromoCard';
import Button from '../components/Button';
import { IoTimer, IoPeople } from 'react-icons/io5';
import { MdPrivacyTip } from 'react-icons/md';
import Header from '../components/Header';
import Footer from '../components/Footer';


function Home() {
  const bodyElement = HTMLBodyElement = document.body;

  if (bodyElement) {
    bodyElement.classList.add('bg-gradient-to-br');
  }

  return (
    <>
      {/* <div className='w-full h-12 bg-gray-300 text-white flex items-center justify-center'>Upper Holder</div>
      <div className='w-full h-21 bg-gray-800 text-white flex items-center justify-center'>Header Holder</div>
       */}
       <Header />
      <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div id="home">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Surgery Status Board</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">Stay connected with your loved ones during their surgical journey. Our real-time status board provides peace of mind by keeping families informed every step of the way.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <PromoCard 
              bgClassName="bg-blue-200" 
              icon={<IoTimer className="text-blue-700 text-4xl" />}
              title="Real-Time Updates"
              description="Get instant notifications about surgery progress and patient status changes."
            />
            <PromoCard 
              bgClassName="bg-green-200" 
              icon={<IoPeople className="text-green-700 text-4xl" />}
              title="Family-Friendly"
              description="Easy-to-understand status updates designed with families in mind."
            />
            <PromoCard 
              bgClassName="bg-purple-200" 
              icon={<MdPrivacyTip className="text-purple-700 text-4xl" />}
              title="Privacy Protection"
              description="Patient privacy protected with secure authentication and role-based access."
            />
          </div>
          <Button
            title="View Current Status Board"
            onPress={() => { console.log('Button pressed!'); }}
          />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Home;