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
import LinearGradient from 'react-native-linear-gradient';
import loginStyle from './LoginStyle';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

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
      style={loginStyle.gradientContainer}
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <SafeAreaView style={loginStyle.container}>
        <ScrollView contentContainerStyle={loginStyle.scrollViewContent}>
          {/* Header with gradient background */}
          <View style={loginStyle.header}>
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
            <View>
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
                  textAlign="right"
                />
                <View style={loginStyle.iconContainer}>
                  <Image
                    source={require('../../assets/icons/email.png')}
                    style={loginStyle.iconImage}
                    resizeMode="contain"
                  />
                </View>
              </View>

              {/* Password section */}
              <Text style={loginStyle.inputLabel}>كلمة المرور</Text>
              <View style={loginStyle.inputContainer}>
                <TouchableOpacity
                  style={loginStyle.startIcon}
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Image
                    source={require('../../assets/icons/eye.png')}
                    style={loginStyle.iconImage}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
                <TextInput
                  style={loginStyle.input}
                  placeholder="أدخل كلمة المرور"
                  placeholderTextColor="#9CA3AF"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  textAlign="right"
                />

                <TouchableOpacity style={loginStyle.eyeIcon}>
                  <Image
                    source={
                      showPassword
                        ? require('../../assets/icons/key.png')
                        : require('../../assets/icons/key.png')
                    }
                    style={loginStyle.iconImage}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
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
                هل نسيت كلمة السر ؟
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default LoginScreen;
