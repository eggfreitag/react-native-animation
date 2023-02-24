import { NavigationContainer } from "@react-navigation/native";

import MasterNav from "./src/navigators/MasterNav";

const App = () => {
  return (
    <NavigationContainer>
      <MasterNav />
    </NavigationContainer>
  );
};

export default App;
