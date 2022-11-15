import Input from './Input/Input'
import TextArea from './TextArea/TextArea'
import Upload from './Upload/Upload'
import Button from './Button/Button'
import StudiesButton from './StudiesButton/StudiesButton'
import { useState, useRef } from 'react'
import styles from './Form.module.scss'
import StudiesInput from './StudiesInput/StudiesInput'

const Form = ({saveDocument, }) => {
  const name = useRef()
  const email = useRef()
  const phone = useRef()
  const ocupation = useRef()
  const description = useRef()
  const [studiesItem, setstudiesItem] = useState([])
  const studies = useRef({})
  const counter = useRef(0)

  const handleStudies = ev => {
    console.log(studies.current)
    studies.current = {
      ...studies.current,
      [ev.target.name]: ev.target.value,
    }
  }

  const ListToStudies = () => {
    const contador = counter.current
    const studiesDetails = []
    for (let i = 1; i <= contador; i++) {
      console.log(counter)
      studiesDetails.push({
        name: studies.current[`name-${i}`],
        yearStart: studies.current[`start-${i}`],
        yearEnd: studies.current[`end-${i}`],
      })
    }
    console.log(studiesDetails)
    return studiesDetails
  }

  const addStudies = ev => {
    ev.preventDefault()
    setstudiesItem(prev => {
      counter.current++
      return [
        ...prev,
        <StudiesInput
          key={counter.current}
          names={`name-${counter.current}`}
          start={`start-${counter.current}`}
          end={`end-${counter.current}`}
          onChange={handleStudies}
        ></StudiesInput>,
      ]
    })
  }

  // prettier-ignore
  return (
  <form className={styles.Form} onSubmit={ev => {
        ev.preventDefault()
        const Newdata = {
          name: name.current.value,
          email: email.current.value,
          phone: phone.current.value,
          ocupation: ocupation.current.value,
          description: description.current.value,
          studies: ListToStudies({studiesValues: Object.values(studies.current)}),
          photo: ev.target.photo.files[0],
          
        }
        saveDocument(Newdata)
      }}>
      <div className={styles.grid}>
        <Input reference={name} name='Nombres' type='text' placeholder='John...'></Input>
        <Input reference={email} name='Correo' type='email' placeholder='example@hotmail.com'></Input>
        <Input reference={phone} name='Teléfono' type='number' placeholder='30000000'></Input>
        <Input reference={ocupation} name='Como me considero' type='text' placeholder='Colaborador...'></Input>
      </div>
      <section id='lista' className={styles.studiesList}>{studiesItem}<StudiesButton onClick={addStudies}></StudiesButton>
</section>
      <TextArea reference={description} name='Descripcion' placeholder='Soy una persona que..'></TextArea>
      <Upload></Upload>
      <div className='grid'>
        <Button id='download' value='Descargar'></Button>
      </div>
    </form>
  )
}
export default Form
