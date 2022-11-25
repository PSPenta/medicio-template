import './FormInput.css';

function FormInput(props) {
  return (
    <div className={'form-input'}>
      <label htmlFor={props.formField}>{props.label}</label>
      <input type={props.inputType} name={props.formField} id={props.formField} />
    </div>
  );
}

export default FormInput;
