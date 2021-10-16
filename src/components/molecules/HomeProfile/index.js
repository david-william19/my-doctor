import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {UserProfile} from '../../../assets';
import {colors, fonts} from '../../../utils';

const HomeProfile = () => {
  return (
    <View style={styles.container}>
      <Image source={UserProfile} style={styles.avatar} />
      <View>
        <Text style={styles.name}>Dinda Tanos</Text>
        <Text style={styles.profession}>UI/UX Design</Text>
      </View>
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  profession: {
    fontSize: 12,
    fontFamily: fonts.primary[600],
    color: colors.text.secondary,
  },
});
