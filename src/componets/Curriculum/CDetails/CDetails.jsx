import {
  Text,
  View,
  Font,
  StyleSheet,
} from '@react-pdf/renderer'

const CDetails = ({ description, studies }) => {
  Font.register({
    family: 'Bebas-Neue',
    src: '../src/assets/BebasNeue-Regular.ttf',
  })

  const styles = StyleSheet.create({
    section: { fontSize: 25, fontFamily: 'Bebas-Neue', color: '#0402a3', margin: '20 0 0 0' },
    h2: { fontSize: 20, fontFamily: 'Bebas-Neue', color: '#0402a3'},
    p: { fontSize: 12, fontFamily: 'Helvetica', color: '#000000' },
    study: { margin: '0 0 15 15' },
    years: { flexDirection: 'row'},
    main: { flexDirection: 'column' },
    divLine: { width: '100%', height: '2px', backgroundColor: '#000', borderRadius: '5%', margin: '10 0' },
    bold: { fontFamily: 'Helvetica-Bold' },
  })

  return (
    <View>
      <View style={styles.section}>
        <Text>{'Sobre mi'}</Text>
        <Text style={styles.p}>{description}</Text>
      </View>
      <View style={styles.section}>
        {studies.length > 0 && (<View><View style={styles.divLine}></View><Text >Estudios</Text></View> )}
        {studies.map(study => {
            const counter = studies.indexOf(study)
          return (
            <View style={styles.study} key={`study- ${counter}`}>
              <Text style={styles.h2}>{study.name}</Text>
              <View style={styles.years}>
                <Text style={styles.p}>Desde el año: <Text style={styles.bold}>{study.yearStart}</Text></Text>
                <Text style={styles.p}>  {' - Hasta el año:'} <Text style={styles.bold}>{study.yearEnd}</Text></Text>
              </View>
            </View>
          )
        })}
      </View>
    </View>
  )
}

export default CDetails
