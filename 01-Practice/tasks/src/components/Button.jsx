/**
 * It's a function that takes in a text, color, and onClick property and returns a button with the
 * text, color, and onClick property.
 * @returns A button with a background color of the color prop, and the text of the text prop.
 */
const Button = ({text, color, onClick }) => {

    
    return (
      <button onClick={onClick} style={{background: color}}  className='btn' >{text}</button>
      
    )
  }
  
  export default Button