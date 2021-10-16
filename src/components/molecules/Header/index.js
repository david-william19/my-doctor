import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap} from '../..';
import {colors, fonts} from '../../../utils';

const Header = ({title, onPress}) => {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="back-dark" onPress={onPress} />
      <Text style={styles.text}>{title}</Text>
      <Gap width={24} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  text: {
    color: colors.text.primary,
    fontSize: 20,
    flex: 1,
    textAlign: 'center',
    fontFamily: fonts.primary[600],
  },
  container: {
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
