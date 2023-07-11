import React, { useState, useEffect } from "react";
import "./Address.css";

import myImage from "./images/card_img.png";
import ReactConfetti from "react-confetti";

const Address = () => {
  const [Name, setName] = useState("");
  const [Phone, setPhone] = useState("");

  const [Address, setAddress] = useState("");

  const [City, setCity] = useState("");
  const [State, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  const [windowdimension, setDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [button, setButton] = useState(false);
  const detectSize = () => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  };
  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowdimension]);

  const SubmitHandler = (e) => {
    e.preventDefault();

    const userShippingAddress = {
      name: Name,
      phone: Phone,
      address: Address,
      state: State,
      city: City,
      postalCode: postalCode,
    };

    console.log(userShippingAddress);

    
  };

  const [showhide, setShowhide] = useState("");

  const [holderName, setholderName] = useState("");
  const [CardNum, setCardNum] = useState("");
  const [ExpMon, setExpMon] = useState("");
  const [ExpYear, setExpYear] = useState("");
  const [Cvc, setCvc] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const details = {
      holderName: holderName,
      CardNumber: CardNum,
      ExpMonth: ExpMon,
      ExpYear: ExpYear,
      Cvc: Cvc,
    };
    console.log(details);
  };

  return (
    <div className="container" style={{ width: "25cm", marginLeft: "5cm" }}>
      <form className="checkout__form" onSubmit={SubmitHandler}>
        <div className="row">
          <div className="col">
            <h3
              className="title"
              style={{
                backgroundColor: "#ffc107",
                borderRadius: "50px 20px",
                padding: "10px",
              }}
            >
              Delivery address
            </h3>
            <div className="flex">
              <div className="inputBox">
                <span>Name :</span>
                <input
                  type="text"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="inputBox">
                <span>Phone Number :</span>
                <input
                  className="new"
                  required
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            <div className="inputBox">
              <span>address :</span>
              <input
                className="new"
                required
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="inputBox">
              <span>City:</span>
              <input
                type="text"
                required
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            <div className="flex">
              <div className="inputBox">
                <span>State :</span>
                <input
                  type="text"
                  required
                  onChange={(e) => setState(e.target.value)}
                />
              </div>
              <div className="inputBox">
                <span>Postal code :</span>
                <input
                  type="text"
                  required
                  onChange={(e) => setPostalCode(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="btn-group">
          <button>back</button>
          <button>Save</button>
        </div>
      </form>

      <div
        className="SubContainer"
        style={{ height: "12.5cm", marginLeft: "1cm" }}
      >
        <form className="cardform" style={{ width: "12cm" }}>
          <h3
            className="titlecard"
            style={{
              backgroundColor: "#ffc107",
              borderRadius: "50px 20px",
              padding: "10px",
              fontSize: "20px",
              color: "#333",
            }}
          >
            {" "}
            PAYMENT METHODS{" "}
          </h3>
          <div class="form-check" style={{ marginTop: "30px" }}>
            <input
              type="radio"
              class="form-check-input"
              id="radio1"
              name="optradio"
              value="option1"
              onClick={() => setShowhide(true)}
            />
            <label
              class="form-check-label"
              for="radio1"
              style={{
                backgroundColor: "#F0F0F0",
                borderRadius: "5px",
                padding: "15px",
              }}
            >
              Card Payment
            </label>
          </div>
          {showhide && (
            <form onSubmit={submitHandler} style={{ width: "10cm" }}>
              <div className="payment">
                <div className="row">
                  <div className="col">
                    <div className="flex">
                      <div className="inputBox">
                        <span>cards accepted :</span>
                        <div>
                          <img
                            src={myImage}
                            alt="Imgage"
                            style={{ width: "4cm" }}
                          />
                        </div>
                      </div>
                      <div className="inputBox" style={{ width: "5cm" }}>
                        <span>name on card :</span>
                        <input
                          type="text"
                          required
                          onChange={(e) => setholderName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="flex">
                      <div className="inputBox">
                        <span>credit card no :</span>
                        <input
                          type="number"
                          required
                          onChange={(e) => setCardNum(e.target.value)}
                          style={{ width: "4cm" }}
                        />
                      </div>
                      <div className="inputBox">
                        <span>exp month :</span>
                        <input
                          type="text"
                          required
                          onChange={(e) => setExpMon(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="flex">
                      <div className="inputBox">
                        <span>exp year :</span>
                        <input
                          type="number"
                          required
                          onChange={(e) => setExpYear(e.target.value)}
                          style={{ width: "4cm" }}
                        />
                      </div>
                      <div className="inputBox">
                        <span>CVV :</span>
                        <input
                          type="text"
                          required
                          onChange={(e) => setCvc(e.target.value)}
                        />
                      </div>
                    </div>

                    <button
                      className="submit-btn"
                      onClick={() => {
                        setButton(!button);
                        toggleModal();
                      }}
                    >
                      Place order by card
                    </button>
                    {modal && (
                      <div className="modal">
                        <div onClick={toggleModal} className="overlay"></div>
                        <div className="modal-content">
                          <h2 style={{ textAlign: "center", marginTop: "2cm" }}>
                            Order placed Successfully!!!
                          </h2>

                          <button
                            className="close-modal"
                            onClick={() => {
                              setButton(!button);
                              toggleModal();
                            }}
                          >
                            CLOSE
                          </button>
                        </div>
                      </div>
                    )}
                    {button && (
                      <ReactConfetti
                        width={windowdimension.width}
                        height={windowdimension.height}
                        tweenDuration={1000}
                      />
                    )}
                  </div>
                </div>
              </div>
            </form>
          )}

          <div class="form-check">
            <input
              type="radio"
              class="form-check-input"
              id="radio2"
              name="optradio"
              value="option2"
              style={{ marginTop: "50px" }}
              onClick={() => setShowhide(true)}
            />
            <label
              class="form-check-label"
              for="radio2"
              style={{
                backgroundColor: "#F0F0F0",
                width: "150px",
                borderRadius: "5px",
                padding: "15px",
              }}
            >
              UPI
            </label>
            {showhide && (
              <form>
                <label>Enter upi ID:
                  <input type="text"/>
                </label>
              </form>
            )}
          </div>
          <div class="form-check">
            <input
              type="radio"
              class="form-check-input"
              id="radio3"
              name="optradio"
              value="option3"
              style={{ marginTop: "50px" }}
              onClick={() => setShowhide(false)}
            />
            <label
              class="form-check-label"
              for="radio3"
              style={{
                backgroundColor: "#F0F0F0",
                borderRadius: "5px",
                padding: "15px",
              }}
            >
              Cash On Delivery
            </label>
          </div>
          <div
            className="order"
            style={{ textAlign: "center", marginTop: "30px" }}
          >
            <button class="submit-btn">PLACE ORDER</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Address;
