import { FormEvent, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

//G.3
const schema = z.object({
  name: z
    .string()
    .min(6, { message: "Name must be at least 6 characters" }) //G.8
    .max(60, { message: "Name maximum length is 60 characters" }), //G.8
  email: z
    .string()
    .min(6, { message: "Email must be at least 6 characters" })
    .max(60, { message: "Email maximum length is 60 characters" }),
  phone: z
    .string()
    .min(10, { message: "Phone must be at least 10 numbers" })
    .max(15, { message: "Phone maximum length is 15 numbers" }),
  subject: z
    .string()
    .min(10, { message: "Subject must be at least 10 characters" })
    .max(50, { message: "Subject maximum length is 50 characters" }),
  message: z
    .string()
    .min(25, { message: "Message must be at least 25 characters" })
    .max(400, { message: "Message maximum length is 400 characters" }),
});

type FormData = z.infer<typeof schema>;

const Form = () => {
  //E.2
  //const form = useForm();
  //console.log("form properties/methods: ", form);

  //E.3 destructure the register function
  //F.2 use formState
  //F.4 const { register, handleSubmit, formState } = useForm();

  //G.6 implement resolver
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

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
                {...register("name")}
                id="name"
                type="text"
                className="form-control"
              />
              {
                //G.7 simplify logic
                errors.name && (
                  <p className="text-danger"> {errors.name.message}</p>
                )
              }
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                {...register("email")}
                id="email"
                type="email"
                className="form-control"
              />
              {errors.email && (
                <p className="text-danger"> {errors.email.message}</p>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                {...register("phone")}
                id="phone"
                type="text"
                className="form-control"
              />
              {errors.phone && (
                <p className="text-danger"> {errors.phone.message}</p>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input
                {...register("subject")}
                id="subject"
                type="text"
                className="form-control"
              />
              {errors.subject && (
                <p className="text-danger"> {errors.subject.message}</p>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                {...register("message")}
                id="message"
                className="form-control"
              />
              {errors.message && (
                <p className="text-danger"> {errors.message.message}</p>
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
