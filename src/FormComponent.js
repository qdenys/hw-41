import React, {useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import './FormComponent.css';

const validateName = (value) => {
	let error;
	if (!value) {
		error = 'Поле є обов\'язковим';
	}
	return error;
};

const validateEmail = (value) => {
	let error;
	if (!value) {
		error = 'Поле є обов\'язковим';
	} else if (!/^\S+@\S+\.\S+$/.test(value)) {
		error = 'Введіть коректну електронну пошту';
	}
	return error;
};

const validatePhone = (value) => {
	let error;
	if (!value) {
		error = 'Поле є обов\'язковим';
	} else if (!/^\d{12}$/.test(value)) {
		error = 'Телефон повинен складатися з 12 цифр';
	}
	return error;
};

const FormComponent = () => {
	const [submittedData, setSubmittedData] = useState(null);

	return (
			<Formik
					initialValues={{name: '', email: '', phone: ''}}
					onSubmit={(values) => {
						setSubmittedData(values);
					}}
			>
				{() => (
						<Form className="form">
							<div className="form-field">
								<label htmlFor="name">Ім'я:</label>
								<Field type="text" name="name" validate={validateName}/>
								<ErrorMessage name="name" component="div" className="error-message"/>
							</div>
							<div className="form-field">
								<label htmlFor="email">Електронна пошта:</label>
								<Field type="email" name="email" validate={validateEmail}/>
								<ErrorMessage name="email" component="div" className="error-message"/>
							</div>
							<div className="form-field">
								<label htmlFor="phone">Телефон:</label>
								<Field type="text" name="phone" validate={validatePhone}/>
								<ErrorMessage name="phone" component="div" className="error-message"/>
							</div>
							<button type="submit" className="submit-button">Відправити</button>
							{submittedData && (
									<div className="submitted-data">
										<h2>Ви ввели наступні дані:</h2>
										<p><strong>Ім'я:</strong> {submittedData.name}</p>
										<p><strong>Електронна пошта:</strong> {submittedData.email}</p>
										<p><strong>Телефон:</strong> {submittedData.phone}</p>
									</div>
							)}
						</Form>
				)}
			</Formik>
	);
};

export default FormComponent;
