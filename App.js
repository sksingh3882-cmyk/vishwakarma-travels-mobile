import React,{useState}from'react';
import{StatusBar}from'expo-status-bar';
import{SafeAreaProvider,SafeAreaView}from'react-native-safe-area-context';
import{Ionicons,MaterialCommunityIcons}from'@expo/vector-icons';
import{ScrollView,StyleSheet,Text,TouchableOpacity,View}from'react-native';
const BLUE='#0B3D91',ORANGE='#FF6B00',BG='#F4F7FB',TEXT='#0F172A',MUTED='#64748B';
const vehicles=[['Dzire','Sedan','4 Seats','₹12/km'],['Ertiga','MPV','6 Seats