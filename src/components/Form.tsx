import React, { FormEvent, useRef } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

function Form() {
  // const nameRef = useRef<HTMLInputElement>(null);
  // const ageRef = useRef<HTMLInputElement>(null);
  // const person = { name: "", age: 0 };

  // const handleSubmit = (event: FormEvent) => {
  //   event.preventDefault(); //prevent page reload when submitting
  //   if (nameRef.current !== null) {
  //     person.name = nameRef.current.value;
  //   }
  //   if (ageRef.current !== null) {
  //     person.age = parseInt(ageRef.current.value);
  //   }
  //   console.log(person);
  // };

  const schema = z.object({
    name: z.string().min(3, { message: "Name must be at least 3 characters" }),
    age: z
      .number({ invalid_type_error: "Age field is required" })
      .min(18, { message: "Age must be at least 18 years old" }),
  });

  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          id="name"
          type="text"
          className="form-control"
          {...register("name")}
        />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>
      <div className="mb3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          type="number"
          id="age"
          className="form-control"
          {...register("age", { valueAsNumber: true })}
        />
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>
      <button className="btn btn-primary" type="submit" disabled={!isValid}>
        Submit
      </button>
    </form>
  );
}

export default Form;
