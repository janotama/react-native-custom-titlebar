"use strict";

import { Dimensions, StyleSheet, Platform } from "react-native";
import { RFPercentage as RF } from "react-native-responsive-fontsize";

function getWidthSize(percentage) {
  return Dimensions.get("window").width * (percentage / 100);
}

export default function styles() {
  const color = {
    purple_1: "#5249d0",
    purple_2: "#9869F7"
  };
  var global;
  if (Platform.OS === "ios") {
    global = StyleSheet.create({
      header: {
        paddingTop: RF(2),
        height: RF(10),
        width: getWidthSize(100),
        // backgroundColor: 'yellow',
        flexDirection: "row"
      },
      headerLeft: {
        height: RF(8),
        marginTop: RF(1),
        width: getWidthSize(15),
        justifyContent: "center",
        alignItems: "center"
      },
      headerCenter: {
        height: RF(8),
        marginTop: RF(1),
        width: getWidthSize(70),
        justifyContent: "center",
        alignItems: "center"
      },
      headerRight: {
        height: RF(8),
        width: getWidthSize(15),
        justifyContent: "center",
        alignItems: "center"
      },
      pageTitleFont: {
        fontFamily: "lato-regular",
        fontSize: RF(2),
        color: "#fff"
      },
      separator: {
        height: RF(8),
        width: getWidthSize(3)
      }
    });
  } else {
    global = StyleSheet.create({
      header: {
        height: RF(8),
        width: getWidthSize(100),
        // backgroundColor: 'yellow',
        flexDirection: "row"
      },
      headerLeft: {
        height: RF(8),
        width: getWidthSize(15),
        justifyContent: "center",
        alignItems: "center"
      },
      headerCenter: {
        height: RF(8),
        width: getWidthSize(70),
        justifyContent: "center"
      },
      headerRight: {
        height: RF(8),
        width: getWidthSize(15),
        justifyContent: "center",
        alignItems: "center"
      },
      pageTitleFont: {
        fontFamily: "lato-regular",
        fontSize: RF(2),
        color: "#fff"
      },
      separator: {
        height: RF(8),
        width: getWidthSize(3)
      }
    });
  }

  const data = {
    global: global
  };

  return data;
}
