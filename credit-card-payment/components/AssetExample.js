import React , {useState} from 'react';
import { Text, View, StyleSheet, Image , TextInput , TouchableOpacity } from 'react-native';

export default function AssetExample() {
  const [cardnumber, setCardNumber] = useState('');
const [cardIsValid , setCardIsValid] = useState(true);
const [securityCode, setSecurityCode] = useState('');
const [scodeValid , setScodeValid] = useState(true);
const [date, setDate] = useState('');
const [fname, setFname] = useState('');
const [lname, setLname] = useState('');
 const emptyAll = (val) =>{
        setCardNumber('');
        setFname('');
        setLname('');
        setSecurityCode('');
        setDate('') ;
    }
  const change1 = (e) => {
    setCardNumber(e.target.value);
    setCardIsValid(false)
    if(e.target.value.length == 12){
      setCardIsValid(true);
    }
  };
  const change2 = (e) => {
    setDate(e.target.value);
  };
  const change3 = (e) => {
    setFname(e.target.value);
  };
  const change4 = (e) => {
    setLname(e.target.value);
  };
  const change5 = (e) => {
    setSecurityCode(e.target.value);
    setScodeValid(false);
    if(e.target.value.length ==4){
      setScodeValid(true);
    }
  };

  const pOpenalert=()=>{
    alert('You details are successfully submitted');
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input1}
        value ={cardnumber}
        onChange ={change1}
        placeholder="Card Number"
      />
      {!cardIsValid && <View style={styles.error}>must contains 12 digits</View>}
      <View style = {styles.twoCard}>
        <TextInput
          style={styles.input}
          value ={date}
          onChange ={change2}
          placeholder="MM/YY"
        />
        <View style={{flexDirection:'column'}}>
        <TextInput
          style={styles.input}
          value ={securityCode}
          onChange ={change5}
          placeholder="Security code"
        />
        {!scodeValid && <View style={styles.error}>must contains 4 digits</View>}
        </View>
      </View>
      
      
      <View style = {styles.twoCard}>
        <TextInput
          style={styles.input}
          value ={fname}
          onChange ={change3}
          placeholder="First name"
        />
        <TextInput
          style={styles.input}
          value ={lname}
          onChange ={change4}
          placeholder="Last name"
        />
      </View>
      <TouchableOpacity style={styles.button} onPress = {()=>  {emptyAll(cardnumber,date,fname,lname,securityCode) , pOpenalert()}}>
        <Text style={{textAlign:'center' , color:'white'}}>SUBMIT PAYMENT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  error:{
   color:'red',
   fontSize:10
  },
  input: {
    height: 40,
    margin: 12,
    width:135,
    borderWidth: 1,
    padding: 10,
  },
  input1: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  twoCard:{
    flexDirection: 'row',
  },
  button: {
    margin: 12,
    backgroundColor: 'blue',
    paddingVertical: 10,
    textAlign: 'center',
    padding: 10,
    width:300
  },
});
