import React, { useState } from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signOutWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../services/firebaseConnection"

export default function Home() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function createUser() {
        await createUserWithEmailAndPassword(auth, email, password)
        .then(value => {
            console.log('Mecânico cadastrado com sucesso.\nUID do usuário: ' + value.user.uid)
        })
        .catch(error => console.log(error))
    }

    async function login() {
        await signInWithEmailAndPassword(auth, email, password)
        .then(value => {
            console.log('Logado com sucesso.')
        })
        .catch(error => console.log(error))
    }

    async function logout() {
        await signOut(auth)
        .then(() => {
            console.log('Usuário deslogado com sucesso.')
        })
        .catch(error => console.log(error))
    }

    return (
        <View style={styles.container}>
            <Text>Firebase App</Text>

            <TextInput 
            placeholder="email"
            placeholderTextColor="#313131"
            value={email}
            onChangeText={value => setEmail(value)}
            style={[styles.input, {marginBottom: 10}]}
            />

            <TextInput 
            placeholder="senha"
            placeholderTextColor="#313131"
            value={password}
            onChangeText={value => setPassword(value)}
            style={[styles.input, {marginBottom: 10}]}
            />


            <Button
                title="ENTRAR"
                onPress={() => login()}
            />

            <Button
                title="SAIR"
                onPress={() => logout()}
            />

            <Button
                title="CADASTRAR"
                onPress={() => createUser()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: "#313131",
        marginTop: 5,
        width: '80%',
        heigth: 50
    }
})