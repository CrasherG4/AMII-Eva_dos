import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from '../Theme/appTheme'

//firebase
import { ref, set } from 'firebase/database'
import { db } from '../Config/Config'

export default function OperacionesScreen() {

  const [id, setid] = useState('')
  const [monto, setmonto] = useState(0)
  const [tipo, settipo] = useState('')
  const [comentario, setcomentario] = useState('')

  function guardar() {
    if(monto >= 500){
      Alert.alert('¿Desea continuar?', 'Monto mayor a 500$')
    }
    else if(monto === 0){
      Alert.alert('Monto igual a 0', 'El monto no puede ser igual a 0')
      return;
    }
    else if(monto < 0){
      Alert.alert('Monto negativo', 'El monto no puede tener valores negativos')
      return;
    }

    set(ref(db, 'operaciones/' + id), {
      monto: monto,
      tipo: tipo,
      comentario: comentario
    })
      .then(() => {
        Alert.alert('¡Listo!', 'Operación registrada con éxito')
      })
      .catch((error) => {
        Alert.alert('¡Hubo un error!', error)
      });
    limpiar()
  }

  function limpiar() {
    setid('')
    setmonto(0)
    settipo('')
    setcomentario('')
  }

  useEffect(()=>{
    if(Number.isNaN(monto)){
      setmonto(0)
    }
  })

  return (
    <View style={styles.contenedorAll}>
      <Text style={styles.h1}>Operaciones</Text>
      <TextInput placeholder='Ingresar id' style={styles.input} onChangeText={(texto) => setid(texto)} value={id}/>
      <TextInput placeholder='Ingresar monto' style={styles.input} onChangeText={(texto) => setmonto(+texto)} value={monto.toString()}/>
      <TextInput placeholder='Ingresar tipo' style={styles.input} onChangeText={(texto) => settipo(texto)} value={tipo}/>
      <TextInput placeholder='Ingresar comentario' style={styles.input} onChangeText={(texto) => setcomentario(texto)} value={comentario}/>
      <TouchableOpacity onPress={guardar} style={styles.btnRegLog}>
        <Text style={{...styles.wbtnLRtxt, color:'white'}}>Guardar</Text>
      </TouchableOpacity>
    </View>
  )
}