import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {Hospital1, Hospital2, Hospital3, ILHospitalBg} from '../../assets';
import {Gap, ListHospital} from '../../components';
import {colors, fonts} from '../../utils';

const Hospitals = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={ILHospitalBg} style={styles.background}>
        <Text style={styles.title}>Nearby Hospitals</Text>
        <Gap height={6} />
        <Text style={styles.description}>3 tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ListHospital
          hospital="Rumah Sakit"
          name="Citra Bunga Merdeka"
          address="jln. Surya Sejahtera 20"
          pic={Hospital1}
        />
        <ListHospital
          hospital="Rumah Sakit Anak"
          name="Happy Family & Kids"
          address="jln. Surya Sejahtera 20"
          pic={Hospital2}
        />
        <ListHospital
          hospital="Rumah Sakit Jiwa"
          name="Tingkatan Paling Atas"
          address="jln. Surya Sejahtera 20"
          pic={Hospital3}
        />
      </View>
    </View>
  );
};

export default Hospitals;

const styles = StyleSheet.create({
  background: {
    height: 240,
    paddingTop: 30,
  },
  container: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderRadius: 20,
    marginTop: -30,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: colors.white,
    textAlign: 'center',
  },
});
