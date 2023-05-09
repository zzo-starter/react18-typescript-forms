import { FormEvent, useRef, useState } from "react";

const Form = () => {
  const [formRequest, setFormRequest] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  //ref HOOK to access elements
  //   const nameRef = useRef<HTMLInputElement>(null);
  //   const emailRef = useRef<HTMLInputElement>(null);
  //   const phoneRef = useRef<HTMLInputElement>(null);
  //   const subjectRef = useRef<HTMLInputElement>(null);
  //   const msgRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmitForm = (event: FormEvent) => {
    event.preventDefault();
    console.log("------submitted form");
    console.log(formRequest);

    // request.name = nameRef.current !== null ? nameRef.current.value : ""; 
    // request.email = emailRef.current !== null ? emailRef.current.value : "";
    // request.phone = phoneRef.current !== null ? phoneRef.current.value : "";
    // request.subject = subjectRef.current !== null ? subjectRef.current.value : "";
 
    // request.message = msgRef.current !== null ? msgRef.current.value : "";
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
                onChange={(event) =>
                  setFormRequest({ ...formRequest, name: event.target.value })
                }
                value={formRequest.name}
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
                onChange={(event) =>
                  setFormRequest({ ...formRequest, email: event.target.value })
                }
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
                onChange={(event) =>
                  setFormRequest({ ...formRequest, phone: event.target.value })
                }
                value={formRequest.phone}
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
                onChange={(event) =>
                  setFormRequest({
                    ...formRequest,
                    subject: event.target.value,
                  })
                }
                value={formRequest.subject}
                id="subject"
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                onChange={(event) =>
                  setFormRequest({
                    ...formRequest,
                    message: event.target.value,
                  })
                }
                value={formRequest.message}
                id="message"
                className="form-control"
              />
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
