import React, { useState } from 'react'
import { Button, Image, StyleSheet,  View, Text } from 'react-native';

const Cat = ( ) => {
    const [isHungry, setIsHungry] = useState(true);
    const [timespetted, setTimespeted] = useState(0);

    function imagen (){
        if(isHungry == false){
            return(
            <View>
                <Image
                source={{uri: "https://i.imgur.com/sZmHfhe.jpg"}}
                style={{width: 300, height: 300, borderRadius: 200, }}
                />
            </View>
            )
        }else{
            return(
            <View>
                <Image
                source={{uri: "https://i.imgur.com/PQgQrZk.jpg"}}
                style={{width: 300, height: 300, borderRadius: 200, }}
                />
            </View>)
        }
    };
    return (
    
    <View>  
        <View>
            <Text style={styles.title}>Alimenta al gatito</Text>
        </View>

        {imagen()}
        
        <View style={styles.boton}>
            <Button 
            onPress={() => { setIsHungry(false)}}
            disabled={!isHungry}
            title={isHungry ? 'Puedes alimentarme ?' : 'Muchas gracias'}
            color={'green'}
            />
        </View>
        <View style={styles.boton}>
            <Button
            onPress={() => { setIsHungry(true)}}
            disabled={isHungry}
            title={!isHungry ? 'Quieres jugar?' : 'Estoy cansado!'}
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
        color:'red',
    
    }, 
});

export default Cat