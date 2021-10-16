import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ICAddPhoto, ILNullPhoto} from '../../assets';
import {Button, Gap, Header, Link} from '../../components';
import {colors, fonts} from '../../utils';

const index = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Upload Photo" icon="back-dark" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <View style={styles.profile}>
          <View style={styles.avatarWrapper}>
            <Image source={ILNullPhoto} style={styles.avatar} />
            <ICAddPhoto style={styles.addPhoto} />
          </View>
          <Text style={styles.name}>David William Da Costa</Text>
          <Text style={styles.profession}>Mobile Developer</Text>
        </View>
        <View>
          <Button title="Upload and Continue" />
          <Gap height={30} />
          <Link title="Skip for this" align="center" />
        </View>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  avatar: {
    width: 100,
    height: 100,
  },
  avatarWrapper: {
    width: 115,
    height: 115,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 115 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    paddingHorizontal: 40,
    paddingBottom: 40,
    flex: 1,
    justifyContent: 'space-between',
  },
  addPhoto: {
    position: 'absolute',
    bottom: 3,
    right: 0,
  },
  name: {
    fontWeight: fonts.primary[600],
    fontSize: 22,
    color: colors.text.primary,
  },
  profession: {
    color: colors.text.secondary,
  },
  profile: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
