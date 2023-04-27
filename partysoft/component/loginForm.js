import { Alert, Button, TextInput } from "react-native"
import { StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react'



const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // const handleSubmit = (email, password) =>{
    //     let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //     if (email.match(mailformat)){
    //         //send to login service
    //         Alert("Login with" +email+" "+password)
    //     }else{
    //         Alert("Invalid email")
    //     }
    // }

    // const handleEmailChange = (email) => {
    //     let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //     if (email.match(mailformat)){
    //         //send to login service
    //         Alert("Login with" +email+" "+password)
    //     }else{
    //         Alert("Invalid email")
    //     }
    // }
    // const handleEmailChange = (text) =>{
    //     setEmail(text)
    // }
    // const handlePasswordChange = (text) =>{
    //     setPassword(text)
    // }
    return (
        <View style={styles.container}>
            <TextInput
            placeholder="email"
            //onChangeText={handleEmailChange}
            >Email
            </TextInput>
            <TextInput
                Password
                placeholder="password"
            //onChangeText={handlePasswordChange}
            style={styles.passwordInput}

            >Password
            </TextInput>
            <Button
            style={styles.buttonCSS}
            title="submit test"
            //onPress={handleSubmit}
            ></Button>
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