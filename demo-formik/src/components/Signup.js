import { useFormik } from "formik";
import ValidationSchema from "./validations";

function Signup() {
    const {handleSubmit, handleChange, handleBlur, values, errors, touched, isSubmitting} = useFormik({
        initialValues: {
          email: "", password: "", passwordConfirm: "", age: "", gender: "male", hobbies: [], country: "france"
        },
        onSubmit: values => {
          console.log(values);
        },
        validationSchema: ValidationSchema
      });
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
              <label> Email </label>
              <input type="email" name="email" onChange={handleChange} onBlur={handleBlur} />
              {errors.email && touched.email && (<div className="error"> {errors.email} </div>)}
            </div>
            <div>
              <label> Password </label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                value={values.password}
                onBlur={handleBlur}
              />
              {errors.password && touched.password && (<div className="error"> {errors.password} </div>)}

            </div>
            <div>
              <label> Confirm Password  </label>
              <input
                type="password"
                name="passwordConfirm"
                onChange={handleChange}
                value={values.passwordConfirm}
                onBlur={handleBlur}
              />
              {errors.passwordConfirm && touched.passwordConfirm && (<div className="error"> {errors.passwordConfirm} </div>)}

            </div>
            <div>
              <label>Age</label>
              <input
                type="number"
                name="age"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div>
              <label>Male</label>
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={handleChange}
                checked={values.gender === 'male'}
              />
              <label>Female</label>
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={handleChange}
                checked={values.gender === 'female'}
              />
            </div>
            <div>
              <input type="checkbox" name="hobbies" value="football" onChange={handleChange} /> <span>Football</span>
              </div>
              <div>
              <input type="checkbox" name="hobbies" value="volleyball" onChange={handleChange} /> <span>Volleyball</span>
              </div>
              <div>
              <input type="checkbox" name="hobbies" value="basketball" onChange={handleChange} /> <span> Basketball </span>
              </div>
              <div>
                <select name="country" value={values.country} onChange={handleChange}>
                  <option value="turkey" >Turkey</option>
                  <option value="germany" >Germany</option>
                  <option value="france" >France</option>
                </select>
              </div>
            <div>
              <button type="submit">
                Submit
              </button>
            </div>
            <div>
              {JSON.stringify(values)}
            </div>
          </form>
    </div>
  )
}

export default Signup