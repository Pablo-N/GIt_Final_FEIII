import React, { useState } from "react";

const Form = () => {

  const formValidation = false;

  const [formData, setformData] = useState({name:"",email:""})

  function onsubmit(e){
    e.preventDefault()

    if(formData.name<=5){
      formValidation= false;
    }
    formValidation= true;
    alert("dfff")


  }

function onchange({target}) {
  const value = target.value
  const name = target.name
setformData ( {...formData, [name]:value})
  console.log(formData)

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
                <input onChange={onchange}
                  
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
                <button type = "submit"  className="btn btn--green">Next Step &rarr;</button>
              </div>
            </form>
            <br></br>
            {/* <h2 className={!onsubmit?"":"hidden"} > Gracias {formData.name} , te contactaremos cuanto antes via mail </h2> */}
            { formValidation?<h2 className={!onsubmit?"":"hidden"} > Gracias {formData.name} , te contactaremos cuanto antes via mail </h2>: alert("The name must be longer than five letters")}
            <br></br>
            <br></br>
          </div>

          
        </div>
      </div>
    </div>
    // <div className="row">
    //   <div className="book">
    //     <div className="book__form">
    //       <form action="#" className="form">
    //         <div className="u-margin-bottom-medium">
    //           <h2 className="heading-secundary">Contact us</h2>
    //         </div>

    //         <div className="form__group">
    //           <input
    //             type="text"
    //             className="form__input"
    //             id="name"
    //             placeholder="Full Name"
    //             required
    //           />
    //           <label for="name" className="form__label">
    //             Full Name
    //           </label>
    //         </div>

    //         <div className="form__group">
    //           <input
    //             type="email"
    //             className="form__input"
    //             id="email"
    //             placeholder="Email address"
    //             required
    //           />
    //           <label for="email" className="form__label">
    //             Email address
    //           </label>
    //         </div>

    //         <div className="form__group">
    //           <button className="btn btn--green">Next Step &rarr;</button>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Form;
