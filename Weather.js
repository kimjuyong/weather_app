import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Haze: {
        iconName: "weather-fog",
        gradient: ['#948E99','#2E1437']
    },
    Thunderstorm: {
        iconName: "weather-lightning-rainy",
        gradient: ['#141E30','#243B55']
    },
    Drizzle:{
        iconName: "weather-rainy",
        gradient: ['#2C3E50','#FD746C']
    },
    Rain:{
        iconName: "weather-pouring",
        gradient: ['#2c3e50','#3498db']
    },
    Snow:{
        iconName: "weather- snowy",
        gradient: ['#abbaab','#ffffff']
    },
    Atmosphere:{
        iconName: "weather- hurricane",
        gradient: ['#FDFC47','#24FE41']
    },
    Clear:{
        iconName: "weather- sunny",
        gradient: ['#00c6ff','#0072ff']
    },
    Clouds:{
        iconName: "weather-cloudy",
        gradient: ['#283048','#859398']
    },
    Mist:{
        iconName: "weather- fog" ,
        gradient: ['#215f00','#e4e4d9']
    },
    Dust:{
        iconName: "weather- fog",
        gradient: ['#403B4A','#E7E9BB']
    }
}

export default function Weather({ temp , condition }) {
    return (
            <LinearGradient 
                colors={weatherOptions[condition].gradient}
                style={styles.container}>
                <StatusBar barStyle="light-content" />    
                <View style={styles.halfContainer}>
                    <MaterialCommunityIcons 
                        size={100} 
                        color="white" 
                        name={weatherOptions[condition].iconName}
                    />
                    <Text style={styles.temp}>{temp}℃</Text>
                </View>
                <View style={styles.halfContainer}>
                </View>
            </LinearGradient>
    )
}

Weather.PropTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
    ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp:{
        fontSize: 40,
        color:"white"
    },
    halfContainer:{
        flex: 1,
        justifyContent: "center",
        alignItems:"center"
    }
})