import { useEffect, useState } from 'react'
import Input from './Input'
import Textarea from './Textarea'
import Button from './Button'

import styles from './EditableProfileCard.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { checkSlug, changeSlug, changeAccount } from '../actions/accountFieldActions'

const EditableProfileCard = () => {
  const dispatch = useDispatch();
  const account = useSelector((state) => state.account)

  const [firstName, setFirstName] = useState(account.firstName);
  const [lastName, setLastName] = useState(account.lastName);
  const [phone, setPhone] = useState(account.phone)
  const [bio, setBio] = useState(account.bio)
  const [slug, setSlug] = useState(account.slug)
  
  const [formChanged, setFormChanged] = useState(false)

  useEffect(() => {
    setFormChanged( 
      firstName !== account.firstName ||
      lastName !== account.lastName || 
      phone !== account.phone ||
      bio !== account.bio
    );
  }, [
    formChanged,
    firstName,
    lastName,
    phone,
    bio,
    account
  ])

  return (
    <div className={styles.card}>
      <div className={styles.leftColumn}>
        <div className={styles.leftColumnImageContainer}>        
          <div className={styles.leftColumnImage}>
            <img src="/profile.png" alt="profile" />
          </div>
        </div>
        <div className={styles.leftColumnButtonContainer}>
          <button className={styles.leftColumnButton} disabled={true}>
            Save image
          </button>
        </div>
      </div>

      <div className={styles.centerColumn}>
        <div className={styles.centerColumnLine}>
          <div style={{width: '40%', float: 'left', marginRight: '15px'}}>
            <Input 
              defaultValue={account.firstName}
              value={firstName} 
              setValue={setFirstName}
              placeholder="First Name"
            />
          </div>
          <div style={{width: '40%', float: 'left'}}>
            <Input 
              defaultValue={account.lastName}
              value={lastName} 
              setValue={setLastName}
              placeholder="Last Name"
            />
          </div>
        </div>

        <div className={styles.centerColumnLine} style={{paddingLeft: '5px'}}>
          <span style={{color: 'var(--link)'}}>{account.email}</span>
        </div>

        <div className={styles.centerColumnLine}>
          <Input 
            defaultValue={account.phone}
            value={phone} 
            setValue={setPhone}
            placeholder="Last Name"
          />
        </div> 

        <div className={styles.centerColumnLine}>
          <span style={{fontFamily: 'sans-serif', fontWeight: 500, paddingLeft: '5px'}}>
            Bio: 
          </span>
        </div>

        <div className={styles.centerColumnLine}>
          <Textarea 
            defaultValue={account.bio}
            value={bio} 
            setValue={setBio}
            placeholder="Last Name"
          />
        </div>

        <div className={styles.centerColumnLine}>
          <div className={styles.centerColumnLineSave}>
            <Button loading={account.loading && formChanged} disabled={!formChanged} onClick={() => {
              dispatch(changeAccount(
                account.token, 
                firstName, 
                lastName, 
                phone, bio
              ));
            }} text="Save"/>
          </div>
        </div>
      </div>

      <div className={styles.rightColumn}>
        <div className={styles.rightColumnSlug}>
          <div style={{fontFamily: 'sans-serif', fontWeight: 500, paddingLeft: '2px'}}>Link: </div>
        
          <div className={styles.rightColumnSlugLink}>projectpad.xyz/view/</div><br />
          <div style={{float: 'left', width: '40%', marginRight: '22px'}}>
            <Input 
              defaultValue={account.slug}
              value={slug} 
              setValue={(slug) => {
                dispatch(checkSlug(account.token, slug));
                setSlug(slug);
              }}
              placeholder="Last Name"
            />
          </div>
        
          <div style={{float: 'left'}}>
            <Button 
              text="Save"
              onClick={() => {
                dispatch(changeSlug(account.token, slug));
              }}
              loading={account.loading && account.slug !== slug}
              // loading={false}
              disabled={account.slug === slug}
            />
          </div>

          <br />
          <div className={styles.error}>{slug !== '' ?? account.errorMessage}</div>

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