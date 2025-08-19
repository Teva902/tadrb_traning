import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  TextInput,
  Dimensions,
} from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';
import styles from '../../components/styles';
import CourseCard from '../../components/courseCard';

const { width } = Dimensions.get('window');

// SVG Icons for Header
const MenuIcon = ({ color = '#374151', size = 20 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M3 12h18M3 6h18M3 18h18"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const SearchIcon = ({ color = '#6B7280', size = 18 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle
      cx="11"
      cy="11"
      r="8"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M21 21l-4.35-4.35"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const NotificationIcon = ({ color = '#6B7280', size = 18 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M13.73 21a2 2 0 01-3.46 0"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const TrainingContentScreen = () => {
  // بيانات وهمية للكورسات (9 كورسات)
  const coursesData = Array.from({ length: 9 }, (_, index) => ({
    id: index + 1,
    title: `أساسيات علاقات المستثمرين`,
    category: 'كلمات مفيدة',
    subtitle: 'بناء جسور الثقة والشفافية',
    progress: 0,
    completed: 0,
    total: 15,
    time: 30,
    pages: 15,
    exercises: 17,
    completedLessons: 5,
  }));

  const renderCourseItem = ({ item, index }) => (
    <CourseCard item={item} index={index} />
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity style={styles.menuButton}>
            <MenuIcon color="#374151" size={20} />
          </TouchableOpacity>
        </View>
        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>المحتوى التدريبي</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.searchButton}>
            <SearchIcon color="#6B7280" size={18} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.notificationButton}>
            <NotificationIcon color="#6B7280" size={18} />
            <View style={styles.notificationBadge}>
              <Text style={styles.badgeText}>2</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchSection}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="ابحث عن أي شيء"
            placeholderTextColor="#9CA3AF"
          />
        </View>
        <View style={styles.notificationLa}>
          <TouchableOpacity style={styles.notificationButton}>
            <NotificationIcon color="#6B7280" size={18} />
            <View style={styles.notificationBadge}>
              <Text style={styles.badgeText}>2</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Progress Section */}
      <View style={styles.progressSectionContainer}>
        <View style={styles.progressInfo}>
          <View style={styles.progressTextContainer}>
            <Text style={styles.progressText}>مكتمل</Text>
          </View>
          <View style={styles.progressNumbersContainer}>
            <Text style={styles.progressPercentage}>75%</Text>
            <Text style={styles.progressDetails}>15/9</Text>
          </View>
        </View>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: '75%' }]} />
        </View>
      </View>

      {/* Courses List */}
      <FlatList
        data={coursesData}
        renderItem={renderCourseItem}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default TrainingContentScreen;
