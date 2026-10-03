import { useState } from 'react';
import { CARRUSELL } from '../../constants/carrusell';
import ButtonMas from '../buttonMas/ButtonMas';
import ButtonMenos from '../buttonMenos/ButtonMenos';
import ButtonRestart from '../buttonRestart/ButtonRestart';

const Container = () => {
	const [counter, setCounter] = useState(0);
	return (
		<>
			<h1>{counter}</h1>

			<ButtonMas counter={counter} setCounter={setCounter} />
			<ButtonMenos counter={counter} setCounter={setCounter} />
			<ButtonRestart setCounter={setCounter} />

			<img src={CARRUSELL[counter].url} alt='' />
			{CARRUSELL.map((carrusel, index) => (
				<img key={index} src={carrusel.url} />
			))}
		</>
	);
};

export default Container;
