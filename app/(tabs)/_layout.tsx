import { View, Text, Platform } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Entypo } from '@expo/vector-icons';

const TabsLayout = () => {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#413ca9ff', // Premium brand Indigo
                tabBarInactiveTintColor: '#56677fff', // Premium soft Slate
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 3,
                    left: 0,
                    right: 0,
                    backgroundColor: '#fcfcfdff', // Crisp white bar
                    borderTopWidth: 0, // Removed default border outline
                    borderTopEndRadius: 24,
                    borderTopStartRadius: 24,
                    height: Platform.OS === 'ios' ? 85 : 75,
                    paddingTop: 12,
                    paddingBottom: Platform.OS === 'ios' ? 24 : 12,
                    // Premium Floating Shadow
                    shadowColor: "#94A3B8",
                    shadowOffset: { width: 0, height: -5 },
                    shadowOpacity: 0.15,
                    shadowRadius: 10,
                    elevation: 10, // For Android
                    zIndex: 10,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '600',
                    marginTop: 4,
                },
            }}
        >
            <Tabs.Screen name="Home" options={{
                title: 'Today',
                tabBarIcon: ({ color, size }) => (
                    <Entypo name="home" size={24} color={color} />
                ),
            }} />

            <Tabs.Screen name="Routine" options={{
                title: 'Routine',
                tabBarIcon: ({ color, size }) => (
                    <Entypo name="calendar" size={24} color={color} />
                ),
            }} />

            <Tabs.Screen name="Calendar" options={{
                title: 'Calendar',
                tabBarIcon: ({ color, size }) => (
                    <Entypo name="calendar" size={24} color={color} />
                )
            }} />

            <Tabs.Screen name="Subject" options={{
                title: 'Subjects',
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome5 name="book" size={22} color={color} />
                )
            }} />

            <Tabs.Screen name="Setting" options={{
                title: 'Setting',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="settings" size={24} color={color} />
                )
            }} />
        </Tabs>
    )
}

export default TabsLayout