import React, {Fragment, useState} from 'react';

const Formulario = () => {
	const [datos, setDatos] = useState({
		nombre: '',
		apellido: ''
	});
	const handleInputChange = (event) => {
		console.log(event.target.value)
		setDatos({
			...datos,
			[event.target.name]: event.target.value
		})
	}

	const enviarDatos = (event) => {
		event.preventDefault();
		console.log(datos.nombre + ' ' + datos.apellido)
	}

	return (
		<Fragment>
			<h1>Formulario</h1>
			<form className="row" onSubmit={enviarDatos}>
			  <div className="form-group">
			    <input
			    	type="text"
			    	className="form-control"
			    	placeholder="Ingrese Nombre"
			    	name="nombre"
			    	onChange={handleInputChange}>
			    </input>
			  </div>
			  <div className="form-group">
			    <input
			    	type="text"
			    	className="form-control"
			    	placeholder="Ingrese Apellido"
			    	name="apellido"
			    	onChange={handleInputChange}>
			    </input>
			  </div>
			  <button type="submit" className="btn btn-primary">Submit</button>
			</form>

			<h3>{datos.nombre} - {datos.apellido}</h3>
		</Fragment>
	);
}

export default Formulario;