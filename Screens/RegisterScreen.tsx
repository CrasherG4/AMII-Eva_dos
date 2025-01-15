import { View, Text, Alert, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../Theme/appTheme'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../Config/Config'

export default function RegisterScreen() {
  const [correo, setcorreo] = useState('')
  const [contrasenia, setcontrasenia] = useState('')
  const [usuario, setusuario] = useState('');
  const [celular, setcelular] = useState('')

  function registro() {
    if (contrasenia === '') {
      Alert.alert("Error", "La contraseña no coincide")
      return
    }
    if (!correo.includes('@')) {
      Alert.alert("Error", "Por favor ingresa un correo válido");
      return;
    }
    if (correo === '') {
      Alert.alert("Error", "El campo 'Correo' no debe estar vacío")
      return
    }
    if (usuario === '') {
      Alert.alert("Error", "El campo 'Usuario' no debe estar vacío")
      return
    }
    if (celular === '') {
      Alert.alert("Error", "El campo 'Usuario' no debe estar vacío")
      return
    }

    createUserWithEmailAndPassword(auth, correo, contrasenia)
      .then((userCredential) => {
        const user = userCredential.user
        limpiar();
        Alert.alert('¡Listo!', 'El correo ha sido creado')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        let titulo
        let mensaje

        switch (errorCode) {
          case 'auth/email-already-exists':
            titulo = 'Error en el correo'
            mensaje = 'El correo ya está en uso'
            limpiar()
            break;
          case 'auth/invalid-argument':
            titulo = 'Error'
            mensaje = 'Argumento no válido proporcionado.'
            limpiar()
            break;
          case 'auth/invalid-credential':
            titulo = 'Error inesperado'
            mensaje = 'La credencial no es válida para la acción deseada.'
            limpiar()
            break;
          default:
            titulo = 'Error'
            mensaje = 'Verificar credenciales'
            limpiar()
            break;
        }
        Alert.alert(titulo, mensaje)
      })
  }

  function limpiar() {
    setcorreo('')
    setcontrasenia('')
    setusuario('')
    setcelular('')
  }

  return (
    <View style={styles.contenedorAll}>
      <Text style={styles.h1}>Registro</Text>
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
      <TextInput
        placeholder='Ingrese el usuario'
        style={styles.input}
        onChangeText={(texto) => setusuario(texto)}
        placeholderTextColor={'#7d7d7d'}
        value={usuario}
      />
      <TextInput
        placeholder='Ingrese el celular'
        style={styles.input}
        onChangeText={(texto) => setcelular(texto)}
        placeholderTextColor={'#7d7d7d'}
        value={celular}
      />
      <TouchableOpacity onPress={() => registro()} style={styles.btnRegLog}>
        <Text style={{...styles.wbtnLRtxt, color:'white'}}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  )
}