import React from 'react'
import image from '../aboutUs.png';
function AboutUs() {
  return (
    <div className="MyCustApp">
    <div className="header">
      <h2 >About ICTAK</h2>
    </div>

    <div class="row">
      <div class="column">
        
        <p>ICT Academy of Kerala is a Social Enterprise created in a Public Private Partnership model (PPP) for imparting ICT skills to the youths of Kerala and improving their employability opportunities in the Industry. The Company is supported by Govt. of India, partnered by Govt. of Kerala and the IT industry.</p>
      <p>ICT Academy of Kerala do research and offers training programs on diverse streams, ranging from emerging technologies to life skills. Being a social enterprise, we strive to enhance the technological skills of the youth thereby imbibing industry relevant skills to them.</p>
      </div>
      <div class="column1">
        <img src={image} alt="logo" />
      </div>
    </div>

    <div class="footer">
      <h6>copyright©sahla</h6>
    </div>
  </div>
  )
}

export default AboutUs