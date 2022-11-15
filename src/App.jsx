import Form from './componets/Form/Form'
import Curriculum from './componets/Curriculum/Curriculum'
import { useState , useEffect } from 'react'
import { pdf } from '@react-pdf/renderer'

const App = () => {
  // prettier-ignore
  const [data, setData] = useState({ name: '', email: '', phone: '', ocupation: '', description: '', studies: [], photo: null, photo64: null })
  const [show, setShow] = useState(true)


  const printPDF = () => {
    const obj = pdf(<Curriculum data={data} />).toBlob();
    obj.then(function(blob) {
      const url = URL.createObjectURL(blob);
      window.open(url, '_blank');
    });
  }

  const saveDocument = newData => {
    if (newData.photo) {
      const reader = new FileReader()
      reader.readAsDataURL(newData.photo)
      reader.onloadend = () => {
        setData({ ...newData, photo64: reader.result })
        
      }
    } else {
      setData(newData)
    }
  }
  
  useEffect(() => {
    printPDF()
  }, [data])

  return (
    <main>
      <section className='FormPage' hidden={!show}>
        <h1>CREA TU HOJA DE VIDA</h1>
        <Form saveDocument={saveDocument} statePDF={setShow}></Form>
      </section>
      <section className='PDFpage' hidden={show}>
        <input className='back' type="button" value="volver" onClick={setShow}/>
      </section>
    </main>
  )
}

export default App
