import './CheckBox.css';

const CheckBox = ({id, checked, onChange}) => {
  return (
    <div className="round">
      <input
        type="checkbox"
        aria-checked={checked}
        checked={checked}
        id={id}
        onChange={onChange}
      />
      <label htmlFor={id}></label>
    </div>
  );
};

export default CheckBox;
