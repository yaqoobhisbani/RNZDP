import React, {FC} from 'react';
import {
  View,
  ViewStyle,
  TextStyle,
  ImageStyle,
  SafeAreaView,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {
  Button,
  Header,
  Screen,
  Text,
  GradientBackground,
  AutoImage as Image,
} from '../../components';
import {color, spacing, typography} from '../../theme';
import {NavigatorParamList} from '../../navigators';

// const bowserLogo = require("./bowser.png")

const FULL: ViewStyle = {flex: 1};
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
};
const TEXT: TextStyle = {
  color: color.palette.white,
  fontFamily: typography.primary,
};
const BOLD: TextStyle = {fontWeight: 'bold'};
const HEADER: TextStyle = {
  paddingTop: spacing[3],
  paddingBottom: spacing[4] + spacing[1],
  paddingHorizontal: 0,
};
const HEADER_TITLE: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 12,
  lineHeight: 15,
  textAlign: 'center',
  letterSpacing: 1.5,
};
const TITLE_WRAPPER: TextStyle = {
  ...TEXT,
  textAlign: 'center',
};
const TITLE: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 28,
  lineHeight: 38,
  textAlign: 'center',
};
const ALMOST: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 26,
  fontStyle: 'italic',
};
const BOWSER: ImageStyle = {
  alignSelf: 'center',
  marginVertical: spacing[5],
  maxWidth: '100%',
  width: 343,
  height: 230,
};
const CONTENT: TextStyle = {
  ...TEXT,
  color: '#BAB6C8',
  fontSize: 15,
  lineHeight: 22,
  marginBottom: spacing[5],
};
const CONTINUE: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
  backgroundColor: color.palette.deepPurple,
};
const CONTINUE_TEXT: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 13,
  letterSpacing: 2,
};
const FOOTER: ViewStyle = {backgroundColor: '#20162D'};
const FOOTER_CONTENT: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
};
interface PublicProfileProps {}

export const ProfileScreen: FC<
  StackScreenProps<NavigatorParamList, 'profile'>
> = (props: PublicProfileProps) => {
  return (
    <View testID="ProfileScreen" style={FULL}>
      <Screen
        style={CONTAINER}
        preset="scroll"
        backgroundColor={color.transparent}>
        <Text style={TITLE_WRAPPER}>
          <Text style={TITLE} tx={'demoScreen.title'} />
        </Text>
        <Text style={TITLE} preset="header" tx="welcomeScreen.readyForLaunch" />
      </Screen>
    </View>
  );
};
