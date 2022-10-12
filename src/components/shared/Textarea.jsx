const Textarea = (props) => {
  return (
    <textarea
      className={props.className}
      placeholder={props.placeholder || ''}
      autoComplete='on'
      id={props.id}
      {...props.register(props.label, {
        ...props.validation,
        onChange: props.onChange,
      })}
      defaultValue={props.defaultValue || ''}
    ></textarea>
  );
};

export default Textarea;
