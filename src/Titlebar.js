import React, { Component } from "react";
import LinearGradient from "react-native-linear-gradient";
import Feather from "react-native-vector-icons/Feather";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import styles from "./Styles.js";
const global_style = styles().global;
import { RFPercentage as RF } from "react-native-responsive-fontsize";

/*
props : 
- title [string]
- backAction [function]
- backgroundColor [array]
- leftIcon [string]
- isBackEnabled [bool]
*/

function getWidthSize(percentage) {
  return Dimensions.get("window").width * (percentage / 100);
}

const Titlebar = props => {
  return (
    <LinearGradient
      start={{ x: 0.0, y: 0 }}
      end={{ x: 1, y: 1.0 }}
      colors={props.backgroundColor}
      style={global_style.header}>
      {
        props.isBackEnabled ?
          props.backAction !== undefined ? (
            <TouchableOpacity
              style={global_style.headerLeft}
              onPress={props.backAction}>
              {/* <Feather name='menu' size={RF(4)} color='white' /> */}
            </TouchableOpacity>
          ) : (
              <TouchableOpacity
                style={global_style.headerLeft}>
                <Feather name='menu' size={RF(4)} color='white' />
              </TouchableOpacity>
            )
          :
          null
      }
      <View style={[global_style.headerCenter]}>
        <Text style={[global_style.pageTitleFont, { marginLeft: props.isBackEnabled ? getWidthSize(0) : getWidthSize(2) }]}>
          {props.title || "This is Header"}
        </Text>
      </View>
    </LinearGradient>
  );
};
export default Titlebar;
