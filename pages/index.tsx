// <div/> = <view/>
//<p> = <text/>

import React from "react";
import { GoGear } from "react-icons/go";

import { FiShare2 } from "react-icons/fi";

import { FiSmile } from "react-icons/fi";

import { StyleSheet, Text, View } from "react-native";

export default function Page(){
    // CODIGO JAVASCRIPT
    // CONSTANTES, FUNÇÕES, ETC..

    const nome = "WillianServello";

    //------------------------------

    // PÁGINA QUE SERÁ RENDERIZADA
    return (
        <View style={[styles.background, styles.body]}>
            <View>
                <Text style={[styles.iconeColor, styles.iconePosition]}>
                    <FiShare2 />
                    <GoGear />
                </Text>
            </View>

            <View style={styles.textMargin}>
                <Text style={styles.text}>Willian Rafael Servello da Silva</Text>
                <Text style={styles.textNickName}>WillianServello ° he/him</Text>
            </View>

            <View style={styles.caixaInput}>
             
                   
                       
                            <Text style={[styles.emojiColor, styles.configConfig]}>
                                <FiSmile />
                                Digite seu status
                            </Text>
                        
                        
                    
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        width: "100%",
        height: "100%",
        backgroundColor: "#191919"
    },

    textMargin: {
        marginTop: 40,
        marginLeft: 70,
        marginRight: 45,
        
    },

    text: {
        color: "white",
        fontWeight: "bold",
        fontFamily: "Arial",
        fontSize: 24
    },

    textNickName:{
        color: "#5B5B58",
        marginTop: 5,
        fontSize: 14
    },

    iconeColor:{
        fontSize: 24,
        color: "#5893ff"
    },

    iconePosition: {
        marginLeft: "80%",
        gap: 20,
        display: "flex"
    },

    body:{
        padding: 20
    },

    caixaInput: {
        padding: 10,
        justifyContent: "center",
        borderRadius: 5,
        marginTop: 15,
        backgroundColor: "#333333",
        width: "100%",
        height: 38
    },
  
    emojiColor: {
        fontSize: 16,
        color: "#a6a6a6",
        gap: 5

    },

    alignText:{
        
        marginLeft: 10,
    },

    configConfig: {
        display: "flex",
        alignItems: "center"
    }
    
})