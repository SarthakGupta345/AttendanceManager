import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from '@/styles/Home'
import Entypo from '@expo/vector-icons/Entypo';
import { router } from 'expo-router';
const FloatingBox = () => {

  const handelSubmit = async () => {

  }

  const [optionSelected, setOptionSelected] = useState<string>("Class")
  const [crossSelected, setCrossSelected] = useState<boolean>(false)

  if (crossSelected) {
    return null
  }

  return (
    <View style={styles.floatBox}>
      <View style={styles.floatMainBox}>
        <TouchableOpacity
          style={{
            position: "absolute",
            right: 17,
            top: 14
          }}
          activeOpacity={0.8}

          onPress={() => {
            setCrossSelected(true)
          }}
        >
          <Entypo name="cross" size={28} color="black" />
        </TouchableOpacity>

        <View style={styles.topBox}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={optionSelected == "Class" ? styles.selectedBox : styles.individualBox
            }
            onPress={() => {
              setOptionSelected("Class")
            }}
          >
            <Text style={styles.topText}>Class</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={optionSelected == "Subject" ? styles.selectedBox : styles.individualBox
            }
            onPress={() => {
              setOptionSelected("Subject")
            }}
          >
            <Text style={styles.topText}>Subject</Text>
          </TouchableOpacity>

        </View>

        <View>
          <View>
            <Text>Class Name</Text>
          </View>

          <View>
            <Text>Prof. Name</Text>
          </View>

          <View>
            <Text>Start Time</Text>
          </View>
        </View>


        {/* BottomBox */}
        <View style={styles.bottomBox}>
          <TouchableOpacity
            style={styles.ConfirmBox}
            activeOpacity={0.4}
            onPress={handelSubmit}
          >
            <Text style={{
              color: "black",
              fontWeight: "bold",
              fontSize: 20
            }}>
              CONFIRM</Text>
          </TouchableOpacity>


          <TouchableOpacity activeOpacity={0.8}
            onPress={() => {
              setCrossSelected(true)
            }}
            style={styles.CancelBox}
          >

            <Text style={{
              color: "black",
              fontWeight: "bold",
              fontSize: 20
            }}>CANCEL</Text>
          </TouchableOpacity>
        </View>


      </View>
    </View>
  )
}

export default FloatingBox