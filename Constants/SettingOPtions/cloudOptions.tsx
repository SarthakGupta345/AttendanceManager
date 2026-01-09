import { AntDesign, MaterialIcons } from "@expo/vector-icons";

export const cloudOptions = [

    {
        tittle: "Backup & Restore",
        subTittle: "Upload data to cloud to never lose it",
        icon: <AntDesign name="cloud-upload" size={34} color="black" />,
        link: "/Setting/Backup"
    },
    {
        tittle: "Delete data",
        subTittle: "Delete this account data",
        icon: <MaterialIcons name="delete" size={34} color="black" />,
        link: "/Setting/Delete"
    }, {
        tittle: "Reset data",
        subTittle: "Reset this account data",
        icon: <MaterialIcons name="delete" size={34} color="black" />,
        link: "/Setting/Delete"
    },
]