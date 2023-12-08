import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, TextInput } from 'react-native';
import React, { useEffect } from 'react';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { PrimaryButton } from '../../components';
import CApi from '../../lib/CApi';
import { clearAccount, setAccountEmail, setAccountName, setAccountPassword, setAccountType } from '../../store/reducer/accoutSlice';

function AccountScreen({ navigation, route }) {
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();

  useEffect(() => {
    // Set account_type value when 'selecttype' changes in route.params
    if (route.params && route.params.selecttype) {
      dispatch(setAccountType(route.params.selecttype));
    }
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={{ marginLeft: 5, marginRight: 10 }}
          onPress={() => {
            navigation.navigate('Home');
            dispatch(clearAccount());
          }}
        >
          <MaterialCommunityIcons name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
  }, [navigation, route.params, dispatch]);

  const submitAccount = async () => {
    if (account.account_type == '' || account.account_name == '' || account.email == '' || account.account_password == '') {
      alert('Form di isi tidak lengkap');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(account.email)) {
      alert('Email is in valid.');
      return;
    }
    try {
      const body = {
        dataSource: 'Cluster0',
        database: 'puppet_uas',
        collection: 'account',
        document: account,
      };
      const response = await CApi.post('/action/insertOne', body);
      if (response) {
        alert('Akun Baru Berhasil dibuat');
        dispatch(clearAccount());
      }
    } catch (error) {
      console.error('error', error);
      alert(error.message);
    }
  };

  return (
    <SafeAreaView style={style.safeArea}>
      <ScrollView>
        <View style={[style.container]}>
          <View style={[style.row]}>
            <View>
              <Text style={style.JudulText}>Account Type</Text>
            </View>
          </View>
          <View style={[style.row]}>
            <TextInput
              style={[style.input, { marginTop: 10, width: 200, backgroundColor: '#f0eded' }]}
              value={account.account_type}
              onChangeText={(val) => dispatch(setAccountType(val))}
              placeholder="Account Type"
              editable={false}
            />
            <PrimaryButton
              style={{ marginLeft: 10, marginTop: 10, backgroundColor: '#fca503', width: 100 }}
              onPress={() => navigation.navigate('Select')}
              title="Select"
            />
          </View>
          <View style={[style.row, { marginTop: 15 }]}>
            <View>
              <Text style={style.JudulText}>Account Name</Text>
              <TextInput
                style={[style.input, { marginTop: 10 }]}
                value={account.account_name}
                onChangeText={(val) => dispatch(setAccountName(val))}
                placeholder="Input Account Name"
              />
            </View>
          </View>
          <View style={[style.row, { marginTop: 15 }]}>
            <View>
              <Text style={style.JudulText}>Email</Text>
              <TextInput
                style={[style.input, { marginTop: 10 }]}
                value={account.email}
                onChangeText={(val) => dispatch(setAccountEmail(val))}
                placeholder="Input Email"
              />
            </View>
          </View>
          <View style={[style.row, { marginTop: 15 }]}>
            <View>
              <Text style={style.JudulText}>Password</Text>
              <TextInput
                style={[style.input, { marginTop: 10 }]}
                value={account.account_password}
                onChangeText={(val) => dispatch(setAccountPassword(val))}
                placeholder="Input Password"
              />
            </View>
          </View>
          <PrimaryButton style={{ marginTop: 40, backgroundColor: '#fca503' }} title="Save Data" onPress={submitAccount} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    margin: 35,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  JudulText: {
    flexDirection: 'column',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 5,
    color: '#000000',
  },
  input: {
    flexDirection: 'column',
    width: 310,
    height: 40,
    borderWidth: 1,
    fontWeight: 'bold',
    borderRadius: 10,
    padding: 10,
    paddingLeft: 15,
    borderColor: '#b2b8b4',
    backgroundColor: '#ffffff',
  },
});

export default AccountScreen;
