import './App.css'
import { MdOutlineMail } from "react-icons/md";
import { VscFileSubmodule } from "react-icons/vsc";
import { TbFileText } from "react-icons/tb";
import { SlCalender } from "react-icons/sl";
import { VscGraph } from "react-icons/vsc";
import Progress from 'react-circle-progress-bar'
const App= () => {
 return(
  <>
    <div className="screen">

      <div className="screen1">
        <div className="screen1-container1">
        <div className="content">
          
          <div className="names">
          <p > <span>Dhanush.D</span> <br></br> <br />Ux Designer</p>
          </div>
        
        <div className="seperator">
            <div className="s1"><p> <span  className='P1' style={{color:"white"}} >125</span> <br />Projects</p></div>
            <div className="s2"><p><span className='p1' style={{color:"white"}}>$125</span> <br />Revenue</p></div>
          </div>
        </div>
          
        </div>

        <div className="screen1-container2">
     <div className="main-img">
          <div className="img"> <VscFileSubmodule /> <div className="name">Dashboard</div></div>
          <div className="img"> <MdOutlineMail />   <div className="name">Email</div></div>
        <div className="img"> <SlCalender /> <div className="name">Calender</div></div>
          <div className="img"> <VscGraph /> <div className="name">Graphs</div></div>
          <div className="img">   <TbFileText /> <div className="name">Forms</div></div>
          </div>
        </div>
        <div className="screen1-container3">
          <div className="space">
          <div className="heading">GO PRO</div>
          <div className="para">upgrade to pro and get all features</div></div>
          <div className="button11"> Let's start</div>

        </div>

      </div>
      <div className="screen2">
        <div className="screen2-container1">
          <div className="maindiv">
            <div className="imagediv"> <img src="./img3.png" alt="" /></div>
           
           <div className="textdiv"> <div className="heading">Total Revenue</div> <div className="para"  >$92,119</div></div>
          
          </div>

        </div>
        <div className="screen2-container2">
        <div className="screen2-container2-inside1">
         
          <div className="text">Travel <br />Mobile application <br />Last seen</div>
          <div className="imagescreen2"> <img src="/img.png" alt="" /></div>
          <div className="buttons1">
            <button className='butviolet'>Tour</button>
 
 <button>Trip</button>         </div>
 <div className="buttons2"><button>Transport</button></div>
        </div>
        <div className="screen2-container2-inside2">
        <div className="text">Travel <br />Mobile application <br />Last seen</div>
          <div className="imagescreen2"> <img src="/img.png" alt="" /></div>
          <div className="buttons1">
            <button className='butviolet'>Tour</button>
 
 <button>Trip</button>         </div>
 <div className="buttons2"><button>Transport</button></div> </div>
        </div>
        <div className="screen2-container3">
       
<div className="free">Free slots avilable</div>
<div className="rows">
<div className="rows1">
  <div className="row1" style={{backgroundColor:"#ff5360"}} >
    <div className="date">3</div>
    <div className="month">July</div>
  </div>
  <div className="row2"> <div className="date">3</div>
  <div className="month">July</div></div>
  <div className="row3"> <div className="date">3</div>
  <div className="month">July</div></div>
</div>
<div className="rows2">
  <div className="row1"> <div className="date">3</div>
  <div className="month">July</div></div>
  <div className="row2"> <div className="date">3</div>
  <div className="month">July</div></div>
  <div className="row3"> <div className="date">3</div>
  <div className="month">July</div></div>
</div>
</div>
        </div>
      </div>
      <div className="screen3">
        <div className="screen3-container1">
<div className="cont">
  <div className="imgcont"><img className='logcont' src="/img2.png" alt="" /></div>
  <div className="textcont">
    Dear Client <div className="text1cont">Join Our Online Community It Helps</div>
  </div>
</div>
        </div>
        <div className="screen3-container2">
      <div className="s3maindiv">
        <div className="s3textdiv">Transaction details 
          <div className="s3text1div">Hi Dhanush</div></div>
        <div className="s3imgdiv"><img src="/img4.png" alt="" /></div>
      </div>
      <div className="s3secdiv">
      <div className="s3textdiv">$10,694.60
          <div className="s3text1div">Account balance</div></div>
        <div className="s3imgdiv">******3853</div>
      </div>
      <div className="s3thirddiv">
        <img className='imgprof' src="https://i.pinimg.com/736x/3f/e9/fe/3fe9fe7f0573b76d84f1bc313e43c98d.jpg" alt="" />
      
        <img className='imgprof' src="https://i.pinimg.com/736x/3f/e9/fe/3fe9fe7f0573b76d84f1bc313e43c98d.jpg" alt="" />
      
        <img className='imgprof' src="https://i.pinimg.com/736x/3f/e9/fe/3fe9fe7f0573b76d84f1bc313e43c98d.jpg" alt="" />
      
        <img className='imgprof' src="https://i.pinimg.com/736x/3f/e9/fe/3fe9fe7f0573b76d84f1bc313e43c98d.jpg" alt="" />
      
      </div>
      <div className="s3fourdiv">
        <button className='s3button'>send</button>
      </div>
        </div>
        <div className="screen3-container3">
        <div className="screen3-container3-inside1">
          <div className="s31main">
          <div className="text12">Project Details</div>
          <div className="text12"><span className="namespan">Dhanush.D</span></div>
          <div className="heading">Ux Designer</div>
          <div className="d1iv">Project Progress</div>
          <div className="imgdiv1"><img className='img11' src="/img5.png" alt="" /></div>
          </div>
        </div>
        <div className="screen3-container3-inside2">
          <div className="s32main">
      <div className="names12">Project Progress</div>
        <Progress className="progress" progress={75}  />
        <div className="remaining">
      3 remaining projects
        </div>
        </div>
        </div>

        </div>
      </div>
   

    </div>
  </>
  );
}
export default App;