import { View, Text, TouchableOpacity, Alert, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from '@/styles/routine'
import { Image } from 'expo-image';
import Octicons from '@expo/vector-icons/Octicons';
import { StatusBar } from 'expo-status-bar';
import * as ImagePicker from 'expo-image-picker';
import { weeklyGridData, gridHeaders } from '@/Constants/weeklyGridData';

type ViewMode = 'image' | 'table';

const Routine = () => {

  const [image, setImage] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('image');

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      Alert.alert("Permission Required", "You must allow access to photos to upload a routine.");
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
        setImage(result.assets[0].uri);
    }
  };

  const toggleViewMode = () => {
    setViewMode(prev => prev === 'image' ? 'table' : 'image');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      
      {/* Header */}
      <View style={styles.headerRow}>
        <Text style={styles.mainTittle}>Routine</Text>
        <TouchableOpacity 
          style={styles.actionButton} 
          activeOpacity={0.7}
          onPress={toggleViewMode}
        >
           <Octicons 
            name={viewMode === 'image' ? "table" : "image"} 
            size={22} 
            color="#0F172A" 
          />
        </TouchableOpacity>
      </View>

      {/* Routine Content Area */}
      <View style={styles.contentArea}>
        
        {/* ======================= IMAGE MODE ======================= */}
        {viewMode === 'image' && (
          <>
            {!image ? (
              <TouchableOpacity
                style={styles.uploadBox}
                activeOpacity={0.7}
                onPress={pickImage}
              >
                <View style={[styles.uploadIconWrapper, { backgroundColor: "#EEF2FF" }]}>
                  <Octicons name="image" size={36} color="#4F46E5" />
                </View>
                <Text style={styles.uploadTitle}>Upload Routine Image</Text>
                <Text style={styles.uploadSubtitle}>Choose a photo from gallery</Text>
              </TouchableOpacity>
            ) : (
              <View style={styles.imageBoxContainer}>
                <Image
                  source={image}
                  alt='routine uploaded'
                  contentFit="contain"
                  transition={200}
                  style={styles.imageContent}
                />
                <TouchableOpacity 
                  activeOpacity={0.8}
                  style={styles.editFloatingButton} 
                  onPress={pickImage}
                >
                  <Octicons name="pencil" size={16} color="#FFFFFF" />
                  <Text style={styles.editFloatingText}>Edit</Text>
                </TouchableOpacity>
              </View>
            )}
          </>
        )}

        {/* ======================= FULL WEEK GRID MODE ======================= */}
        {viewMode === 'table' && (
          <View style={styles.gridWrapper}>
            <ScrollView horizontal showsHorizontalScrollIndicator={true}>
              <ScrollView showsVerticalScrollIndicator={true}>
                <View>
                  {/* Grid Headers */}
                  <View style={styles.gridRow}>
                     <View style={[styles.gridHeaderCell, { width: 70 }]}>
                        <Text style={styles.tableHeaderCell}>DAY</Text>
                     </View>
                     {gridHeaders.map((header) => (
                        <View key={header.id} style={[styles.gridHeaderCell, { width: header.width }]}>
                           <Text style={[styles.tableHeaderCell, { textAlign: 'center' }]}>{header.name}</Text>
                        </View>
                     ))}
                  </View>

                  {/* Grid Data Rows */}
                  {weeklyGridData.map((row, index) => (
                    <View key={index} style={styles.gridRow}>
                      
                      {/* Day Column Locked Left conceptually */}
                      <View style={styles.gridDayCell}>
                         <Text style={styles.gridDayText}>{row.day}</Text>
                      </View>

                      {/* Cells */}
                      {row.cells.map((cell) => {
                         let bgStyle = styles.bgEmpty;
                         let textStylePrimary: any = styles.gridCellTextPrimary;
                         
                         if (cell.type === 'Lecture') { bgStyle = styles.bgLecture; textStylePrimary = [styles.gridCellTextPrimary, styles.textLecture]; }
                         else if (cell.type === 'Lab') { bgStyle = styles.bgLab; textStylePrimary = [styles.gridCellTextPrimary, styles.textLab]; }
                         else if (cell.type === 'Lunch') { bgStyle = styles.bgLunch; textStylePrimary = [styles.gridCellTextPrimary, styles.textLunch]; }
                         else if (cell.type === 'Tutorial') { bgStyle = styles.bgTutorial; textStylePrimary = [styles.gridCellTextPrimary, styles.textTutorial]; }

                         return (
                           <View key={cell.id} style={[styles.gridDataCell, bgStyle, { width: cell.width }]}>
                              {cell.type !== 'Empty' && (
                                <>
                                  {cell.name && <Text style={textStylePrimary}>{cell.name}</Text>}
                                  {cell.code && <Text style={[styles.gridCellTextSecondary, { marginBottom: 4 }]}>{cell.code}</Text>}
                                  {cell.detail && <Text style={styles.gridCellTextSecondary}>{cell.detail}</Text>}
                                </>
                              )}
                           </View>
                         )
                      })}

                    </View>
                  ))}
                </View>
              </ScrollView>
            </ScrollView>
          </View>
        )}

      </View>
    </SafeAreaView>
  )
}

export default Routine