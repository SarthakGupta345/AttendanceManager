import { Redirect } from "expo-router";

export default function Index() {
  // useEffect(() => {
  //   initDB();
  // }, []);

  return (
   <Redirect href="/(tabs)/Home" />
  );
}
