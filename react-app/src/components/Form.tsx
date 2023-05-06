import { FormEvent, useState } from "react";

const Form = () => {
  const handleSubmitForm = (event: FormEvent) => {
    event.preventDefault();
    console.log("submitted form");
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h2>Form Title</h2>
          </div>
          <div className="card-body">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input id="name" type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input id="email" type="email" className="form-control" />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input id="phone" type="text" className="form-control" />
            </div>

            <div className="mb-3">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input id="subject" type="text" className="form-control" />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea id="message" className="form-control" />
            </div>
          </div>

          <div className="card-footer">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
