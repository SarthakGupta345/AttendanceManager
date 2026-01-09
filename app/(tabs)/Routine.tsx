import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from '@/styles/routine'
import { Image } from 'expo-image';
import Octicons from '@expo/vector-icons/Octicons';

const Routine = () => {

  const [image, setImage] = useState<string | null>(null);
  const [typeSelected, setTypeSelected] = useState<string>("");



  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.mainTittle}>Routine</Text>
        <TouchableOpacity
          style={{
            marginRight: 10
          }}
        >
          <Octicons name="arrow-switch" size={30} color="black" />
        </TouchableOpacity>

      </View>
      {
        image && (
          <Image
            source={image}
            alt='sunny Leone'
            contentFit="cover"
            transition={100}
            style={styles.imageBox}
          />
        )
      }

      <TouchableOpacity
        style={styles.uploadBox}
      >
        <Octicons name="upload" size={64} color="black" />
        <Text style={{
          fontSize: 20,
          marginTop: 5,
          color: "black",
          fontWeight: "500"
        }}>Upload From Gallery</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Routine