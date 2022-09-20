import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

const CatSleep = () => {
  return (
    <View>
        <View>
            <Text style={styles.title}>Gatito con sueño</Text>
        </View>
        <View>
              <Image
              source={{uri: "https://http.cat/404"}}
              style={{width: 300, height: 300,}}
              />
          </View>
          <View>
            <Text style={styles.title}>Proximamente mas juegos !</Text>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
  title:{
      fontFamily: 'BungeeSpice-Regular', 
      textAlign:'center',
      fontSize:25,
      marginBottom:20,
      marginTop:20,
      color:'purple',
  
  }, 
});
export default CatSleep