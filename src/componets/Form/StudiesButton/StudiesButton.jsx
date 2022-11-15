import styles from './StudiesButton.module.scss'

const StudiesButton = (onClick) => {
    return (
        <div className={styles.studiesButton}>
            <label><input type='button' onClick={onClick.onClick} value='+'></input> Agregar estudios</label>
        </div>
    );
}

export default StudiesButton