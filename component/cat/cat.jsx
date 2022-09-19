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
                source={{uri: "https://thumbs.dreamstime.com/z/gato-lleno-con-la-burbuja-y-decir-del-discurso-65261875.jpg"}}
                style={{width: 300, height: 300, borderRadius: 200, }}
                />
            </View>
            )
        }else{
            return(
            <View>
                <Image
                source={{uri: "https://media.istockphoto.com/vectors/hungry-cat-wants-to-eat-vector-id611194142?s=612x612"}}
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
        fontSize:25,
        marginBottom:20,
        marginTop:20,
    
    }, 
});

export default Cat