import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Gap, Header} from '../../components';
import {
  ICEditProfile,
  ICHelpCenter,
  ICLanguage,
  ICRate,
  UserProfile,
} from '../../assets';
import {colors, fonts} from '../../utils';

const Profile = () => {
  return (
    <View style={styles.page}>
      <Header title="Profile" />
      <Gap height={40} />
      <View style={styles.container}>
        <View style={styles.wrapperImage}>
          <Image source={UserProfile} style={styles.image} />
        </View>
        <Gap height={16} />
        <Text style={styles.name}>Shayna Melinda</Text>
        <Text style={styles.profession}>Product Designer</Text>
      </View>
      <ICEditProfile />
      <Text style={styles.title}>Edit Profile</Text>
      <Text style={styles.subTitle}>Last updated yesterday</Text>
      <ICLanguage />
      <ICRate />
      <ICHelpCenter />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  wrapperImage: {
    width: 130,
    height: 130,
    backgroundColor: colors.white,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
  },
  image: {
    width: 110,
    height: 110,
  },
  name: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  profession: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
  },
  container: {
    alignItems: 'center',
    flex: 1,
  },
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
