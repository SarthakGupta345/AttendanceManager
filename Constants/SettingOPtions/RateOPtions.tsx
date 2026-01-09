import { FontAwesome6, Ionicons, MaterialIcons } from "@expo/vector-icons";

export const deviceOptions = [
    {
        tittle: "Rate on Playstore",
        subTittle: "Delete this account data",
        icon: <MaterialIcons name="delete" size={34} color="black" />,
        link: "/Setting/Delete"
    }, {
        tittle: "Premium Plan",
        subTittle: "Upgrade to premium plan to unlock all features",
        icon: <FontAwesome6 name="crown" size={34} color="black" />,
        link: "/Setting/Language"
    },

    {
        tittle: "About",
        subTittle: "Version 1.0.0",
        icon: <Ionicons name="information-circle" size={34} color="black" />,
        link: "/Setting/About"
    }
]