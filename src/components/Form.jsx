import Input from "./Input";
import "../css/form.css";

let Form = () => {
  return (
    <form className="form-wrapper">
      <Input title="Name : " type="text" attribute="name-input" />
      <Input title="Last Name : " type="text" attribute="last-name-input" />
      <Input title="Birthday's Date :" type="date" attribute="date-input" />
      <Input title="Age :" type="number" attribute="age-input" />
      <Input title="Phone :" type="tel" attribute="phone-input" />
      <Input title="Email :" type="text" attribute="email-input" />
      <Input type="submit" attribute="add-btn" value="Submit" />
    </form>
  );
};

export default Form;
