// <div/> = <view/>
//<p> = <text/>
import React from "react";
import { StyleSheet, Text, View } from "react-native";
export default function Page(){
    // CODIGO JAVASCRIPT
    // CONSTANTES, FUNÇÕES, ETC..

    const nome = "WillianServello";

    //------------------------------

    // PÁGINA QUE SERÁ RENDERIZADA
    return (
        <View>
            <Text>{nome}</Text>
            <Text>WillianServello</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Background: {
        width: "100%",
        height: "100%",
        backgroundColor: "blue"
    }
})