function Tile(props) {
  return (
    <button
      className='box'
      onClick={props.changeboard}
      name={props.name}
      disabled={props.value != '-' ? true : false}
    >
      {props.value}
    </button>
  );
}

export default Tile;
