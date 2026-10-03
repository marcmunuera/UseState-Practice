const ButtonRestart = ({ setCounter }) => {
	return <button onClick={() => restartNumero(setCounter)}>restart</button>;
};

const restartNumero = setCounter => {
	return setCounter(0);
};

export default ButtonRestart;
