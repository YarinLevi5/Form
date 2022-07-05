import Input from "./Input";
import { useFormik } from "formik";
import Joi from "joi";

let Form = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      bDay: new Date(),
      age: 0,
      phone: "052 - 5672834",
      email: "",
    },
    validate(values) {
      const { error } = Joi.object({
        firstName: Joi.string().required().alphanum().min(3).max(30).required(),
        lastName: Joi.string().alphanum().min(3).max(30).required(),
        bDay: Joi.date().required(),
        age: Joi.number().required(),
        phone: Joi.string()
          .length(10)
          .regex(/^[0-9]{10}$/)
          .required(),
        email: Joi.string()
          .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
          .required(),
      }).validate(values, { abortEarly: false });

      const errors = {};
      for (const detail of error.details) {
        errors[detail.path[0]] = detail.message;
      }
      return errors;
    },
    onSubmit: (values) => {
      JSON.stringify(values, null, 2);
    },
  });

  return (
    <form
      className="flex flex-col p-8 bg-neutral-100"
      onSubmit={formik.handleSubmit}
    >
      <Input
        onChange={formik.handleChange}
        value={formik.values.firstName}
        name="firstName"
        title="First Name : "
        type="text"
        {...formik.getFieldProps("firstName")}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div>{formik.errors.firstName}</div>
      ) : null}
      <Input
        onChange={formik.handleChange}
        value={formik.values.lastName}
        name="lastName"
        title="Last Name : "
        type="text"
        {...formik.getFieldProps("lastName")}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div>{formik.errors.lastName}</div>
      ) : null}
      <Input
        onChange={formik.handleChange}
        value={formik.values.bDay}
        name="bDay"
        title="Birthday's Date :"
        type="date"
        {...formik.getFieldProps("bDay")}
      />
      {formik.touched.bDay && formik.errors.bDay ? (
        <div>{formik.errors.bDay}</div>
      ) : null}
      <Input
        onChange={formik.handleChange}
        value={formik.values.age}
        name="age"
        title="Age :"
        type="number"
        {...formik.getFieldProps("age")}
      />
      {formik.touched.age && formik.errors.age ? (
        <div>{formik.errors.age}</div>
      ) : null}

      <Input
        onChange={formik.handleChange}
        value={formik.values.phone}
        name="phone"
        title="Phone :"
        type="tel"
        {...formik.getFieldProps("phone")}
      />

      {formik.touched.phone && formik.errors.phone ? (
        <div>{formik.errors.phone}</div>
      ) : null}

      <Input
        onChange={formik.handleChange}
        value={formik.values.email}
        name="email"
        title="Email :"
        type="text"
        {...formik.getFieldProps("email")}
      />

      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}

      <Input type="submit" value="Submit" />
    </form>
  );
};

export default Form;
