import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../Theme/appTheme'



export default function Tarjeta({ datos }: any) {
  const [visible, setVisible] = useState(false)

  function comentario(){
    Alert.alert('Comentario:', datos.comentario)
  }
  return (
    <View style={styles.contenedorAll}>
      <TouchableOpacity onPress={comentario}>
        <Text>Id: {datos.id} - Tipo: {datos.tipo}</Text>
        <Text>Monto: {datos.monto}</Text>
      </TouchableOpacity>
    </View>
  )
}