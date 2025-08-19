import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Svg, { Path, Circle, Rect } from 'react-native-svg';
import styles from './styles';

// SVG Icons for Course Stats
const TimeIcon = ({ color = '#6B7280', size = 16 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle
      cx="12"
      cy="12"
      r="10"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 6v6l4 2"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const PageIcon = ({ color = '#6B7280', size = 16 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14 2v6h6M16 13H8M16 17H8M10 9H8"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const ExerciseIcon = ({ color = '#6B7280', size = 16 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M9 11H5a2 2 0 00-2 2v5a2 2 0 002 2h4M15 11h4a2 2 0 012 2v5a2 2 0 01-2 2h-4M9 7V3a2 2 0 012-2h2a2 2 0 012 2v4M13 11v6"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

// كومبونت الكورس
const CourseCard = ({ item, index }) => {
  return (
    <View style={styles.courseCard}>
      <View style={styles.courseHeader}>
        <View style={styles.courseInfo}>
          <Text style={styles.courseCategory}>{item.category}</Text>
          <Text style={styles.courseTitle}>{item.title}</Text>
          <Text style={styles.courseSubtitle}>{item.subtitle}</Text>
        </View>
        <View style={styles.courseImageContainer}>
          <View style={styles.courseImage}>
            <Image
              source={{
                uri: 'https://via.placeholder.com/60x60/E5E7EB/6B7280?text=📊',
              }}
              style={{ width: 60, height: 60, borderRadius: 10 }}
              resizeMode="cover"
            />
          </View>
        </View>
      </View>

      {/* Progress Section */}
      <View style={styles.progressSectionCard}>
        <View style={styles.progressInfoCard}>
          <View style={styles.progressTextContainerCard}>
            <Text style={styles.progressTextCard}>مكتمل</Text>
          </View>
          <View style={styles.progressNumbersContainerCard}>
            <Text style={styles.progressPercentageCard}>0%</Text>
            <Text style={styles.progressDetailsCard}>15/9</Text>
          </View>
        </View>
        <View style={styles.progressBarCard}>
          <View style={[styles.progressFillCard, { width: '0%' }]} />
        </View>
      </View>

      {/* Course Stats */}
      <View style={styles.courseStats}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{item.exercises}</Text>
          <ExerciseIcon color="#6B7280" size={16} />
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{item.pages}</Text>
          <PageIcon color="#6B7280" size={16} />
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{item.time}</Text>
          <TimeIcon color="#6B7280" size={16} />
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{item.completedLessons}</Text>
          <Text style={styles.statLabel}>مكتمل</Text>
        </View>
      </View>

      {/* Course Actions */}
      <View style={styles.courseActions}>
        <TouchableOpacity style={styles.detailsButton}>
          <Text style={styles.detailsButtonText}>تفاصيل</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.startButton}>
          <Text style={styles.startButtonText}>بدء التعلم</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CourseCard;
