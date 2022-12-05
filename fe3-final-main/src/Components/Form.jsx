import React from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  return (
    <div className="section-book">
      <div className="row">
        <div className="book">
          <div className="book__form">
            <form action="#" className="form">
              <div className="u-margin-bottom-medium">
                <h2 className="heading-secundary">Start booking now</h2>
              </div>

              <div className="form__group">
                <input
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
                <button className="btn btn--green">Next Step &rarr;</button>
              </div>
            </form>
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
