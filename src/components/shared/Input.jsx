const Input = (props) => {
  return (
    <input
      className={props.className}
      type={props.type}
      placeholder={props.placeholder || ''}
      autoComplete='on'
      id={props.id}
      {...props.register(props.label, {
        ...props.validation,
        onChange: props.onChange,
      })}
      defaultValue={props.defaultValue || ''}
    />
  );
};

export default Input;
