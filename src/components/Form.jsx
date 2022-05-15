import Input from "./Input";

let Form = () => {
  return (
    <form className="flex flex-col p-8 bg-neutral-100">
      <Input title="Name : " type="text" />
      <Input title="Last Name : " type="text" />
      <Input title="Birthday's Date :" type="date" />
      <Input title="Age :" type="number" />
      <Input title="Phone :" type="tel" />
      <Input title="Email :" type="text" />
      <Input type="submit" value="Submit" />
    </form>
  );
};

export default Form;
