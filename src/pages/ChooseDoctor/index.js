import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  DummyDoctor5,
  DummyDoctor2,
  DummyDoctor3,
  DummyDoctor4,
  DummyDoctor1,
} from '../../assets';
import {Header, ListDoctor} from '../../components';
import {colors} from '../../utils';

const ChooseDoctor = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title="Pilih Dokter Anak"
        type="dark"
        onPress={() => navigation.goBack()}
      />
      <ListDoctor
        type="next"
        picture={DummyDoctor1}
        name="Alexandria Jenie"
        desc="wanita"
      />
      <ListDoctor
        type="next"
        picture={DummyDoctor2}
        name="Franco Mario"
        desc="pria"
      />
      <ListDoctor
        type="next"
        picture={DummyDoctor3}
        name="Nia Marisa"
        desc="wanita"
      />
      <ListDoctor
        type="next"
        picture={DummyDoctor4}
        name="Jajang Sutisna"
        desc="pria"
      />
      <ListDoctor
        type="next"
        picture={DummyDoctor5}
        name="Sani Elvira"
        desc="wanita"
      />
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
