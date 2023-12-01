import styles from './EditableProfileCard.module.css'

const EditableProfileCard = ({
  account,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.leftColumn}>
        <div className={styles.leftColumnImageContainer}>        
          <div className={styles.leftColumnImage}>
            <img src="/profile.png" alt="profile" />
          </div>
        </div>
        <div className={styles.leftColumnButtonContainer}>
          <button className={styles.leftColumnButton} disabled={false}>
            Save new
          </button>
        </div>
      </div>

      <div className={styles.centerColumn}>
        <div className={styles.centerColumnLine}>
          <input className={styles.input} value={account.firstName} type="text" placeholder="First name" />
          <input className={styles.input} value={account.lastName} type="text" placeholder="Last name" />
        </div>

        <div className={styles.centerColumnLine} style={{paddingLeft: '5px'}}>
          <span style={{color: 'var(--link)'}}>{account.email}</span>
        </div>

        <div className={styles.centerColumnLine}>
          <input className={styles.input} value={account.phone} type="text" placeholder="Phone" />
        </div> 

        <div className={styles.centerColumnLine}>
          <span style={{'font-family': 'sans-serif', 'font-weight': 600, paddingLeft: '5px'}}>
            Bio: 
          </span>
        </div>

        <div className={styles.centerColumnLine}>
          <textarea className={styles.centerColumnBio} value={account.bio}/>
        </div>

        <div className={styles.centerColumnLine}>
          <div className={styles.centerColumnLineSave}>
            <button>Save</button>
          </div>
        </div>
      </div>

      <div className={styles.rightColumn}>
        <div className={styles.rightColumnSlug}>
          <div style={{'font-family': 'sans-serif', 'font-weight': 600, paddingLeft: '2px'}}>Link: </div>
        
          <div className={styles.rightColumnSlugLink}>projectpad.xyz/view/</div>
          <input className={styles.input} type="text" value={account.slug} />
        
          <button className={styles.rightColumnSlugButton}>
            Save
          </button>

          <br />
          <div className={styles.error}></div>

        </div> 

        <div className={styles.rightColumnLinks}>
          <div className={styles.rightColumnLink}>
            <div className={styles.rightColumnLinkIcon}>
              <img src="/profile.png" alt="" className={styles.rightColumnLinkIconImage}/>
            </div>
            <div className={styles.rightColumnLinkText}>
              <a href="https://github.com/stevensun369">stevensun369</a>
            </div>
          </div>

          <div className={styles.rightColumnLinkAdd}>
            <button>Add link</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditableProfileCard