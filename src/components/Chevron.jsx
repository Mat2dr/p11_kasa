import chevron from '../utils/chevron.png';

function Chevron(props) {
  return (
    <div className={props.className}>
        <img src={chevron} alt="chevron" />
    </div>
  )
}

export default Chevron