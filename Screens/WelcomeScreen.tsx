import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../Theme/appTheme'

export default function WelcomeScreen({navigation} : any) {
  return (
    <View style={styles.contenedorAll}>
      <Text style={styles.h1}>Welcome</Text>
      <Image source={{ uri: 'https://th.bing.com/th/id/R.81414e71690126a27367ac42c9fdc4b3?rik=fl7pXdmg2pCwcg&pid=ImgRaw&r=0' }} style={styles.imgLogReg}/>
      <TouchableOpacity style={styles.wbtnLR} onPress={()=> navigation.navigate('Login')}>
        <Text style={styles.wbtnLRtxt}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.wbtnLR} onPress={()=> navigation.navigate('Registro')}>
        <Text style={styles.wbtnLRtxt}>Register</Text>
      </TouchableOpacity>
      <Text style={{...styles.h1, fontWeight:'400', fontSize:14}}>Desarrollado por Gabriel Olmedo</Text>
    </View>
  )
}