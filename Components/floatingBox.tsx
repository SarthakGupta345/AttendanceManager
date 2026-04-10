import { useCreateClass } from "@/hooks/useClasses";
import { styles } from "@/styles/formInput";
import Entypo from "@expo/vector-icons/Entypo";
import React, { useState } from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface FloatingBoxProps {
    onClose?: () => void;
}

const FloatingBox = ({ onClose }: FloatingBoxProps) => {
  const [visible, setVisible] = useState(true);
  const [error, setError] = useState<{ type: string, message: string }>({ type: "", message: "" });
  const [optionSelected, setOptionSelected] = useState<"Class" | "Subject">("Class");

  const [className, setClassName] = useState("");
  const [profName, setProfName] = useState("");
  const [subjectCode, setSubjectCode] = useState("09:30");
  const [startTime, setStartTime] = useState("09:35"); // "09:30"
  const [endTime, setEndTime] = useState("");     // "10:30"

  if (!visible) return null;


  const isValidTime = (time: string) =>
    /^([01]\d|2[0-3]):([0-5]\d)$/.test(time);

  const timeToMinutes = (time: string) => {
    const [h, m] = time.split(":").map(Number);
    return h * 60 + m;
  };

  const { mutate } = useCreateClass();


  const formValidate = (): boolean => {

    // if (!isValidTime(startTime)) {
    //   setError({ type: "startTime", message: "Invalid start time" });
    //   return false;
    // }

    // if (!isValidTime(endTime)) {
    //   setError({ type: "endTime", message: "Invalid end time" });
    //   return false;
    // }

    // if (timeToMinutes(endTime) <= timeToMinutes(startTime)) {
    //   setError({ type: "endTime", message: "End time must be after start time" });
    //   return false;
    // }

    if (!className.trim() || className.trim().length <= 1) {
      setError({ type: "className", message: "Class name is required" });
      return false;
    }

    if (!profName.trim() || profName.trim().length <= 1) {
      setError({ type: "profName", message: "Prof name is required" });
      return false;
    }
    return true
  }

  const handleSubmit = () => {
    if (!formValidate()) return

    const data = {
      name: className,
      profName: profName,
      startTime: '8:40:34',
      endTime: '7:30:34'
    }

    mutate(data, {
      onSuccess: () => {
        setVisible(false);
        console.log("Success");
      },
      onError: (error: any) => {
        console.log(error);
      },
    })
  };

  return (
    <View style={styles.floatBox}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.floatMainBox}
      >
        {/* Close */}
        <TouchableOpacity
          style={styles.closeBtn}
          onPress={() => {
            setVisible(false);
            onClose?.();
          }}
        >
          <Entypo name="cross" size={26} color="#333" />
        </TouchableOpacity>

        {/* Tabs */}
        <View style={styles.topBox}>
          {["Class", "Subject"].map((item) => (
            <TouchableOpacity
              key={item}
              style={
                optionSelected === item
                  ? styles.selectedBox
                  : styles.individualBox
              }
              onPress={() => setOptionSelected(item as any)}
            >
              <Text style={styles.topText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Form */}
        {
          optionSelected == "Class" ? (


            <View style={styles.formBox}>
              <FormInput
                label="Class Name"
                value={className}
                onChangeText={setClassName}
                placeholder="Enter class name"
              />
              {
                error.type == "className" && (
                  <View style={styles.errorBox}>
                    <Ionicons name="warning-outline" size={15} color="red" style={styles.errorIcon} />
                    <Text style={styles.errorText}>{error.message}</Text>
                  </View>
                )
              }

              <FormInput
                label="Professor Name"
                value={profName}
                onChangeText={setProfName}
                placeholder="Enter professor name"
              />

              {
                error.type == "ProfName" && (
                  <View style={styles.errorBox}>
                    <Ionicons name="warning-outline" size={15} color="red" style={styles.errorIcon} />
                    <Text style={styles.errorText}>{error.message}</Text>
                  </View>
                )
              }

              <FormInput
                label="Subject Code (optional)"
                value={subjectCode}
                onChangeText={setSubjectCode}
                placeholder="Enter subject code"
              />


              {
                error.type == "subjectCode" && (
                  <View style={styles.errorBox}>
                    <Ionicons name="warning-outline" size={15} color="red" style={styles.errorIcon} />
                    <Text style={styles.errorText}>{error.message}</Text>
                  </View>
                )
              }


              {/* Time */}

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ width: "48%", marginTop: 15, marginLeft: 1 }}>
                  <TouchableOpacity>
                    <Text style={styles.text}>Start Time</Text>
                    <View style={styles.meraBox}>
                      <Text>9:30:569 AM</Text>

                    </View>

                  </TouchableOpacity>
                  {error.type === "startTime" && (
                    <View style={styles.errorBox}>
                      <Ionicons
                        name="warning-outline"
                        size={15}
                        color="red"
                        style={styles.errorIcon}
                      />
                      <Text style={styles.errorText}>{error.message}</Text>
                    </View>
                  )}
                </View>

                <View style={{ width: "48%", marginTop: 15, marginLeft: 10 }}>
                  <TouchableOpacity>
                    <Text style={styles.text}>End Time</Text>
                    <View style={styles.meraBox}>
                      <Text>9:30:569 AM</Text>

                    </View>

                  </TouchableOpacity>
                  {error.type === "endTime" && (
                    <View style={styles.errorBox}>
                      <Ionicons
                        name="warning-outline"
                        size={15}
                        color="red"
                        style={styles.errorIcon}
                      />
                      <Text style={styles.errorText}>{error.message}</Text>
                    </View>
                  )}
                </View>
              </View>


            </View>

          ) : (
            <>
            </>
          )
        }


        {/* Footer */}
        <View style={styles.bottomBox}>

          <TouchableOpacity
            style={styles.CancelBox}
            onPress={() => {
                setVisible(false);
                onClose?.();
            }}
          >
            <Text style={styles.actionText}>CANCEL</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.ConfirmBox,
            ]}
            disabled={!className}
            onPress={handleSubmit}
          >
            <Text style={styles.actionText}>CONFIRM</Text>
          </TouchableOpacity>

        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const FormInput = ({ label, ...props }: any) => (
  <View style={styles.formIndividualBox}>
    <Text style={styles.text}>{label}</Text>
    <TextInput {...props} style={styles.inputBox} />
  </View>
);

export default FloatingBox;
