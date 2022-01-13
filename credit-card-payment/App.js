import React ,{ useState ,submitHandler} from 'react';
import { Text, View, StyleSheet , TextInput , TouchableOpacity  } from 'react-native';
import Constants from 'expo-constants';
import Asset from './components/AssetExample'

export default function App() {
  return (
    <View style={styles.container}>
    <View style={styles.homeHeader}>
    <Text style={styles.headerTextCollectionsImages}>CREDIT CARD PAYMENT</Text>
    </View>
      <Asset />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
    padding: 8,
  },
  headerTextCollectionsImages: {
    fontSize: 25,
    height:40,
    textAlign: 'center',
    color:'white',
    textAlignVertical: 'center',
  }, 
  homeHeader:{
    borderBottomWidth:2,
    backgroundColor:'purple',
    borderBottomColor:'gray'
  }
});
