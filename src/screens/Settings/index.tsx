/* eslint-disable react-native/no-inline-styles */
import * as React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Search from "../../assets/svg/Home/search.svg";
import Notifications from "../../assets/svg/Home/notifications.svg";
import { ScrollView } from "moti";
import { moderateScale } from "react-native-size-matters";
import Text from "../../components/Text";
import Account from "../../assets/svg/Settings/Account.svg";
import AccountSettings from "../../assets/svg/Settings/AccountSettings.svg";
import Arrow from "../../assets/svg/Settings/Arrow.svg";
import BoxSettings from "./BoxOfSettings";
import ManageSub from "../../assets/svg/Settings/ManageSub.svg";
import ManageBranches from "../../assets/svg/Settings/ManageBranches.svg";
import CustomQuestions from "../../assets/svg/Settings/CustomQuestions.svg";
import ChangePasswordPic from "../../assets/svg/Settings/ChangePassword.svg";
import ChangeLanguagePic from "../../assets/svg/Settings/ChangeLang.svg";
import Support from "../../assets/svg/Settings/Support.svg";
import Update from "../../assets/svg/Settings/Update.svg";
import ManageNotif from "../../assets/svg/Settings/ManageNotif.svg";
import HelpCenter from "../../assets/svg/Settings/HelpCenter.svg";
import FAQ from "../../assets/svg/Settings/FAQs.svg";
import ContactUs from "../../assets/svg/Settings/ContactUs.svg";
import Explore from "../../assets/svg/Settings/Explore.svg";
import RateUs from "../../assets/svg/Settings/RateUs.svg";
import AboutCompany from "../../assets/svg/Settings/AboutCompany.svg";
import PrivacyPolicyPic from "../../assets/svg/Settings/PrivacyPolicy.svg";
import Terms from "../../assets/svg/Settings/Terms.svg";
import { tbColors } from "../../config/appConfig";
import ChangePassword from "./ChangePassword/index";
import ChangeLanguage from "./ChangeLanguage";
import { useState } from "react";
import TermsOfUse from "./TermsOfUse";
import PrivacyPolicy from "./PrivacyPolicy";
import ProfileImg from "../../assets/svg/Settings/ProfileImg.svg";

interface SettingsProps {
  navigation: any;
}

const Settings = (props: SettingsProps) => {
  const [ChangePasswordPopup, setChangePasswordPopup] = useState({
    show: false,
  });

  const [ChangeLanguagePopup, setChangeLanguagePopup] = useState({
    show: false,
  });
  const [TermsOfUsePopup, setTermsOfUsePopup] = useState({
    show: false,
  });

  const [PrivacyPolicyPopup, setPrivacyPolicyPopup] = useState({
    show: false,
  });
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <LinearGradient
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0 }}
        style={{ paddingBottom: 10 }}
        colors={[
          "#A4E6DF",
          "#BCEDE8",
          "#D4F3F0",
          "#EBFAF8",
          tbColors.white,
          tbColors.white,
          tbColors.white,
        ]}
      >
        <View style={styles.container}>
          <View style={styles.leftSection}>
            <Text color="#202B36" fontSize={24} bold>
              Settings
            </Text>
          </View>
          <View style={styles.rightSection}>
            <TouchableOpacity style={styles.iconCircle}>
              <Search />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate("Notifications");
              }}
              style={styles.iconCircle}
            >
              <Notifications />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ alignItems: "center", marginTop: moderateScale(5) }}>
          <ProfileImg />
          <View
            style={{
              backgroundColor: "#FFD166",
              paddingVertical: 4,
              paddingHorizontal: 8,
              borderRadius: 16,
              marginTop: -10,
            }}
          >
            <Text fontSize={14} bold>
              LEVEL 1 SHIELDER
            </Text>
          </View>
        </View>
      </LinearGradient>
      <LinearGradient
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0 }}
        colors={[
          //   '#2EC4B6',
          //   '#3CC8BB',
          //   '#46CBBE',
          //   '#59D0C5',
          //   '#69D5CB',
          //   '#7CDAD1',
          //   '#8DDFD7',
          "#A4E6DF",
          "#BCEDE8",
          "#D4F3F0",
          "#EBFAF8",
          tbColors.white,
          tbColors.white,
          tbColors.white,
        ]}
      >
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text bold fontSize={32} color="#2EC4B6">
            EMAD AL SAADI
          </Text>
          <Text
            style={{
              marginTop: moderateScale(8),
              marginBottom: moderateScale(20),
            }}
            color="#202B36"
            fontSize={14}
            bold
          >
            +962 123 45 56
          </Text>
        </View>
      </LinearGradient>
      <View
        style={{
          height: "100%",
          backgroundColor: "rgba(250, 250, 252, 1)",
        }}
      >
        <View
          style={{
            marginHorizontal: moderateScale(20),
            marginVertical: moderateScale(20),
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Account />
            <Text
              style={{ marginHorizontal: moderateScale(8) }}
              bold
              fontSize={18}
            >
              Account Management
            </Text>
          </View>
          <View style={{ marginVertical: moderateScale(10) }} />
          <BoxSettings
            title={"Account Details"}
            icon={<Arrow />}
            navigation={props.navigation}
            titleIcon={<AccountSettings />}
            onPress={() => {
              props.navigation.navigate("AccountDetails");
            }}
          />
          <BoxSettings
            title={"Rating & Feedback"}
            icon={<Arrow />}
            onPress={() => {
              props.navigation.navigate("Rating");
            }}
            navigation={props.navigation}
            titleIcon={<RateUs />}
          />
          {/* <BoxSettings
            title={"Change Password"}
            icon={<Arrow />}
            navigation={props.navigation}
            titleIcon={<ChangePasswordPic />}
            onPress={() => {
              setChangePasswordPopup({ show: true });
            }}
          />
          <BoxSettings
            title={"Change Language"}
            icon={<Arrow />}
            navigation={props.navigation}
            titleIcon={<ChangeLanguagePic />}
            onPress={() => {
              setChangeLanguagePopup({ show: true });
            }}
          />
          <BoxSettings
            title={"Manage Brands & Branches"}
            icon={<Arrow />}
            onPress={() => {
              props.navigation.navigate("ManageBrands");
            }}
            navigation={props.navigation}
            titleIcon={<ManageBranches />}
          />
          <BoxSettings
            title={"Manage Subscription"}
            icon={<Arrow />}
            navigation={props.navigation}
            titleIcon={<ManageSub />}
          />
          <BoxSettings
            title={"Custom Questions Library"}
            icon={<Arrow />}
            onPress={() => {
              props.navigation.navigate("QuestionsLib");
            }}
            navigation={props.navigation}
            titleIcon={<CustomQuestions />}
          /> */}

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: moderateScale(30),
              marginBottom: moderateScale(15),
            }}
          >
            <Support />
            <Text
              style={{ marginHorizontal: moderateScale(8) }}
              bold
              fontSize={18}
            >
              Support
            </Text>
          </View>
          <BoxSettings
            title={"Updates & Training"}
            icon={<Arrow />}
            onPress={() => {
              props.navigation.navigate("UpdateAndTraining");
            }}
            navigation={props.navigation}
            titleIcon={<Update />}
          />
          <BoxSettings
            title={"Manage Notifications"}
            icon={<Explore />}
            onPress={() => {}}
            navigation={props.navigation}
            titleIcon={<ManageNotif />}
          />
          <BoxSettings
            title={"FAQs"}
            icon={<Arrow />}
            onPress={() => {
              props.navigation.navigate("FAQScreen");
            }}
            navigation={props.navigation}
            titleIcon={<FAQ />}
          />
          <BoxSettings
            title={"Contact Us"}
            icon={<Arrow />}
            onPress={() => {
              props.navigation.navigate("ContactUs");
            }}
            navigation={props.navigation}
            titleIcon={<ContactUs />}
          />
          <BoxSettings
            title={"Help Center"}
            icon={<Arrow />}
            onPress={() => {
              props.navigation.navigate("HelpCenter");
            }}
            navigation={props.navigation}
            titleIcon={<HelpCenter />}
          />

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: moderateScale(30),
              marginBottom: moderateScale(15),
            }}
          >
            <AboutCompany width={24} height={24} />
            <Text
              style={{ marginHorizontal: moderateScale(8) }}
              bold
              fontSize={18}
            >
              About CX Shield
            </Text>
          </View>
          <BoxSettings
            title={"About Company"}
            icon={<Arrow />}
            onPress={() => {
              props.navigation.navigate("AboutCompany");
            }}
            navigation={props.navigation}
            titleIcon={<AboutCompany />}
          />
          <BoxSettings
            title={"Rate App"}
            icon={<Explore />}
            onPress={() => {}}
            navigation={props.navigation}
            titleIcon={<RateUs />}
          />
          <BoxSettings
            title={"Terms of Use"}
            icon={<Arrow />}
            onPress={() => {
              setTermsOfUsePopup({ show: true });
            }}
            navigation={props.navigation}
            titleIcon={<Terms />}
          />
          <BoxSettings
            title={"Privacy Policy"}
            icon={<Arrow />}
            onPress={() => {
              setPrivacyPolicyPopup({ show: true });
            }}
            navigation={props.navigation}
            titleIcon={<PrivacyPolicyPic />}
          />
        </View>
        <View
          style={{ alignItems: "center", marginVertical: moderateScale(24) }}
        >
          <Text color={tbColors.grey} fontSize={16} bold>
            Logout
          </Text>
        </View>
        <View style={{ height: moderateScale(100) }} />
      </View>

      {ChangePasswordPopup.show && (
        <ChangePassword
          isModalVisible={ChangePasswordPopup.show}
          toggleModal={() => {
            setChangePasswordPopup({ show: false });
          }}
          navigation={props.navigation}
        />
      )}

      {ChangeLanguagePopup.show && (
        <ChangeLanguage
          isModalVisible={ChangeLanguagePopup.show}
          toggleModal={() => {
            setChangeLanguagePopup({ show: false });
          }}
          navigation={props.navigation}
        />
      )}

      {TermsOfUsePopup.show && (
        <TermsOfUse
          isModalVisible={TermsOfUsePopup.show}
          toggleModal={() => {
            setTermsOfUsePopup({ show: false });
          }}
          navigation={props.navigation}
        />
      )}

      {PrivacyPolicyPopup.show && (
        <PrivacyPolicy
          isModalVisible={PrivacyPolicyPopup.show}
          toggleModal={() => {
            setPrivacyPolicyPopup({ show: false });
          }}
          navigation={props.navigation}
        />
      )}
    </ScrollView>
  );
};

export default Settings;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: moderateScale(60),
    paddingBottom: 20,
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  rightSection: {
    flexDirection: "row",
    gap: 10,
  },
  iconCircle: {
    width: 44,
    height: 44,
    backgroundColor: "#ffffff",
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: moderateScale(12),
  },
  settingBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderRadius: moderateScale(8),
    paddingVertical: moderateScale(8),
    paddingHorizontal: moderateScale(8),
    borderColor: "#FFFFFF",
    backgroundColor: "#FFFFFF",
    marginVertical: moderateScale(8),
  },
});
