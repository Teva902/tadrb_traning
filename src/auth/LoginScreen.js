import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Dimensions,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import loginStyle from './LoginStyle';
import { useNavigation } from '@react-navigation/native';




const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <ScrollView>
      <SafeAreaView style={loginStyle.container}>
        <StatusBar barStyle="light-content" backgroundColor="#8B5CF6" />

        {/* Header with gradient background */}
        <View style={loginStyle.header}>
          {/* Status bar info */}

          {/* Logo container */}
          <View style={loginStyle.logoContainer}>
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
        <View style={loginStyle.content}>
          <Text style={loginStyle.title}>تسجيل الدخول</Text>

          {/* Email section */}
          <Text style={loginStyle.inputLabel}>البريد الإلكتروني</Text>
          <View style={loginStyle.inputContainer}>
            <TextInput
              style={loginStyle.input}
              placeholder="Example@Email.Com"
              placeholderTextColor="#9CA3AF"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              textAlign="left"
            />
            <Text style={loginStyle.inputIcon}>✉️</Text>
          </View>

          {/* Password section */}
          <Text style={loginStyle.inputLabel}>كلمة المرور</Text>
          <View style={loginStyle.inputContainer}>
            <TextInput
              style={loginStyle.input}
              placeholder="أدخل كلمة المرور"
              placeholderTextColor="#9CA3AF"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              textAlign="right"
            />
            <TouchableOpacity
              style={loginStyle.eyeIcon}
              onPress={() => setShowPassword(!showPassword)}
            >
              <Text style={loginStyle.inputIcon}>👁️</Text>
            </TouchableOpacity>
          </View>

          {/* Login button */}
          <TouchableOpacity
            style={loginStyle.loginButton}
            onPress={() => navigation.navigate('OTP')}
          >
            <Text style={loginStyle.loginButtonText}>تسجيل الدخول</Text>
          </TouchableOpacity>

          {/* Forgot password link */}
          <TouchableOpacity style={loginStyle.forgotPassword}>
            <Text style={loginStyle.forgotPasswordText}>
              هل نسيت كلمة المرور؟
            </Text>
          </TouchableOpacity>
        </View>

        {/* Bottom indicator */}
        <View style={loginStyle.bottomIndicator} />
      </SafeAreaView>
    </ScrollView>
  );
};

export default LoginScreen;
