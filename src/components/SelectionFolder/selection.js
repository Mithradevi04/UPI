/*import React from 'react'
import { useState } from "react";
import { useNavigate} from 'react-router-dom';

import   myImage from './images/card_img.png';                      

import './Selection.css';



 const Selection=()=> {
  const [showhide, setShowhide] = useState('');
   
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
  
  return (
    <div>
      <div className="py-4" style={{float:"right",Top:"20px"}}>
                <div className="container" >
                    <div className="row">
                      <div className='col-md-7'>
                        <div className='card'>

                          <div className='card-header'>
                             <h1>payment methods </h1>
                          </div>
                          <div className="card-body">
                                                
                                                            <div className="text-right mt-3">
                                                                <form>

                                                                    
                                                                    <div class="form-check">
                                                                    
                                                                        <input type="radio" class="form-check-input" id="radio1" name="optradio" value="option1"
                                                                        onClick={()=>setShowhide(true)}/>
                                                                            <label class="form-check-label" for="radio1" style={{backgroundColor:"#F0F0F0",width:"150px",borderRadius:"5px"}}>Card Payment</label>
                                                                    </div>
                                                                    {showhide &&
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
                                                                } 
                                                                    <div class="form-check">
                                                                        <input type="radio" class="form-check-input" id="radio2" name="optradio" value="option2" onClick={()=>setShowhide(false)} />
                                                                            <label class="form-check-label" for="radio2" style={{backgroundColor:"#F0F0F0",width:"150px",borderRadius:"5px"}}>UPI</label>
                                                                    </div>
                                                                    <div class="form-check">
                                                                        <input type="radio" class="form-check-input" id="radio3" name="optradio" value="option3" onClick={()=>setShowhide(false)} />
                                                                            <label class="form-check-label" for="radio3" style={{backgroundColor:"#F0F0F0",width:"150px",borderRadius:"5px"}}>Cash On Delivery</label>
                                                                    </div>
                                                                   
                                                                    <button type="submit" class="btn btn-primary mt-3" style={{backgroundColor:"#ffc107",border:"#ffc107"}}>PLACE ORDER</button>
                                                                </form>
                                                                
                                                            </div>
                                                        </div>


                                                   
                        </div>
                      </div>
                    </div>
                </div>
      </div>          
    </div>*/
    

 







  //from here comes the actual code of teammates
    /*<body>
    <div className='Full' >
      <h3 className='h3'>Recommended Payment option </h3>
      <div className='Card'>
        
        <button className='btn' onClick={()=>setShowhide(true)}> <b> Pay with card</b> </button>
    </div>
    <div>
        {showhide &&
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
        }
        </div>
    <div className='Gpay'>
    
    <button className='btn'><b> Google Pay onClick={()=>setShowhide(true)}</b>   </button>
    
    </div>
    <div className='phnPay'>
    
    <button className='btn'onClick={()=>setShowhide(false)}> <b> UPI Payment </b></button>
    
    
    </div> <div className='paytm'>
    
    <button className='btn'>  <b> Paytm </b>  </button>
       
    
    </div>
    <div className='Cod'>
    
    <button className='btn'><b> Cash on delivery</b>   </button>
    
    
    </div>
   
    </div>
    </body>*/
  /*)
}
export default  Selection;*/

