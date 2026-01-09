import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from '@/styles/Settings'
const photo = "data:image/webp;base64,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"
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { settingOptions } from '@/Constants/SettingOPtions/deviceOptions'
import { deviceOptions } from '@/Constants/SettingOPtions/RateOPtions'
import { cloudOptions } from '@/Constants/SettingOPtions/cloudOptions'

const Setting = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainBox}>



        <ScrollView
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}

        >

          <View>

            <View style={styles.profileBox}>
              <Image
                src={photo}
                style={styles.imageBox}
                alt='sunny Leone'
              />

              <View>
                <Text style={{ fontSize: 20, fontWeight: '600' }}>Hello Chandan</Text>
                <Text>Have a Nice day</Text>
              </View>
            </View>

            <View style={styles.divideBox}>
              {
                settingOptions.map((item, index) => (
                  <TouchableOpacity activeOpacity={0.7} key={index} style={styles.themeBox}>
                    {item.icon}
                    <View>
                      <Text style={styles.mainTittle}>{item.tittle}</Text>
                      <Text style={styles.subTittle}>{item.subTittle}</Text>
                    </View>
                  </TouchableOpacity>
                ))
              }

            </View>

            <View style={styles.divideBox}>
              {
                deviceOptions.map((item, index) => (
                  <TouchableOpacity activeOpacity={0.7} key={index} style={styles.themeBox}>
                    {item.icon}
                    <View>
                      <Text style={styles.mainTittle}>{item.tittle}</Text>
                      <Text style={styles.subTittle}>{item.subTittle}</Text>
                    </View>
                  </TouchableOpacity>
                ))
              }
            </View>

            <View style={styles.divideBox}>
              {
                cloudOptions.map((item, index) => (
                  <TouchableOpacity activeOpacity={0.7} key={index} style={styles.themeBox}>
                    {item.icon}
                    <View>
                      <Text style={styles.mainTittle}>{item.tittle}</Text>
                      <Text style={styles.subTittle}>{item.subTittle}</Text>
                    </View>
                  </TouchableOpacity>
                ))
              }
            </View>


          </View>





        </ScrollView>
      </View>

    </SafeAreaView>
  )
}

export default Setting