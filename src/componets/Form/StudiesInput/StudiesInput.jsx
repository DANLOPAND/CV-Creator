import styles from './StudiesInput.module.scss'

const StudiesInput = ({ names, start, end, onChange }) => {
  return (
    <label className={styles.StudiesInput}>
      {'Institución'}
      <input type='text' name={names} onChange={onChange} placeholder='Nombre de la intitucion'/>
      <div className={styles.StudiesDates}>
        <div>
        <label>{'Desde:'}</label>
          <input type='number' name={start} onChange={onChange} placeholder= '2000'/>
        </div>
        <div>
        <label>{'Hasta:'}</label>
          <input type='number' name={end} onChange={onChange} placeholder= '2000'/>
        </div>
      </div>
    </label>
  )
}

export default StudiesInput
