import React, { Fragment } from 'react';

const Saludo = (props) => {
	return(
		<Fragment>
			<h2>Hola! {props.person}</h2>
		</Fragment>
	);
}

export default Saludo;