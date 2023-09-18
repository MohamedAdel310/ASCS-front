function PopupFilterCheckbox({ filter, onChange }) {
  const filterString = filter?.map((str) =>
    str.toLowerCase().replaceAll(" ", "")
  );

  return (
    <>
      {filterString?.map((str) => (
        <label>
          <input type="checkbox" name={str} value={str} onChange={onChange} />
          {str}
        </label>
      ))}
    </>
  );
}

export default PopupFilterCheckbox;
