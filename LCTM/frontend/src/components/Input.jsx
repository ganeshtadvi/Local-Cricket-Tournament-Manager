const InputSection = (props) => {
  return (
    <>
      <label>{props.label}</label>
      <input type={props.type} />
    </>
  );
};

export default InputSection;

