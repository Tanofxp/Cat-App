import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import Cat from './component/cat/cat';
import CatSleep from './component/catSleep/catSleep';
import { useFonts } from 'expo-font';
import CatCaricia from './component/catCaricia/catCaricia';



export default function App() {
  const [loaded] = useFonts({
    'BungeeSpice-Regular': require('./assets/fonts/BungeeSpice-Regular.ttf'),

  });
  const [alimentar, setAlimentar] = useState(false)
  const [durmiendo , setDurmiendo] = useState (false)
  const [caricia , setCaricia] = useState (false)

  if(!loaded) {
    return (
      <View style={styles.containerLoader}>
        <ActivityIndicator size="large" color='blue' />
      </View>
    )
  }

  let home = <Image
  source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAbVSEA_99wusa5kFjuQcEC1KNVjzKRRgJsg&usqp=CAU"}}
  style={{width: 300, height: 300,  margin: 100 }}
  />

  let content = home

  let acariciar = () => {
    if (!caricia){
      setAlimentar(false)
      setCaricia(true)
      setDurmiendo(false)
    } else if (caricia){
      setCaricia(false)
    }
  }

  let dormir = () => {
    if (!durmiendo){
      setAlimentar(false)
      setCaricia(false)
      setDurmiendo(true)
    } else if(durmiendo) {
      setDurmiendo(false)
    }
  }

  let hambre = () => {
    if (!alimentar){
      setAlimentar(true)
      setCaricia(false)
      setDurmiendo(false);
    } else if(alimentar) {
      setAlimentar(false)
    }
  }
  if(!alimentar && !durmiendo && !caricia){
    content = home
  } else if(alimentar) {
    content = <Cat/>
    }else if (durmiendo){
      content = <CatSleep/>
    } else if(caricia){
      content = <CatCaricia/>
    }


  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header}>Bienvenidos a la app Gatito</Text>
        <View style={styles.containerNav}>
                <Button title='Alimentar' onPress={hambre}/>
                    <Text> </Text>
                <Button  title='Acariciar' onPress={acariciar}/>
                    <Text> </Text>
                <Button  title='Despertar' onPress={dormir}/>
        </View>
        <StatusBar style="auto" />
        {content}
      </View>
    </ScrollView>
  );
}
// 
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '',
    marginTop:50,
    alignItems:'center',
  },
  header:{
    fontSize:20,
    marginBottom:20,
    marginTop:20,
    fontFamily: 'BungeeSpice-Regular',
  }, 
  title:{
    fontSize:25,
    marginBottom:20,
    marginTop:20,

  },
  containerNav:{
    flex:1,
    flexDirection: "row",
    
}, 
containerLoader: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
},
});
