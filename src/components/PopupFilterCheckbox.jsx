function PopupFilterCheckbox({ filter, onChange, listCheckBoxes }) {
  const filterString = listCheckBoxes?.map((str) =>
    str.toLowerCase().replaceAll(" ", "")
  );

  function isChecked(str) {
    if (str in filter) return filter[str];
    return false;
  }

  return (
    <>
      {filterString?.map((str) => (
        <label>
          <input
            type="checkbox"
            name={str}
            value={str}
            onChange={onChange}
            checked={isChecked(str)}
          />
          {str}
        </label>
      ))}
    </>
  );
}

export default PopupFilterCheckbox;
