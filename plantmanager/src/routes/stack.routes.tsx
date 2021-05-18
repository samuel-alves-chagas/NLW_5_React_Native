import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import colors from "../styles/colors";
import { Welcome } from "../pages/Welcome";
import { UserIdentification } from "../pages/UserIdentification";
import { Confirmation } from "../pages/Confirmation";
import { PlantSelect } from "../pages/PlantSelect";

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    headerMode='none'
    screeOptions={{ cardStyle: { backgroundColor: colors.white } }}
  >
    <stackRoutes.Screen name='Welcome' component={Welcome}></stackRoutes.Screen>

    <stackRoutes.Screen
      name='UserIdentification'
      component={UserIdentification}
    ></stackRoutes.Screen>

    <stackRoutes.Screen
      name='Confirmation'
      component={Confirmation}
    ></stackRoutes.Screen>

    <stackRoutes.Screen
      name='PlantSelect'
      component={PlantSelect}
    ></stackRoutes.Screen>
  </stackRoutes.Navigator>
);

export default AppRoutes;
