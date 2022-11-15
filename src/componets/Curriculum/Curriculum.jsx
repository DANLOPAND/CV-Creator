// prettier-ignore
import CHeader from './CHeader/CHeader'
import CDetails from './CDetails/CDetails'
import {Page,View,Document,StyleSheet} from '@react-pdf/renderer'

// Create styles
const Curriculum = ({ data }) => {
  const styles = StyleSheet.create({
    page: {flexDirection: 'column',fontSize: 12, width: '100px',height: '100PX', fontFamily: 'Helvetica',},
    main : {margin: '25 30'},
})


  // prettier-ignore
  return (
    <Document>
      <Page size='A4' style={styles.page}>
        <View style={styles.main}>
          <CHeader name={data.name} ocupation={data.ocupation} email={data.email} phone={data.phone} photo64={data.photo64}> </CHeader>
          <CDetails description={data.description} studies={data.studies}></CDetails>
        </View>
      </Page>
    </Document>
  )
}
export default Curriculum
