import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Gap} from '../..';
import {ICStar, RateDokter1} from '../../../assets';
import {colors, fonts} from '../../../utils';

const RatedDoctor = () => {
  return (
    <View style={styles.container}>
      <View style={styles.information}>
        <Image source={RateDokter1} style={styles.avatar} />
        <Gap width={12} />
        <View>
          <Text style={styles.name}>Rani Rachel</Text>
          <Text style={styles.specialist}>Pediatrician</Text>
        </View>
      </View>
      <View style={styles.rate}>
        <ICStar />
        <ICStar />
        <ICStar />
        <ICStar />
        <ICStar />
      </View>
    </View>
  );
};

export default RatedDoctor;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  information: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
  rate: {
    flexDirection: 'row',
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  specialist: {
    fontFamily: fonts.primary.normal,
    fontSize: 12,
    color: colors.text.secondary,
  },
});
