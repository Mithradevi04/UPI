/*import { React,useState,} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import './Payment.css'
import   myImage from './images/card_img.png';                      
import Success from '../../success'

const Payment=()=>{
  
   
  const [ Name, setName ] = useState( "" );
  const [ CardNum, setCardNum ] = useState( "" );
  const [ ExpMon, setExpMon ] = useState( "" );
  const [ ExpYear, setExpYear ] = useState( "" );
  const [ Cvc, setCvc ] = useState( "" );
  const navigate =useNavigate();
  const submitHandler = ( e ) =>
  {
    e.preventDefault();
    const details = {
      
      Name : Name,
      CardNumber:CardNum ,
      ExpMonth: ExpMon,
      ExpYear: ExpYear,
      Cvc: Cvc,
      
    };

    
    console.log( details);
    navigate("/selection")
  };

    return(
        <body>
    
<div className="container">
<form  onSubmit={ submitHandler } >
<div className='row'>
    <div className="col">

    <h3 className="title">payment</h3>

    <div className="inputBox">
        <span>cards accepted :</span><div>
        <img src={myImage} alt="Img"/></div>
    </div>
    <div className="inputBox">
        <span>name on card :</span>
        <input
         type="text"
         required
         onChange={ ( e ) => setName( e.target.value ) } />
          
    </div>
    <div className="inputBox">
        <span>credit card number :</span>
        <input 
        type="number"
        required
        onChange={ ( e ) => setCardNum( e.target.value ) } />
    </div>
    <div className="inputBox">
        <span>exp month :</span>
        <input
         type="text"
         required
         onChange={ ( e ) => setExpMon( e.target.value ) } />
    </div>

    <div className="flex">
        <div className="inputBox">
            <span>exp year :</span>
            <input 
            type="number" 
            required
            onChange={ ( e ) => setExpYear( e.target.value ) } />
        </div>
        <div className="inputBox">
            <span>CVV :</span>
            <input 
            type="text" 
            required
            onChange={ ( e ) => setCvc( e.target.value ) } />
        </div>
    
    </div>

</div>





</div>

<button className='submit-btn' > proceed to checkout</button> 
</form> 
</div> 


</body>
)
}
export default Payment;*/