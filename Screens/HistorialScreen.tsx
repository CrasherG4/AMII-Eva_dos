import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from '../Theme/appTheme'

//firebase
import { onValue, ref } from 'firebase/database'
import { db } from '../Config/Config'
import Tarjeta from '../Components/Tarjeta'

export default function HistorialScreen() {

  const [datos, setdatos] = useState()

  //Leer datos
  useEffect(() => {
    function leer() {
      const starCountRef = ref(db, 'operaciones/');
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        
        let arregloTemp : any = Object.keys(data).map(id=>({
          id, ...data[id]
        }))
        setdatos(arregloTemp)
      });

    }
    leer()
  }, [])

  type Operaciones ={
    id:String,
    monto:Number,
    tipo:String,
    comentario:String
  }

  return (
    <View style={styles.contenedorAll}>
      <Text style={styles.h1}>Historial</Text>
      <FlatList data={datos} renderItem={({ item }: { item: Operaciones }) => <Tarjeta datos={item} />}/>
    </View>
  )
}