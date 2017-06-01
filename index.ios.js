import React, { Component } from "react";
import PropTypes from "prop-types";

import { AppRegistry, StyleSheet, Text, View, TextInput } from "react-native";

console.ignoredYellowBox = ['Warning: Each', "Warning: Failed prop type"];

const PropTypeTest = ({ value }) => <View><Text>{value}</Text></View>

PropTypeTest.propTypes = {
  value: PropTypes.string.isRequired,
}
export default class disable_yellow_box extends Component {
  render() {
    const arrayOfItems = ["Text", "Text2", "Text3"];
    return (
      <View style={styles.container}>
        {arrayOfItems.map(text => <Text>{text}</Text>)}
        <PropTypeTest value={5} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

AppRegistry.registerComponent("disable_yellow_box", () => disable_yellow_box);
