import { useEffect, useState } from "react";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
		username: 'manuel',
		email: 'manuel@mail.com'
	})

	const {username, email} = formState;

	const onInputChange = ({target}) => {

		const {name, value} = target;
		setFormState({
			...formState,
			[ name ]: value
		})
	}

	useEffect(() => {
		console.log('useEfect');
	});

	return (
		<>
			<h1>Formulario sencillo</h1>
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
		</>
	);
};
