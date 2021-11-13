import './Button.css';

function Button({ onClick, title }) {
  return (
    <div className="yellowButton" onClick={onClick}>
      <p className="buttonText">{title}</p>
    </div>
  )
}

export default Button;