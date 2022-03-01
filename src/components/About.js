import React, {useState} from "react";

export default function About(props) {

  // const [myStyle, setMyStyle] = useState({
  //   color: 'black',
  //   backgroundColor: 'white'
  // })

  // const [btnText, setBtnText] = useState('Enable Dark Mode')

  // const toggleStyle = ()=>{
  //   if(myStyle.color === 'white'){
  //     setMyStyle({
  //       color: 'black',
  //       backgroundColor: 'white'
  //     });
  //     setBtnText('Enable Dark Mode')
  //   }
  //   else{
  //     setMyStyle({
  //       color: 'white',
  //       backgroundColor: 'black'
  //     });
  //     setBtnText('Enable Light Mode')
  //   }
  // }
  
  return (
    <div className="container" style={{color: props.mode==='light'?'black' : 'white', backgroundColor: props.mode==='light'?'white' : '#292b2e', borderRadius: '15px'}}>
    <h2 className="my-2" style={{color: props.mode==='light'?'black' : 'white'}}>About Us</h2>
      <div className="accordion" id="accordionExample" style={{color: props.mode==='light'?'black' : 'white'}}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{ color: props.mode === "light" ? "black" : "white", backgroundColor: props.mode === "light" ? "white" : "#292b2e"}}
            >
              Is this App useful?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
            style={{ color: props.mode === "light" ? "black" : "white", backgroundColor: props.mode === "light" ? "white" : "#292b2e"}}            
          >
            <div className="accordion-body" style={{color: props.mode==='light'?'black' : 'white'}}>
              <strong style={{color: props.mode==='light'?'black' : 'white'}}>Yes.</strong> This app can be very useful sometimes.<code> (TextUtils Developers)</code>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{ color: props.mode === "light" ? "black" : "white", backgroundColor: props.mode === "light" ? "white" : "#292b2e"}}
            >
              Are we gonna add more features to this app?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
            style={{ color: props.mode === "light" ? "black" : "white", backgroundColor: props.mode === "light" ? "white" : "#292b2e"}}
          >
            <div className="accordion-body" style={{color: props.mode==='light'?'black' : 'white'}}>
              <strong style={{color: props.mode==='light'?'black' : 'white'}}>Yes.</strong> Yes soon we are gonna add more features to our app <code> (TextUtils Developers)</code>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={{ color: props.mode === "light" ? "black" : "white", backgroundColor: props.mode === "light" ? "white" : "#292b2e"}}
            >
              Who developed this app?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
            style={{ color: props.mode === "light" ? "black" : "white", backgroundColor: props.mode === "light" ? "white" : "#292b2e"}}
          >
            <div className="accordion-body" style={{color: props.mode==='light'?'black' : 'white'}}>
              <strong style={{color: props.mode==='light'?'black' : 'white'}}>Pratham Tagotra,  </strong>
               developed this app from scratch.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-2">
      <button onClick={toggleStyle} type="button" className="btn btn-primary">{btnText}</button>
      </div> */}
    </div>
  );
}
