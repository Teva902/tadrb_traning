import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TextInput,
  Dimensions,
  Image,
} from 'react-native';
import styles from '../../components/styles';
const SupportScreen = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.screenTitle}>الدعم الفني</Text>
    <Text style={styles.screenSubtitle}>قريباً...</Text>
  </View>
);
export default SupportScreen; 