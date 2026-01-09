import { FontAwesome, FontAwesome6, Ionicons, MaterialIcons } from "@expo/vector-icons";
import AntDesign from '@expo/vector-icons/AntDesign';
export const settingOptions = [
    {
        tittle: "Set Theme",
        subTittle: "System Default",
        icon: <Ionicons name="color-palette" size={34} color="black" />,
        link: "/Setting/Theme"
    },
    {
        tittle: "Set Notification",
        subTittle: "ON",
        icon: <MaterialIcons name="notifications" size={34} color="black" />,
        link: "/Setting/Language"
    }, {
        tittle: "Attendance Criteria",
        subTittle: "75%",
        icon: <Ionicons name="color-palette" size={34} color="black" />,
        link: "/Setting/Notification"
    }, {
        tittle: "Logout",
        subTittle: "Logout from this account",
        icon: <Ionicons name="log-out-outline" size={34} color="black" />,
        link: "/Setting/Logout"
    }
]