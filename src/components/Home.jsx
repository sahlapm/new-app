import React from 'react'
import mylogo from '../Home.gif';

function Home() {
  return (
    <div className="MyCustApp">
    <div className="header" >
      <h2 >Build your Career with ICTAK</h2>
    </div>

    <div class="row">
      <div class="column">
        <p>ICT Academy of Kerala (ICTAK) is a social enterprise officially launched on the 24th of June, 2014. The organization had a humble beginning providing skill training programs to selected academic institutions. Over the years, ICTAK has grown to a prime service provider of all ICT and innovation-related training and capacity-building programs in the state.
        </p>
        <p>ICT Academy of Kerala is a Social Enterprise created in a Public Private Partnership model (PPP) for imparting ICT skills to the youths of Kerala and improving their employability opportunities in the Industry. The Company is supported by Govt. of India, partnered by Govt. of Kerala and the IT industry.</p>
      </div>
      <div class="column1">
        <img src={mylogo} alt="logo" />
      </div>
    </div>

    <div class="footer">
      <h6>copyright©sahla</h6>
    </div>
  </div>
  )
}

export default Home