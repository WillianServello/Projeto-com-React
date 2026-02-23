// <div/> = <view/>
//<p> = <text/>

import React from "react";

import Octicons from '@expo/vector-icons/Octicons';

import Feather from '@expo/vector-icons/Feather';

import Entypo from '@expo/vector-icons/Entypo';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import FontAwesome from '@expo/vector-icons/FontAwesome';

import AntDesign from '@expo/vector-icons/AntDesign';




// import { FiShare2 } from "react-icons/fi";

// import { FiSmile } from "react-icons/fi";

import { StyleSheet, Text, View } from "react-native";

export default function Page(){
    // CODIGO JAVASCRIPT
    // CONSTANTES, FUNÇÕES, ETC..

    const nome = "WillianServello";

    //------------------------------

    // PÁGINA QUE SERÁ RENDERIZADA
    return (
        <View style={[styles.background, styles.body]}>
            <View style={styles.iconesTopPosition}>

                        <Feather style={{ marginRight: 10 }} name="share-2" size={24} color="#5893ff" />
                        <Octicons name="gear" size={24} color="#5893ff"  />           
                        
            </View>

            <View style={styles.textMargin}>
                <Text style={styles.text}>Willian Rafael Servello da Silva</Text>
                <Text style={styles.textNickName}>WillianServello ° he/him</Text>
            </View>

            <View style={styles.caixaInput}>    

                <View>
                    <Entypo style={{marginRight: 10}} name="emoji-happy" size={16} color="#a6a6a6" />
                </View>
                
                <Text style={{color: "#a6a6a6", fontSize: 16}}>      
                     Definir seu status
                </Text>
                
                <View style={{marginLeft: "auto", marginRight: 10}}>
                    <Octicons name="pencil" size={16} color="#a6a6a6" />
                </View>

            </View>   

            <View style={styles.sobreMimView}>
                <Text style={styles.sobreMimText}>Sabor Desenvolvedor FullStack | C# | MYSQL | GitHub | Design  </Text>
            </View>

            <View style={styles.contatoView}>

                <View style={styles.contatoViewAgrupamento}>
                    <View style={styles.iconeContainer}>
                        <MaterialIcons name="mail-outline" size={20} color="#a6a6a6" />
                    </View>

                    <Text style={styles.contatoText}>willianservello@gmail.com</Text>
                </View>

                <View style={styles.contatoViewAgrupamento}>
                    <View style={styles.iconeContainer}>
                        <AntDesign name="github" size={20} color="#a6a6a6" />
                    </View>
                    
                    <Text style={styles.contatoText}>WillianServello</Text>
                </View>

                <View style={styles.contatoViewAgrupamento}>
                    <View style={styles.iconeContainer}>
                        <FontAwesome name="linkedin-square" size={20} color="#a6a6a6" />
                        
                    </View>
                    
                    <Text style={styles.contatoText}>in/willianservello</Text>
                </View>

                <View style={styles.contatoViewAgrupamento}>
                    <View style={styles.iconeContainer}>
                        <FontAwesome name="instagram" size={20} color="#a6a6a6" />
                    </View>
                    
                    <Text style={styles.contatoText}>willianservello</Text>
                </View>

                <View style={styles.contatoViewAgrupamento}>
                    <View style={styles.iconeContainer}>
                        <FontAwesome name="steam-square" size={20} color="#a6a6a6" />  
                    </View>
                    
                    <Text style={styles.contatoText}>relaxaplayer</Text>
                </View>

                <View style={styles.contatoViewAgrupamento}>
                    <View style={styles.iconeContainer}>
                        
                        <FontAwesome name="user-o" size={16} color="#a6a6a6" />  
                    </View>
                    
                    <Text style={styles.contatoText}>15 seguidores  °  15 seguindo</Text>

                    
                    
                </View>
                
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    
    body:{
        padding: 20
    },

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

    iconesTopPosition: {
        flexDirection: "row",
        justifyContent: "flex-end", 
        marginTop: 30,
        gap: 15, 
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

    caixaInput: {
        
        flexDirection: "row", 
        alignItems: "center", 
        marginTop: 20,
        paddingLeft: 12,
        borderRadius: 5,
        backgroundColor: "#333333",
        width: "100%",
        height: "6%"
    },

    sobreMimView: {
        marginTop: 20,
    },

    sobreMimText: {
        color: "white",
        fontSize: 14,
        fontFamily: "Arial",
        lineHeight: 20
        
    },

    contatoView: {
        marginTop: 10,
    },

    contatoViewAgrupamento: {
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    
    contatoText: {
        color: "white",
        fontSize: 14,
        fontFamily: "Arial",
        lineHeight: 20
    },
    
  
    iconeContainer: {
        width: 20,          
        alignItems: "center"
    },

   

   
    
})