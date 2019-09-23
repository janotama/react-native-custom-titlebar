import React, { Component } from "react";
import LinearGradient from "react-native-linear-gradient";
import Feather from "react-native-vector-icons/Feather";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./Styles.js";
const global_style = styles().global;
import { RFPercentage as RF } from "react-native-responsive-fontsize";

const Titlebar = props => {
  return (
    <LinearGradient
      start={{ x: 0.0, y: 0 }}
      end={{ x: 1, y: 1.0 }}
      colors={["#9769f6", "#5249d0", "#5249d0", "#06cbd6"]}
      style={global_style.header}>
      <TouchableOpacity
        style={global_style.headerLeft}
        onPress={this.props.backAction}>
        <Feather name='chevron-left' size={RF(4)} color='white' />
      </TouchableOpacity>
      <View style={global_style.headerCenter}>
        <Text style={global_style.pageTitleFont}>
          {props.title || "This is Header"}
        </Text>
      </View>
    </LinearGradient>
  );
};
export default Titlebar;
