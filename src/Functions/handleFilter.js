export default function handleFilter(e, type, dispatch) {
  const inputName = e.target.value;
  const inputStatus = e.target.checked;

  dispatch({ type, payload: { inputName, inputStatus } });
}
