import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Dimensions,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import otpStyle from './otpStyle';
import loginStyle from '../auth/LoginStyle';
import { useNavigation } from '@react-navigation/native';

const OTPScreen = () => {
  const navigation = useNavigation();
  const [code, setCode] = useState(['', '', '', '']);
  const inputRefs = useRef([]);

  const handleCodeChange = (value, index) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Move to next input if value is entered
    if (value && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleBackspace = (value, index) => {
    if (!value && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <LinearGradient
      colors={[
        '#8014DC',
        '#9624BE',
        '#AC33A0',
        '#B43896',
        '#C94779',
        '#FE6C31',
      ]}
      locations={[0, 0.3, 0.4, 0.6, 0.8, 1]}
      style={otpStyle.gradientContainer}
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <SafeAreaView style={otpStyle.container}>
        <ScrollView contentContainerStyle={otpStyle.scrollViewContent}>
          {/* Header with gradient background */}
          <View style={otpStyle.header}>
            {/* Logo container */}
            <View style={otpStyle.logoContainer}>
              <View style={loginStyle.logoWrapper}>
                <Image
                  source={require('../../assets/images/logo.png')}
                  style={loginStyle.logo}
                  resizeMode="contain"
                />
              </View>
            </View>
          </View>

          {/* Main content */}
          <View style={otpStyle.content}>
            <Text style={otpStyle.title}>المصادقة الثنائية</Text>

            <Text style={otpStyle.subtitle}>
              تم أرسال الكود إلي حساب Example@gmail.com
            </Text>

            {/* Code input section */}
            <View style={otpStyle.codeContainer}>
              {code.map((digit, index) => (
                <TextInput
                  key={index}
                  ref={ref => (inputRefs.current[index] = ref)}
                  style={[
                    otpStyle.codeInput,
                    digit ? otpStyle.codeInputFilled : otpStyle.codeInputEmpty,
                  ]}
                  value={digit}
                  onChangeText={value => handleCodeChange(value, index)}
                  onKeyPress={({ nativeEvent }) => {
                    if (nativeEvent.key === 'Backspace') {
                      handleBackspace(digit, index);
                    }
                  }}
                  keyboardType="numeric"
                  maxLength={1}
                  textAlign="center"
                />
              ))}
            </View>

            {/* Login button */}
            <TouchableOpacity style={otpStyle.loginButton}>
              <Text
                style={otpStyle.loginButtonText}
                onPress={() => navigation.navigate('HomeScreen')}
              >
                تسجيل الدخول
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default OTPScreen;
