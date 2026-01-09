import { View, Text } from 'react-native'
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
                tabBarActiveTintColor: '#7310ddff',
                tabBarInactiveTintColor: '#0e0e0ef2',
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    elevation: 0,
                    backgroundColor: '#c1d9f1ff',
                    borderTopWidth: 0,
                    height: 75,
                    paddingTop: 7
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    marginBottom: 5,
                },
            }}

        >
            <Tabs.Screen name="Home" options={{
                title: 'Today',
                tabBarIcon: ({ color, size }) => (
                    <Entypo name="home" size={size ?? 24} color={color ?? '#000'} />
                ),
            }} />


            <Tabs.Screen name="Routine" options={{
                title: 'Routine',
                tabBarIcon: ({ color, size }) => (
                    <Entypo name="calendar" size={size ?? 24} color={color ?? '#000'} />
                ),
            }}

            />
            <Tabs.Screen name="Calendar" options={{
                title: 'Calendar',
                tabBarIcon: ({ color, size }) => (
                    <Entypo name="calendar" size={size ?? 24} color={color ?? '#000'} />
                )
            }} />

            <Tabs.Screen name="Subject" options={{
                title: 'Subjects',
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome5 name="book" size={size ?? 24} color={color ?? '#000'} />
                )
            }}
            />


            <Tabs.Screen name="Setting" options={{
                title: 'Setting',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="settings" size={size ?? 24} color={color ?? '#000'} />
                )
            }}
            />
        </Tabs>
    )
}

export default TabsLayout