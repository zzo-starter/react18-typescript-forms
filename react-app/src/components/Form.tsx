import { FormEvent, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

const Form = () => {
  //E.2
  //const form = useForm();
  //console.log("form properties/methods: ", form);

  //E.3 destructure the register function
  //F.2 use formState
  //F.4 const { register, handleSubmit, formState } = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log("testing register func: ", register("name"));
  //F.2
  //console.log("inspect formState props/methods: ", formState);
  //F.3 console.log("inspect formState errors: ", formState.errors);
  console.log("inspect formState errors: ", errors);

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
    console.log("form-submitted");
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
                //F.1 add validation params
                {...register("name", {
                  required: true,
                  minLength: 6,
                  maxLength: 60,
                })}
                // value={formRequest.name}
                id="name"
                type="text"
                className="form-control"
              />
              {
                //F.5 if error w name and type is required
                errors.name?.type == "required" && (
                  <p className="text-danger">Name is required</p>
                )
              }
              {errors.name?.type == "minLength" && (
                <p className="text-danger">
                  Name must be at least 6 characters in length
                </p>
              )}
              {errors.name?.type == "maxLength" && (
                <p className="text-danger">
                  Name can be maximum 60 characters in length
                </p>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                {...register("email", {
                  required: true,
                  minLength: 6,
                  maxLength: 50,
                })}
                id="email"
                type="email"
                className="form-control"
              />
              {errors.email?.type == "required" && (
                <p className="text-danger">Email is required</p>
              )}
              {errors.email?.type == "minLength" && (
                <p className="text-danger">
                  Email must be at least 6 characters in length
                </p>
              )}
              {errors.email?.type == "maxLength" && (
                <p className="text-danger">
                  Email can be maximum 50 characters in length
                </p>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                {...register("phone", {
                  required: true,
                  minLength: 10,
                  maxLength: 15,
                })}
                // value={formRequest.phone}
                id="phone"
                type="text"
                className="form-control"
              />
              {errors.phone?.type == "required" && (
                <p className="text-danger">Phone is required</p>
              )}
              {errors.phone?.type == "minLength" && (
                <p className="text-danger">
                  Phone must be at least 10 characters in length
                </p>
              )}
              {errors.phone?.type == "maxLength" && (
                <p className="text-danger">
                  Phone can be maximum 15 characters in length
                </p>
              )}
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
                {...register("subject", {
                  required: true,
                  minLength: 10,
                  maxLength: 50,
                })}
                // value={formRequest.subject}
                id="subject"
                type="text"
                className="form-control"
              />
              {errors.subject?.type == "required" && (
                <p className="text-danger">Subject is required</p>
              )}
              {errors.subject?.type == "minLength" && (
                <p className="text-danger">
                  Subject must be at least 10 characters in length
                </p>
              )}
              {errors.subject?.type == "maxLength" && (
                <p className="text-danger">
                  Subject can be maximum 50 characters in length
                </p>
              )}
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
                {...register("message", {
                  required: true,
                  minLength: 25,
                  maxLength: 500,
                })}
                // value={formRequest.message}
                id="message"
                className="form-control"
              />
              {errors.message?.type == "required" && (
                <p className="text-danger">Message is required</p>
              )}
              {errors.message?.type == "minLength" && (
                <p className="text-danger">
                  Message must be at least 25 characters in length
                </p>
              )}
              {errors.message?.type == "maxLength" && (
                <p className="text-danger">
                  Message can be maximum 500 characters in length
                </p>
              )}
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
