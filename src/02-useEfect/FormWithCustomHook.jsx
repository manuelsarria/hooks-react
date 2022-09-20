import { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";
import { Message } from "./message";

export const FormWithCustomHook = () => {

	const {formState, onInputChange, onResetForm, username, email, password} = useForm ({
		username: '',
		email: '',
		password: ''
	})

	// const { username, email, password } = formState;

	useEffect(() => {
		// console.log('useEfect');
	},[]);

	useEffect(() => {
		// console.log('email change');
	},[email]);

	return (
		<>
			<h1>Formulario con customHook</h1>
			<hr />

			<input
				type='text'
				className='form-control'
				placeholder='username'
				name='username'
				value={username}
				onChange={onInputChange}
			/>

            <input
				type='email'
				className='form-control mt-2'
				placeholder='mail@mail.com'
				name='email'
				value={email}
				onChange={onInputChange}
			/>

			<input
				type='password'
				className='form-control mt-2'
				placeholder='contrasena'
				name='password'
				value={password}
				onChange={onInputChange}
			/>

			<button onClick={ onResetForm } className="btn btn-primary mt-2">Borrar</button>
		</>
	);
};
