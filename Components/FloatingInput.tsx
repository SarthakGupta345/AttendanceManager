import { View, TextInput, Animated } from "react-native";
import { useRef, useState } from "react";

export const FloatingInput = ({ label, ...props }) => {
    const [focused, setFocused] = useState(false);
    const animated = useRef(new Animated.Value(0)).current;

    const handleFocus = () => {
        setFocused(true);
        Animated.timing(animated, {
            toValue: 1,
            duration: 200,
            useNativeDriver: false,
        }).start();
    };

    const handleBlur = () => {
        setFocused(false);
        Animated.timing(animated, {
            toValue: 0,
            duration: 200,
            useNativeDriver: false,
        }).start();
    };

    const labelStyle = {
        position: "absolute",
        left: 12,
        top: animated.interpolate({
            inputRange: [0, 1],
            outputRange: [14, -8],
        }),
        fontSize: animated.interpolate({
            inputRange: [0, 1],
            outputRange: [16, 12],
        }),
        color: "#6B7280",
        backgroundColor: "#fff",
        paddingHorizontal: 4,
    };

    return (
        <View style={{ paddingTop: 18 }}>
            <Animated.Text style={labelStyle}>{label}</Animated.Text>

            <TextInput
                {...props}
                style={{
                    height: 48,
                    borderWidth: 1,
                    borderRadius: 10,
                    paddingHorizontal: 12,
                }}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
        </View>
    );
};
