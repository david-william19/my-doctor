import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ICNext} from '../../../assets';
import {colors, fonts} from '../../../utils';

const ListDoctor = ({name, desc, picture, type}) => {
  return (
    <View style={styles.container}>
      <Image source={picture} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.chat}>{desc}</Text>
      </View>
      {type === 'next' && <ICNext />}
    </View>
  );
};

export default ListDoctor;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    padding: 16,
  },
  content: {
    flex: 1,
  },
  image: {
    width: 46,
    height: 46,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
  },
  chat: {
    fontFamily: fonts.primary[300],
    fontSize: 12,
    color: colors.text.secondary,
  },
});
