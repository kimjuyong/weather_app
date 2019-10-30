import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Haze: {
        iconName: "weather-fog",
        gradient: ['#948E99','#2E1437'],
        title: "Haze",
        subtitle: ""
    },
    Thunderstorm: {
        iconName: "weather-lightning-rainy",
        gradient: ['#141E30','#243B55'],
        title: "Thunderstorm",
        subtitle: ""
    },
    Drizzle:{
        iconName: "weather-rainy",
        gradient: ['#2C3E50','#FD746C'],
        title: "Drizzle",
        subtitle: ""
    },
    Rain:{
        iconName: "weather-pouring",
        gradient: ['#2c3e50','#3498db'],
        title: "Rain",
        subtitle: ""
    },
    Snow:{
        iconName: "weather-snowy",
        gradient: ['#abbaab','#ffffff'],
        title: "Snow",
        subtitle: ""
    },
    Atmosphere:{
        iconName: "weather-hurricane",
        gradient: ['#FDFC47','#24FE41'],
        title: "Atmosphere",
        subtitle: ""
    },
    Clear:{
        iconName: "weather-sunny",
        gradient: ['#00c6ff','#0072ff'],
        title: "Clear",
        subtitle: ""
    },
    Clouds:{
        iconName: "weather-cloudy",
        gradient: ['#283048','#859398'],
        title: "Clouds",
        subtitle: ""
    },
    Mist:{
        iconName: "weather-fog" ,
        gradient: ['#215f00','#e4e4d9'],
        title: "Mist",
        subtitle: ""
    },
    Dust:{
        iconName: "weather-fog",
        gradient: ['#403B4A','#E7E9BB'],
        title: "Dust",
        subtitle: ""
    }
}

export default function Weather({ temp , condition ,name}) {
    return (
            <LinearGradient 
                colors={weatherOptions[condition].gradient}
                style={styles.container}>
                <StatusBar barStyle="light-content" />    
                <View style={styles.halfContainer}>
                    <Text style={styles.cityName}>{name}</Text>
                    <MaterialCommunityIcons 
                        size={100} 
                        color="white" 
                        name={weatherOptions[condition].iconName}
                    />
                    <Text style={styles.temp}>{temp}℃</Text>
                </View>
                <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
                    <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                    <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
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
    },
    title:{
        color:"white",
        fontSize: 45,
        fontWeight: "600",
        marginBottom: 10
    },
    subtitle:{
        fontWeight:"300",
        color: "white",
        fontSize: 25
    },
    textContainer: {
        paddingHorizontal:20,
        alignItems: "flex-start"   
    },
    cityName:{
        color:"white",
        fontsize: 50,
        fontWeight: "500",
        marginBottom: 20
    }


})