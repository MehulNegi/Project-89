import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigation from "../navigation/DrawerNavigation"; 

export default class DashboardScreen extends Component {
  render() {
    return (
      <NavigationContainer>
        <DrawerNavigation />
      </NavigationContainer>
    );
  }
}