import React from 'react'
import image from '../contactUs.jpg';
import imgContact from '../Contact.jpg';
function ContactUs() {
  return (
    <div className="MyCustApp">
   <div class="header">
      <h2 >Contact ICTAK</h2>
 </div>

    <div class="row">
      <div class="column">
        <img src={imgContact} alt="logo" />
       
      <p> GF-1 Thejaswini Building, Technopark Rd, Thiruvananthapuram, Kerala 695581

ICT Academy of Kerala is supported by Govt. of India , partnered by Govt. of Kerala and the IT industry.</p>
      
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

export default ContactUs