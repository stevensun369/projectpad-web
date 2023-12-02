import styles from './Input.module.css'


const Input = ({defaultValue, value, setValue, placeholder, error = false}) => {
  return (
    <>
      <input 
        className={
          error ? styles.inputError
            : defaultValue !== value ? styles.inputChanged : styles.input
        } value={value} 
        type="text" placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)} 
      />
    </>
  );
}

export default Input