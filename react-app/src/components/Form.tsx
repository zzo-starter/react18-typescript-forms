import { FormEvent, useRef, useState } from "react";

const Form = () => {
  //ref HOOK to access elements
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const msgRef = useRef<HTMLTextAreaElement>(null);

  const request = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };

  const handleSubmitForm = (event: FormEvent) => {
    event.preventDefault();
    console.log("------submitted form");

    request.name = nameRef.current !== null ? nameRef.current.value : "";

    request.email = emailRef.current !== null ? emailRef.current.value : "";

    request.phone = phoneRef.current !== null ? phoneRef.current.value : "";

    request.subject =
      subjectRef.current !== null ? subjectRef.current.value : "";

    request.message = msgRef.current !== null ? msgRef.current.value : "";
    console.log(request);
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
              <input
                ref={nameRef}
                id="name"
                type="text"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                ref={emailRef}
                id="email"
                type="email"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                ref={phoneRef}
                id="phone"
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input
                ref={subjectRef}
                id="subject"
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea ref={msgRef} id="message" className="form-control" />
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
