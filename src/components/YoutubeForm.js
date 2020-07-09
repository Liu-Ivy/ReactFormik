import React from "react";
import { useFormik } from "formik";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};

const onSubmit = (values) => {
  console.log("data", values);
};
const validate = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = "Required";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email format";
  }

  if (!values.channel) {
    errors.channel = "Required";
  }

  return errors;
};

function YoutubeForm() {
  const data = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  console.log("data", data.errors);
  return (
    <div>
      <form onSubmit={data.handleSubmit}>
        <div className={"form-control"}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={data.handleChange}
            value={data.values.name}
          />
          {data.errors.name ? (
            <div className={"error"}>{data.errors.name}</div>
          ) : null}
        </div>
        <div className={"form-control"}>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={data.handleChange}
            value={data.values.email}
          />
          {data.errors.email ? (
            <div className={"error"}>{data.errors.email}</div>
          ) : null}
        </div>
        <div className={"form-control"}>
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            name="channel"
            onChange={data.handleChange}
            value={data.values.channel}
          />
          {data.errors.channel ? (
            <div className={"error"}>{data.errors.channel}</div>
          ) : null}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default YoutubeForm;
