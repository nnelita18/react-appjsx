import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';

const EjemploUno = () => {
	const {register, errors, handleSubmit} = useForm();
    const [Entradas, setEntradas] = useState([]);
    const onSubmit = (data, e) => {
        console.log(data);
        setEntradas([
            ...Entradas,
            data
        ])
        e.target.reset();
    }

	return (
		<Fragment>
			<h1>Ejemplo #1</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <input
                    name="titulo"
                    type="text"
                    className="form-control"
                    placeholder="Titulo"
                    ref={
                    register({
                        required: {value: true, message: 'Campo obligatorio'},
                        minLength: {value: 2, message: 'Minimo 2 letras'}
                        })
                    }
                    ></input>
                    { errors.titulo &&
                        <span className="text-danger text-small d-block mb-2">
                            {errors.titulo.message}
                        </span> }

                </div>
                <div className="form-group">
                    <input
                    name="description"
                    type="text"
                    className="form-control"
                    placeholder="Description"
                    ref={
                    register({
                        required: {value: true, message: 'Campo obligatorio'}
                        })
                    }
                    ></input>
                    { errors.description &&
                        <span className="text-danger text-small d-block mb-2">
                            {errors.description.message}
                        </span> }
                </div>
                <button type="submit" className="btn btn-primary">Agregar</button>
            </form>

            <ul>
                {
                    Entradas.map(item =>
                        <li>{item.titulo} - {item.description}</li>
                    )
                }
            </ul>
		</Fragment>
	);
}

export default EjemploUno;
