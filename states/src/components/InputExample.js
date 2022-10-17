import {useState} from 'react';


function InputExample(){
    const [form, setForm] = useState({name: 'your name', surname: 'your surname'});
    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }
    
    return <>
        <input id='name' name='name' value={form.name}  onChange={onChangeInput} />
        <input id='surname' name='surname' value={form.surname}  onChange={onChangeInput} />
        <h3> {form.name} {form.surname} </h3>
    </>
}


export default InputExample;