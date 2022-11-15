// prettier-ignore
import {Text,View,Image,Font,StyleSheet} from '@react-pdf/renderer'

const CHeader = ({ name, ocupation, email, phone, photo64 }) => {
  Font.register({
    family: 'Bebas-Neue',
    src: '../BebasNeue-Regular.ttf',
  })
  //  Normalize phone number
  // prettier-ignore
  const styles = StyleSheet.create({
        header: {flexDirection: 'row',justifyContent: 'space-between', width: '100%'},
        name: {fontFamily: 'Bebas-Neue',fontSize: 40, color: '#0402a3'},
        headerInfo: {width: '70%', height: '100%', justifyContent: 'space-between', color: '#785e77'},
        line: {width: '100%', height: '3px', backgroundColor: '#0402a3', borderRadius: '5%'},
        photo: {width:'140px', height: '140px', borderRadius: '50%', objectFit: 'cover',},
        headerH2: {fontFamily: 'Helvetica-Bold', fontSize: 14, marginBottom: 5},
        headerText: {fontFamily: 'Helvetica' },
        textIcon: {alignItems: 'center', flexDirection: 'row', margin: '3 0'},
        icon: {width:'22px', height: '22px', marginRight: 15, marginLeft: 1},
    })

  return (
    <View style={styles.header}>
      <View style={styles.headerInfo}>
        <View style={styles.line}></View>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.headerH2}>{ocupation.toUpperCase()}</Text>
          <View style={styles.textIcon}>
            <Image style={styles.icon} src='../mail.png'></Image>
            <Text style={styles.headerText}>{email}</Text>
          </View>
          <View style={styles.textIcon}>
            <Image
              style={styles.icon}
              src='../phone-call.png'
            ></Image>
            <Text style={styles.headerText}>
              {phone.replace(/(\d{3})(\d{3})(\d{4})/, '+($1) $2-$3')}
            </Text>
          </View>
        </View>
        <View style={styles.line}></View>
      </View>
      <Image
        style={styles.photo}
        
        src={photo64 || '../avatar.png'}
      ></Image>
    </View>
  )
}

export default CHeader
