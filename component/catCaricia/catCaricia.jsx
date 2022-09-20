import React, { useState } from 'react'
import { Button, Image, StyleSheet,  View, Text  } from 'react-native'

const CatCaricia = () => {
  const [isLove, setisLove] = useState(true);
  

  function imagen (){
      if(isLove == false){
          return(
          <View>
              <Image
              source={{uri: "https://i.imgur.com/9yYqRSV.jpg"}}
              style={{width: 300, height: 300, borderRadius: 200, }}
              />
          </View>
          )
      }else{
          return(
          <View>
              <Image
              source={{uri: "https://i.imgur.com/Mt1maDr.jpg"}}
              style={{width: 300, height: 300, borderRadius: 200, }}
              />
          </View>)
      }
  };

  return (
    <View>  
        <View>
            <Text style={styles.title}>Acaricia al Gatito</Text>
        </View>

        {imagen()}
        
        <View style={styles.boton}>
            <Button 
            onPress={() => { setisLove(false)}}
            disabled={!isLove}
            title={isLove ? 'Puedes Acariciarme ?' : 'Muchas gracias'}
            color={'green'}
            />
        </View>
        <View style={styles.boton}>
            <Button
            onPress={() => { setisLove(true)}}
            disabled={isLove}
            title={!isLove ? 'Gatito Feliz!' : 'Quiero Caricias!'}
            color={'#B297B4'}
        />
        </View>
        
    </View>
  )
}
const styles = StyleSheet.create({
  boton:{
      marginTop:20,
      marginBottom:20,
  
  },
  title:{
      fontFamily: 'BungeeSpice-Regular', 
      textAlign:'center',
      fontSize:25,
      marginBottom:20,
      marginTop:20,
      color:'orange',
  
  }, 
});
export default CatCaricia