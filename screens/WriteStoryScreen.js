import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, TextInput, Image } from 'react-native';
import { Header } from 'react-native-elements';
export default class WriteStoryScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      
    };
  }

  render(){
  return (
    <View style={styles.container}>
      <Header
          backgroundColor={'#24d6d3'}
          centerComponent={{ text: 'Story Hub', style: { color: '#fff' } }}
        />
        <TextInput style={styles.inputBox}
          placeholder="Story title"
          value={this.state.text}/>

          <TextInput style={styles.inputBox}
          placeholder="Author"
          value={this.state.text}/>

          <TextInput style={styles.inputBox}
          placeholder="Write your story"
          value={this.state.text} 
          multiline={true}/>

          <TouchableOpacity
          style={styles.submitButton}
          >
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
        
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  displayText:{
    fontSize: 15,
    textDecorationLine: 'underline'
  },
  submitButton:{
    backgroundColor: '#FBC02D',
    width: 100,
    height:50
  },
  submitButtonText:{
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight:"bold",
    color: 'white'
  },
  
  inputBox:{
    width: 200,
    height: 40,
    borderWidth: 1.5,
    borderRightWidth: 0,
    fontSize: 20
  },
  
});