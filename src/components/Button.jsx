import styles from './Button.module.css';

const Button = ({text, onClick, loading, disabled}) => {
  return (
    <>
      {loading ? 
        <button
          className={styles.buttonLoading}
          disabled={true}
        >
          <div className={styles.buttonLoadingImg}>
            <img src="loading.gif" alt="" />
          </div>
          <div className={styles.buttonText}>
            {text}
          </div>
        </button>
      : 
        <button
          className={styles.button}
          onClick={!disabled ? onClick : () => {}}
          disabled={disabled}
        >
          <div className={styles.buttonLoadingImg} style={{width: 0}}>
          </div>
          <div className={styles.buttonText}>
            {text}
          </div>
        </button>
      }
    </>
  )
}

export default Button