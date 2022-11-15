import { useState } from 'react'
import styles from './Upload.module.scss'


const Upload = () => {
  const [file, setFile] = useState(null)

  return (<div className={styles.upload}>
    <label
      htmlFor='photo'
      data-form-cv-target='photo'
      className={styles.buttonPhoto}
    >
      <i className='fa fa-cloud-upload' aria-hidden='true'></i> {'Subir foto'}
    </label>
    <input
      data-form-cv-target='file'
      onChange={ev => {setFile(ev.target.files[0])}}
      id='photo'
      type='file'
      accept=".png, .jpg, .jpeg"
    ></input>
    <span data-form-cv-target='photolabel' id='photolabel'>
    {file ? file.name : 'Selecciona una foto'}
    </span>
  </div>)
}

export default Upload
