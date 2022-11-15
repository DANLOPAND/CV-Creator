import styles from './Input.module.scss'

const Input = ({reference, name, type, placeholder, pattern }) => {
  // prettier-ignore
  return (
    <label className={styles.Input}>
      {name}
      <input ref={reference} type={type} placeholder={placeholder} pattern={'' || pattern}
      />
    </label>
  )
}

export default Input
