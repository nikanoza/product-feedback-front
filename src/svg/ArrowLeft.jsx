const ArrowLeft = (props) => {
  return (
    <svg width='7' height='10' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M6 9L2 5l4-4'
        stroke={props.color}
        strokeWidth='2'
        fill='none'
        fillRule='evenodd'
      />
    </svg>
  );
};

export default ArrowLeft;
