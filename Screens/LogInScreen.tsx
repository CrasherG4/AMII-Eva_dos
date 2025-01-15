import { View, Text, TextInput, Alert, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../Theme/appTheme'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../Config/Config'

export default function LogInScreen({navigation} : any) {
  const [correo, setcorreo] = useState('')
  const [contrasenia, setcontrasenia] = useState('')
  const [ver, setver] = useState(false)

  const defaultImage = 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-profile-picture-male-icon.png'

  function login() {
    signInWithEmailAndPassword(auth, correo, contrasenia)
      .then((userCredential) => {
        const user = userCredential.user;
        navigation.navigate('Welcome')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        let titulo
        let mensaje

        switch (errorCode) {
          case 'auth/wrong-password':
            titulo = 'Error en la contrasenia'
            mensaje = 'Contraseña incorrecta. Verificar'
            limpiar()
            break;
          case 'auth/user-not-found':
            titulo = 'Usuario no encontrado'
            mensaje = 'Por favor verificar el email ingresado'
            limpiar()
            break;
          case 'auth/internal-error':
            titulo = 'Error interno'
            mensaje = 'Error inesperado del servidor de autenticación.'
            limpiar()
            break;
          default:
            titulo = 'Error'
            mensaje = 'Verificar credenciales'
            limpiar()
            break;
        }

        Alert.alert(titulo, mensaje)
      });
  }

  function limpiar() {
    setcontrasenia('')
    setcorreo('')
  }

  return (
    <View style={styles.contenedorAll}>
      <Text style={styles.h1}>Login</Text>
      <Image source={{ uri: defaultImage }} style={styles.imgLogReg}/>
      <TextInput
        placeholder='Ingrese el correo'
        style={styles.input}
        onChangeText={(texto) => setcorreo(texto)}
        placeholderTextColor={'#7d7d7d'}
        value={correo}
      />
      <TextInput
        placeholder='Ingrese la contraseña'
        style={styles.input}
        onChangeText={(texto) => setcontrasenia(texto)}
        placeholderTextColor={'#7d7d7d'}
        value={contrasenia}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Registro')}>
        <Text>¿No tienes cuenta? ¡Crea una aquí!</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnRegLog} onPress={() => login()}>
        <Text style={{...styles.wbtnLRtxt, color:'white'}}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}