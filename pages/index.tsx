// <div/> = <view/>
//<p> = <text/>

import { Image } from "react-native";

import React from "react";

import Octicons from '@expo/vector-icons/Octicons';

import Feather from '@expo/vector-icons/Feather';

import Entypo from '@expo/vector-icons/Entypo';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import FontAwesome from '@expo/vector-icons/FontAwesome';

import AntDesign from '@expo/vector-icons/AntDesign';

import { useWindowDimensions } from "react-native";







// import { FiShare2 } from "react-icons/fi";

// import { FiSmile } from "react-icons/fi";

import { StyleSheet, Text, View } from "react-native";

export default function Page(){
    // CODIGO JAVASCRIPT
    // CONSTANTES, FUNÇÕES, ETC..

    const nome = "WillianServello";
     const { width } = useWindowDimensions();
    const isWeb = width > 768;
    //------------------------------

    // PÁGINA QUE SERÁ RENDERIZADA
    return (
        
        <View style={[styles.background, styles.body]}>
            <View style={{flex: 1, padding: 20}}>
            <View style={styles.iconesTopPosition}>

                        <Feather style={{ marginRight: 10 }} name="share-2" size={24} color="#5893ff" />
                        <Octicons name="gear" size={24} color="#5893ff"  />           
                        
            </View>
               
                    <View style={styles.textMargin}>
                        <Image
                            source={require("../images/foto.jpg")}
                            style={styles.avatar}
                        />

                        <View style={styles.textContainer}>
                            <Text style={styles.text}>
                            Willian Rafael Servello da Silva
                            </Text>

                            <Text style={styles.textNickName}>
                            WillianServello ° he/him
                            </Text>
                        </View>
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
                <Text style={styles.sobreMimText}>SaBÔR Desenvolvedor FullStack | C# | MYSQL | GitHub | Design  </Text>
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
                    
                    <Text style={{...styles.contatoText, color: "#a6a6a6"}}>
                        <Text style={{ color: "white" }}>15</Text> seguidores °
                        <Text style={{ color: "white" }}> 15</Text> seguidores
                    </Text>

                    
                    
                </View>

                <View style={{...styles.contatoViewAgrupamento, marginTop: 10}}>
                    <View style={styles.iconeContainer}>
                        <Octicons name="trophy" size={16} color="#a6a6a6" />
                        
                    </View>
                    
                    <View style={{flexDirection: "row", alignItems: "center", gap: 5}}>
                        <Image source={require("../images/solidgrooves.png")} style={{...styles.outlineTrofeus, width: 30, height: 30, borderRadius: 50, }} />
                        <Image source={require("../images/logo vintage.webp")} style={{...styles.outlineTrofeus, width: 30, height: 30, borderRadius: 50, marginLeft: -15}} />
                        <Image source={require("../images/nervoushouse.jpg")} style={{...styles.outlineTrofeus, width: 30, height: 30, borderRadius: 50, marginLeft: -15}} />
                        <Image source={require("../images/bruno be.webp")} style={{...styles.outlineTrofeus, width: 30, height: 30, borderRadius: 50, marginLeft: -15}} />
                        
                    </View>
                </View>
               
                    


            </View>  
            </View>
                                                {/* {height: isWeb ? "10%" : "15%"} DUAS FORMA DE FAZER ISSO QUE APRENDI */}
                                        {/*    se for true, a web usa 10% se não usa 15%    */}
            <View style={[styles.bootomBar, isWeb ? { height: "13%" } : { height: "15%" }]}> 
                <View style={{...styles.conteineriConeFoto, flexDirection: "column", alignItems: "center", gap: 10, marginTop: 15}}>
                    <View>
                        <Octicons name="home" size={24} color="white" />
                    </View>
                    
                    <View>
                        <Text style={styles.textFooter}>Home</Text>
                    </View>
                    
                </View>

                <View style={{...styles.conteineriConeFoto, flexDirection: "column", alignItems: "center", gap: 10, marginTop: 15}}>

                    <View>
                        <Octicons name="inbox" size={24} color="white" />
                    </View>

                    <View>
                        <Text style={styles.textFooter}>Inbox</Text>
                    </View>
                    
                </View>

                <View style={{...styles.conteineriConeFoto, flexDirection: "column", alignItems: "center", gap: 10, marginTop: 15}}>

                    <View >
                        <Octicons name="telescope" size={24} color="white" />
                    </View>
                    
                    <View>
                        <Text style={styles.textFooter}>Explorar</Text>
                    </View>
                    
                </View>

                 <View style={{...styles.conteineriConeFoto, flexDirection: "column", alignItems: "center", gap: 10, marginTop: 15}}>

                    <View >
                        <Image
                            source={require("../images/foto.jpg")}
                            style={{width: 26, height: 26, borderRadius: 50}}
                        />
                    </View>

                    <View >
                        <Text style={styles.textFooter}>Perfil</Text>
                    </View>
                    
                </View>

            </View> 
        </View>
        
        
    );
}

const styles = StyleSheet.create({
    
    conteineriConeFoto:{
        maxWidth: 100,
        width: "25%",
    },
    bootomBar: {
        backgroundColor: "#1d1d1d",
        flexDirection: "row",
        justifyContent: "center",
        textAlign: "center",
        width: "100%",
        height: "15%",
       
        marginTop: "auto"
    },
   
    textFooter: { 
        fontSize: 14,
        color: "white",
    },

    body:{
        flex: 1,
        padding: 0,
    },

    background: {
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: "#191919"
        
    },

    

    iconesTopPosition: {
        flexDirection: "row",
        justifyContent: "flex-end", 
        marginTop: 30,
        gap: 15, 
    },

    textMargin: {
        marginTop: 30,
        marginLeft: 10,
        marginRight: 50,
        flexDirection: "row",
        alignItems: "center",
    },

    avatar: {
        width: 65,
        height: 65,
        borderRadius: 40,
        marginRight: 15,
    },

    textContainer: {
        flex: 1,
    },

    text: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
    },

    textNickName: {
        color: "#5B5B58",
        marginTop: 5,
        fontSize: 14,
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
        gap: 5
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

   
     outlineTrofeus: {
        outlineColor: "black",
        outlineWidth: 1,
    },
   
    
})