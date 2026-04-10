import { View, Text, TouchableOpacity, Alert, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from '@/styles/routine'
import { Image } from 'expo-image';
import Octicons from '@expo/vector-icons/Octicons';
import { StatusBar } from 'expo-status-bar';
import * as ImagePicker from 'expo-image-picker';

type ViewMode = 'image' | 'table';

export type ParsedClass = {
  id: string;
  time: string;
  subjectName: string;
  room: string;
  type: string;
};

const Routine = () => {

  const [image, setImage] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('image');
  const [tableData, setTableData] = useState<ParsedClass[] | null>(null);

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

  const addManualTableData = () => {
    // In the future, this could open a Modal to type in data manually.
    // For now, we instantly generate the manual layout so you can see it!
    const manualData: ParsedClass[] = [
      { id: '1', time: '09:00 AM', subjectName: 'Software Engineering', room: 'CSE24231', type: 'Lecture' },
      { id: '2', time: '10:30 AM', subjectName: 'Data Structures', room: 'CSE101', type: 'Lab' },
      { id: '3', time: '12:00 PM', subjectName: 'Computer Networks', room: 'CSE302', type: 'Lecture' },
      { id: '4', time: '02:00 PM', subjectName: 'Database Systems', room: 'CSE405', type: 'Seminar' },
    ];
    setTableData(manualData);
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

        {/* ======================= TABLE MODE ======================= */}
        {viewMode === 'table' && (
          <>
            {!tableData ? (
              <TouchableOpacity
                style={styles.uploadBox}
                activeOpacity={0.7}
                onPress={addManualTableData}
              >
                <View style={[styles.uploadIconWrapper, { backgroundColor: "#F0FDF4" }]}>
                  <Octicons name="table" size={36} color="#16A34A" />
                </View>
                <Text style={styles.uploadTitle}>Tabular Routine</Text>
                <Text style={styles.uploadSubtitle}>Tap to build table manually</Text>
              </TouchableOpacity>
            ) : (
              <View style={styles.tableContainer}>
                <View style={styles.tableHeaderRow}>
                  <Text style={[styles.tableHeaderCell, styles.timeCol]}>Time</Text>
                  <Text style={[styles.tableHeaderCell, styles.detailsCol]}>Class Details</Text>
                </View>
                
                <ScrollView showsVerticalScrollIndicator={false}>
                  {tableData.map((item) => (
                    <View key={item.id} style={styles.tableRow}>
                      <View style={styles.timeCol}>
                         <Text style={styles.tableCellTime}>{item.time}</Text>
                         <View style={styles.typePill}>
                           <Text style={styles.typePillText}>{item.type}</Text>
                         </View>
                      </View>
                      <View style={styles.detailsCol}>
                         <Text style={styles.tableCellTextPrimary}>{item.subjectName}</Text>
                         <Text style={styles.tableCellTextSecondary}>Room / Code • {item.room}</Text>
                      </View>
                    </View>
                  ))}
                </ScrollView>

                <TouchableOpacity 
                  activeOpacity={0.8}
                  style={[styles.editFloatingButton, { backgroundColor: '#16A34A', shadowColor: '#16A34A' }]} 
                  onPress={addManualTableData} // Eventually hook to Edit Form
                >
                  <Octicons name="pencil" size={16} color="#FFFFFF" />
                  <Text style={styles.editFloatingText}>Edit</Text>
                </TouchableOpacity>
              </View>
            )}
          </>
        )}

      </View>
    </SafeAreaView>
  )
}

export default Routine