import React from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from "yup";
import axios from "axios";


function LoginForm( { errors, touched } ){
	return (
		<Form>
            <div>
                {touched.username && errors.username && <p>{errors.username}</p>}
			    <Field type="text" name="username" placeholder="Username" />
            </div>

            <div>
                {touched.password && errors.password && <p>{errors.password}</p>}
                <Field type="password" name="password" placeholder="Password" />
            </div>
            <button>Register</button>

		</Form>	
)
}

const FormikLoginForm = withFormik({
    mapPropsToValues({ username, password }){
        return {
            username: username || "",
            password: password || ""
        }
    },

    validationSchema: Yup.object().shape({
        username: Yup.string().min(3, "Username must be 3+ characters.").required("Username is required for registration."),
        password: Yup.string().min(6, "Password must be 6+ characters.").required("Password is required for registration.")
    })

    handleSubmit(values){
        console.log(values)
    }
})(LoginForm)

export default FormikLoginForm;