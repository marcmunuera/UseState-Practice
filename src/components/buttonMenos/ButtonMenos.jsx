const ButtonMenos = ({ counter, setCounter }) => {
	return (
		<button onClick={() => bajarNumero(counter, setCounter)}>bajar</button>
	);
};

const bajarNumero = (counter, setCounter) => {
	if (counter <= 0) {
		return setCounter(2);
	}
	setCounter(counter - 1);
};
export default ButtonMenos;
