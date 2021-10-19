import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Gap} from '../..';
import {ILCatAnak, ILCatObat, ILCatPsikiater, ILCatUmum} from '../../../assets';
import {colors, fonts} from '../../../utils';

const DoctorCategory = ({type, onPress}) => {
  const Icon = () => {
    if (type === 'dokter umum') {
      return <ILCatUmum />;
    }
    if (type === 'psikiater') {
      return <ILCatPsikiater />;
    }
    if (type === 'dokter obat') {
      return <ILCatObat />;
    }
    if (type === 'dokter anak') {
      return <ILCatAnak />;
    }
    return <ILCatUmum />;
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon />
      <Gap height={28} />
      <Text style={styles.label}>Saya butuh</Text>
      <Text style={styles.category}>{type}</Text>
    </TouchableOpacity>
  );
};

export default DoctorCategory;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: colors.cardLight,
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginRight: 10,
    width: 100,
    height: 130,
  },
  label: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.primary,
  },
  category: {
    fontFamily: fonts.primary[600],
    fontSize: 12,
    color: colors.text.primary,
  },
});
