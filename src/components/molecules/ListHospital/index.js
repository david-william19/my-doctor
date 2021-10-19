import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Gap} from '../..';
import {colors, fonts} from '../../../utils';

const ListHospital = ({name, hospital, address, pic}) => {
  return (
    <View style={styles.container}>
      <Image source={pic} style={styles.picture} />
      <Gap width={16} />
      <View>
        <Text style={styles.title}>{hospital}</Text>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.address}>{address}</Text>
      </View>
    </View>
  );
};

export default ListHospital;

const styles = StyleSheet.create({
  picture: {
    borderRadius: 15,
    width: 80,
    height: 60,
  },
  container: {
    flexDirection: 'row',
    padding: 13,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.black,
  },
  address: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
    marginTop: 4,
  },
});
