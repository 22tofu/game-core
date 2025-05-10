import React, { FormEvent, useRef, useState } from "react";
import { FieldValues, set, useForm } from "react-hook-form";
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

  // const schema = z.object({
  //   name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  //   age: z
  //     .number({ invalid_type_error: "Age field is required" })
  //     .min(18, { message: "Age must be at least 18 years old" }),
  // });

  const schema = z.object({
    description: z.string().min(1, { message: "Description is required" }),
    amount: z.number().min(1, { message: "Amount is required" }),
    category: z.string().min(1, { message: "Category is required" }),
  });

  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const onSubmit = (data: FieldValues) => console.log(data);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [submittedData, setSubmittedData] = useState<FormData[]>([]);
  const handleFormSubmit = (data: FormData) => {
    setSubmittedData((prevData) => [...prevData, data]);
    console.log(data);
  };

  return (
    <div style={{ width: "50%", margin: "auto" }}>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            id="description"
            type="text"
            className="form-control"
            {...register("description")}
          />
          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            type="number"
            id="amount"
            className="form-control"
            {...register("amount", { valueAsNumber: true })}
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            id="category"
            className="form-control"
            {...register("category")}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {selectedCategory === "" && <option value=""></option>}
            <option value="Groceries">Groceries</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
          </select>
          {errors.category && (
            <p className="text-danger">{errors.category.message}</p>
          )}
        </div>
        <button
          className="btn btn-primary"
          type="submit"
          disabled={!isValid}
          onSubmit={onSubmit}
        >
          Submit
        </button>
      </form>
      <br />
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {submittedData.map((data, index) => (
            <tr key={index}>
              <td>{data.description}</td>
              <td>{data.amount}</td>
              <td>{data.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Form;
