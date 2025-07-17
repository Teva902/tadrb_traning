import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Dimensions,
  SafeAreaView,Image
} from 'react-native';
import otpStyle from './otpStyle';
import loginStyle from '../auth/LoginStyle';

const OTPScreen = () => {
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
    <SafeAreaView style={otpStyle.container}>
      <StatusBar barStyle="light-content" backgroundColor="#8B5CF6" />

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
          تم إرسال الكود إلى حسابك{'\n'}
          Example@Gmail.Com
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
          <Text style={otpStyle.loginButtonText}>تسجيل الدخول</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom indicator */}
      <View style={otpStyle.bottomIndicator} />
    </SafeAreaView>
  );
};

export default OTPScreen;
