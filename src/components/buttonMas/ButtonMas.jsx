const ButtonMas = ({ counter, setCounter }) => {
	return (
		<button onClick={() => subirNumero(counter, setCounter)}>subir</button>
	);
};

const subirNumero = (counter, setCounter) => {
	if (counter >= 2) {
		return setCounter(0);
	}
	setCounter(counter + 1);
};
export default ButtonMas;
