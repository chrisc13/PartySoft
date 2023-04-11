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
    const handleEmailChange = (text) =>{
        setEmail(text)
    }
    const handlePasswordChange = (text) =>{
        setPassword(text)
    }
    return (
        <View style={styles.container}>
            <View style={styles.emailInput}>
                <TextInput
                placeholder="email"
                onChangeText={handleEmailChange}
                style={styles.emailDiv}
                >Email
                </TextInput>
            </View>
            <TextInput
                Password
                placeholder="password"
            onChangeText={handlePasswordChange}
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

    emailInput: {
        flex: 1,
        fontSize: 20,
        // backgroundColor: 'red',
        alignItems: 'center',
        borderWidth: 1,
        justifyContent: 'center'
    }, 
    emailDiv: {
        height: '10%',
        width: '80%',
        backgroundColor: 'red',
        textAlign: 'center'
    },
    passwordInput: {
        backgroundColor: 'green',
        textAlign: 'center',
        flex: 1,
        fontSize: 20
    }, 
    buttonCSS: {
        flex: 3
    },
    container :{
        backgroundColor: 'grey',
        flex: 1,
        alignContent: 'center',
        textAlign: 'center',
        flexDirection: 'column'
  
      },
  });

export default LoginForm