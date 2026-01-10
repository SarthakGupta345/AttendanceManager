import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "@/styles/login";
import { Image } from "expo-image";
import { AntDesign } from "@expo/vector-icons";

import teacher from "../assets/images/teacher.png";

const LoginPage = () => {
    return (
        <SafeAreaView style={styles.container}>
            {/* Skip Button */}
            <TouchableOpacity style={styles.skipBtn} activeOpacity={0.8}>
                <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>

            {/* Heading */}
            <Text style={styles.title}>
                Login to never lose your data
            </Text>

            {/* Illustration */}
            <Image
                source={teacher}
                contentFit="contain"
                transition={200}
                style={styles.image}
            />

            {/* Form */}
            <KeyboardAvoidingView>
                <View style={styles.card}>
                    <Text style={styles.label}>Email</Text>

                    <View style={styles.inputBox}>
                        <TextInput
                            style={styles.input}
                            placeholder="example@email.com"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            placeholderTextColor="#9CA3AF"
                        />
                    </View>

                    {/* Divider */}
                    <Text style={styles.orText}>or continue with</Text>

                    {/* Social Login */}
                    <View style={styles.socialRow}>
                        <TouchableOpacity style={styles.socialBtn}>
                            <AntDesign name="google" size={28} color="#EA4335" />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.socialBtn}>
                            <AntDesign name="github" size={28} color="#111827" />
                        </TouchableOpacity>
                    </View>

                    {/* Footer */}
                    <View style={styles.footer}>
                        <Text style={styles.footerText}>Don't have an account?</Text>
                        <TouchableOpacity>
                            <Text style={styles.signupText}> Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </KeyboardAvoidingView>
            <TouchableOpacity style={styles.continueBtn}>
                <Text style={styles.continueText}>Continue</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default LoginPage;
