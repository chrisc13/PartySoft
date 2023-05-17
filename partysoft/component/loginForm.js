import { Alert, Button, TextInput } from "react-native"
import { StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';
import authservice from '../api/authservice';


const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // const { data, isLoading, error } = authservice("", {
    //     query: "",
    //     num_pages: "",
    //   });
    const { data, isLoading, error } = authservice();

    const handleSubmit = () =>{

        const mailformat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const passwordFormat = password.length > 6 ;

        if (mailformat.test(email) && passwordFormat){
            console.log("Valid Inputs")
        }else{
            console.log("Invalid Email")
            Alert.alert("Invalid Email or Password. Please try again")
        }

        // send it to backend
        console.log(isLoading)
        console.log(data)
    }
    const handleEmailChange = (text) =>{
        setEmail(text)
    }
    const handlePasswordChange = (text) =>{
        setPassword(text)
    }
    return (
        <View style={styles.container}>
            <TextInput placeholder="email" onChangeText={handleEmailChange}>Email</TextInput>
            <TextInput placeholder="password" onChangeText={handlePasswordChange} style={styles.passwordInput}>Password</TextInput>
            <Button style={styles.buttonCSS} title="submit test" onPress={handleSubmit}></Button>
        </View>
    )

}

const styles = StyleSheet.create({
    container :{
        backgroundColor: 'grey',
        //flex: 2,
        alignContent: 'center',
        textAlign: 'center',
        //flexDirection: 'column'
      },
    emailInput: {
        //flex: 1,
        fontSize: 20,
        backgroundColor: 'grey',
        alignItems: 'center',
        borderWidth: 1,
        justifyContent: 'center',
        height: 60,
        padding: 15, 
        textAlign: 'center'
    }, 
    passwordInput: {
        backgroundColor: 'green',
        textAlign: 'center',
        //flex: 1,
        fontSize: 20,
        height: 60,
        padding: 15, 
    }, 
    buttonCSS: {
        //flex: 1
    }
  });

export default LoginForm