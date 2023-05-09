import { FormEvent, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

const Form = () => {
  //E.2
  //const form = useForm();
  //console.log("form properties/methods: ", form);

  //E.3 destructure the register function
  const { register, handleSubmit } = useForm();
  console.log("testing register func: ", register("name"));

  //E.4 dont need useState
  //   const [formRequest, setFormRequest] = useState({
  //     name: "",
  //     email: "",
  //     phone: "",
  //     subject: "",
  //     message: "",
  //   });

  //E.5
  //   const handleSubmitForm = (event: FormEvent) => {
  //     event.preventDefault();
  //     console.log("------submitted form");
  //     console.log(formRequest);
  //   };

  //E.6
  const onFormSubmit = (data: FieldValues) => {
    //form values to be used in API request
    console.log("form field values: ", data);

  };

  return (
    //E.5
    <form onSubmit={handleSubmit(onFormSubmit)}>
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
                // onChange={(event) =>
                //   setFormRequest({ ...formRequest, name: event.target.value })
                // }

                //E.3 use register object w properties/ events onBlur, onChange, ref using Spread Operator
                {...register("name")}
                // value={formRequest.name}
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
                // onChange={(event) =>
                //   setFormRequest({ ...formRequest, email: event.target.value })
                // }
                {...register("email")}
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
                // onChange={(event) =>
                //   setFormRequest({ ...formRequest, phone: event.target.value })
                // }
                {...register("phone")}
                // value={formRequest.phone}
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
                // onChange={(event) =>
                //   setFormRequest({
                //     ...formRequest,
                //     subject: event.target.value,
                //   })
                // }
                {...register("subject")}
                // value={formRequest.subject}
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
                // onChange={(event) =>
                //   setFormRequest({
                //     ...formRequest,
                //     message: event.target.value,
                //   })
                // }
                {...register("message")}
                // value={formRequest.message}
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
