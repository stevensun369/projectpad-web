import styles from './Textarea.module.css'


const Textarea = ({defaultValue, value, setValue, placeholder}) => {
  return (
    <>
      <textarea 
        className={
          defaultValue === value 
            ? styles.textarea 
            : styles.textareaChanged
        } value={value} 
        type="text" placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)} 
      />
    </>
  );
}

export default Textarea