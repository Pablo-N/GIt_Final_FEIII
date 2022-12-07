import React, { useState } from "react";

const Form = () => {
  
  const [mensaje, setMensaje] = useState(null);
  
  const [formData, setformData] = useState({ name: "", email: "" });




  function onsubmit(e) {
    e.preventDefault();
    if (formData.name.trim().length <= 5) {
      alert("The name should be longer than five letters");
      
    }
    else{setMensaje(true);}    
  }

  function onchange({ target }) {
    const value = target.value;
    const name = target.name;
    setformData({ ...formData, [name]: value });
    console.log(formData);
  }

  //Aqui deberan implementar el form completo con sus validaciones

  return (
    <div className="section-book">
      <div className="row">
        <div className="book">
          <div className="book__form">
            <form action="#" className="form" onSubmit={onsubmit}>
              <div className="u-margin-bottom-medium">
                <h2 className="heading-secundary">Want to know more?</h2>
                <h3>Send us your questions and we will contact you</h3>
                <br></br>
              </div>

              <div className="form__group">
                <input
                  onChange={onchange}
                  name="name"
                  type="text"
                  className="form__input"
                  id="name"
                  placeholder="Full Name"
                  required
                />
                <label for="name" className="form__label">
                  Full Name
                </label>
              </div>

              <div className="form__group">
                <input
                  name="email"
                  type="email"
                  className="form__input"
                  id="email"
                  placeholder="Email address"
                  required
                />
                <label for="email" className="form__label">
                  Email address
                </label>
              </div>
              <div className="form__group">
                <button type="submit" className="btn btn--green">
                  Next Step &rarr;
                </button>
              </div>
            </form>
            <br />
            <div>
              { mensaje === true? <h2>
                "Thanks {formData.name}, we'll reach back to you via email"
              </h2>:""}
            </div>
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
