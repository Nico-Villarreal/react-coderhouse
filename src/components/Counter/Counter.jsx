const Counter = ({ counter, setCounter, stock }) => {
  const onAdd = () => {
    if (stock === counter) {
      alert("No hay mas productos en stock");
      return;
    }
    setCounter(counter + 1);
  };
  const putOff = () => {
    if (counter === 0) {
      return;
    }
    setCounter(counter - 1);
  };

  return (
    <div className="d-flex border border-dark rounded bg-light justify-content-center aling-items-center">
      <button className="m-2 p-2 rounded fw-bolder" onClick={putOff}>
        -
      </button>
      <span className="mt-3 mx-2 fw-bolder">{counter}</span>
      <button className="m-2 p-2 rounded fw-bolder" onClick={onAdd}>
        +
      </button>
    </div>
  );
};

export default Counter;
