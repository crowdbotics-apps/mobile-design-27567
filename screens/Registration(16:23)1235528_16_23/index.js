import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "../../modules/utils"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c68/9e83/a454b4ef9f90b92af48f466e03c28a63"
        }}
        style={styles.ImageBackground_16_24}
      />
      <View style={styles.View_16_25}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8996/3291/724e3078d9340cf16f2a4c62fa5e9b57"
          }}
          style={styles.ImageBackground_I16_25_4_11}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b55/191e/2188a9dc470e6ef22dab7a9e27541c6b"
          }}
          style={styles.ImageBackground_I16_25_4_9}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e363/cecd/6c40504135b7ae012bab95ccecb31097"
          }}
          style={styles.ImageBackground_I16_25_4_7}
        />
        <View style={styles.View_I16_25_6_1}>
          <Text style={styles.Text_I16_25_6_1}>9:40 </Text>
        </View>
      </View>
      <View style={styles.View_16_65}>
        <View style={styles.View_I16_65_16_15} />
        <View style={styles.View_I16_65_16_16}>
          <Text style={styles.Text_I16_65_16_16}>Register</Text>
        </View>
      </View>
      <View style={styles.View_19_13}>
        <Text style={styles.Text_19_13}>Welcome On The App</Text>
      </View>
      <View style={styles.View_19_14}>
        <View style={styles.View_19_15}>
          <Text style={styles.Text_19_15}>
            let’s help you meet up your tasks
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("31_0"))
        }
      >
        <View style={styles.View_22_17}>
          <View style={styles.View_22_18}>
            <Text style={styles.Text_22_18}>
              Aready have an account ? Sign In
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.View_22_4}>
        <View style={styles.View_22_3}>
          <View style={styles.View_22_0} />
          <View style={styles.View_22_2}>
            <Text style={styles.Text_22_2}> Enter Your Full Name</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_22_5}>
        <View style={styles.View_I22_5_22_3}>
          <View style={styles.View_I22_5_22_0} />
          <View style={styles.View_I22_5_22_2}>
            <Text style={styles.Text_I22_5_22_2}>Enter Password</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_22_13}>
        <View style={styles.View_I22_13_22_3}>
          <View style={styles.View_I22_13_22_0} />
          <View style={styles.View_I22_13_22_2}>
            <Text style={styles.Text_I22_13_22_2}>Confirm Password</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_22_9}>
        <View style={styles.View_I22_9_22_3}>
          <View style={styles.View_I22_9_22_0} />
          <View style={styles.View_I22_9_22_2}>
            <Text style={styles.Text_I22_9_22_2}>Enter Your Email</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  ImageBackground_16_24: {
    width: wp("80%"),
    height: hp("36.885245901639344%"),
    top: hp("-13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-23.466666666666665%")
  },
  View_16_25: {
    width: wp("86.66666666666667%"),
    minWidth: wp("86.66666666666667%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("1.366120218579235%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I16_25_4_11: {
    flexGrow: 1,
    width: wp("4.8%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.86666666666666%"),
    top: hp("0.13661202185792343%")
  },
  ImageBackground_I16_25_4_9: {
    flexGrow: 1,
    width: wp("5.066666666666666%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.93333333333332%"),
    top: hp("0.13661202185792343%")
  },
  ImageBackground_I16_25_4_7: {
    flexGrow: 1,
    width: wp("4.8%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.53333333333333%"),
    top: hp("0.13661202185792343%")
  },
  View_I16_25_6_1: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I16_25_6_1: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_16_65: {
    width: wp("86.66666666666667%"),
    minWidth: wp("86.66666666666667%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("86.88524590163934%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I16_65_16_15: {
    flexGrow: 1,
    width: wp("86.66666666666667%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(80, 194, 201, 1)"
  },
  View_I16_65_16_16: {
    flexGrow: 1,
    width: wp("86.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_I16_65_16_16: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_13: {
    width: wp("52.53333333333333%"),
    minWidth: wp("52.53333333333333%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.733333333333334%"),
    top: hp("31.557377049180328%")
  },
  Text_19_13: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_14: {
    width: wp("77.86666666666666%"),
    minWidth: wp("77.86666666666666%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.200000000000001%"),
    top: hp("37.97814207650273%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_19_15: {
    width: wp("72.53333333333333%"),
    minWidth: wp("72.53333333333333%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%"),
    top: hp("1.3661202185792405%")
  },
  Text_19_15: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_17: {
    width: wp("60.266666666666666%"),
    minWidth: wp("60.266666666666666%"),
    height: hp("5.601092896174864%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("97.81420765027322%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_22_18: {
    width: wp("54.93333333333334%"),
    minWidth: wp("54.93333333333334%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%"),
    top: hp("1.3661202185792405%")
  },
  Text_22_18: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_4: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("48.77049180327869%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_22_3: {
    flexGrow: 1,
    width: wp("86.66666666666667%"),
    height: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666667%"),
    top: hp("1.3661202185792334%")
  },
  View_22_0: {
    width: wp("86.66666666666667%"),
    minWidth: wp("86.66666666666667%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_22_2: {
    width: wp("33.33333333333333%"),
    minWidth: wp("33.33333333333333%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.199999999999998%"),
    top: hp("2.185792349726775%")
  },
  Text_22_2: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_5: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("65.98360655737704%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I22_5_22_3: {
    flexGrow: 1,
    width: wp("86.66666666666667%"),
    height: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666667%"),
    top: hp("1.3661202185792405%")
  },
  View_I22_5_22_0: {
    width: wp("86.66666666666667%"),
    minWidth: wp("86.66666666666667%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_I22_5_22_2: {
    width: wp("24.266666666666666%"),
    minWidth: wp("24.266666666666666%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.199999999999998%"),
    top: hp("2.185792349726782%")
  },
  Text_I22_5_22_2: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_13: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("74.59016393442623%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I22_13_22_3: {
    flexGrow: 1,
    width: wp("86.66666666666667%"),
    height: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666667%"),
    top: hp("1.3661202185792263%")
  },
  View_I22_13_22_0: {
    width: wp("86.66666666666667%"),
    minWidth: wp("86.66666666666667%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_I22_13_22_2: {
    width: wp("28.53333333333333%"),
    minWidth: wp("28.53333333333333%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.199999999999998%"),
    top: hp("2.185792349726782%")
  },
  Text_I22_13_22_2: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_9: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("57.377049180327866%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I22_9_22_3: {
    flexGrow: 1,
    width: wp("86.66666666666667%"),
    height: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666667%"),
    top: hp("1.3661202185792334%")
  },
  View_I22_9_22_0: {
    width: wp("86.66666666666667%"),
    minWidth: wp("86.66666666666667%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_I22_9_22_2: {
    width: wp("25.6%"),
    minWidth: wp("25.6%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.199999999999998%"),
    top: hp("2.185792349726782%")
  },
  Text_I22_9_22_2: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
