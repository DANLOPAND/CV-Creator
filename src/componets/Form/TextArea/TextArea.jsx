import styles from './TextArea.module.scss'

const TextArea = ({ reference, name, placeholder }) => {
  return (
    <label className={styles.TextArea}>
      {name}
      <textarea ref={reference} placeholder={placeholder} />
    </label>
  )
}

export default TextArea
