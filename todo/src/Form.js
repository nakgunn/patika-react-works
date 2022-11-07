import { useState } from "react";

function Form() {
  const [form, setform] = useState({ name: "", surname: "" });

  const changeInput = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };
  
  return (
    <div>
      <h3>Test Form</h3>
      <div> <input name="name" value={form.name} onChange={changeInput} /> </div>
      <div> <input name="surname" value={form.surname} onChange={changeInput}/> </div>
    <p> {form.name} - {form.surname} </p>
    </div>
  );
}

export default Form;
