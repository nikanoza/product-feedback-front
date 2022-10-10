const Button = (props) => {
  return (
    <button
      type={props.type || 'button'}
      id={props.id}
      className={props.className}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
