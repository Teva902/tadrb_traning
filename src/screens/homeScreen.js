import { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import Svg, { Path, Circle, Rect } from 'react-native-svg';
import styles from '../../components/styles';
import TrainingTabScreen from './traningTabscreen';
import TrainingContentScreen from './traningContentscreen';
import SupportScreen from './supportScreen';
import AchievementsScreen from './achievementsScreen';
import ProfileScreen from './profileScreen';

// SVG Icons Components
const HomeIcon = ({ color = '#9CA3AF', size = 20 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9 22V12h6v10"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const SupportIcon = ({ color = '#9CA3AF', size = 20 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const AchievementsIcon = ({ color = '#9CA3AF', size = 20 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle
      cx="12"
      cy="8"
      r="7"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const TrainingIcon = ({ color = '#9CA3AF', size = 20 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const ProfileIcon = ({ color = '#9CA3AF', size = 20 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Circle
      cx="12"
      cy="7"
      r="4"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState(3); // المحتوى التدريبي كتاب افتراضي

  const tabs = [
    {
      id: 0,
      title: 'الرئيسية',
      icon: HomeIcon,
      component: TrainingContentScreen,
    },
    {
      id: 1,
      title: 'الدعم الفني',
      icon: SupportIcon,
      component: SupportScreen,
    },
    {
      id: 2,
      title: 'إنجازاتك',
      icon: AchievementsIcon,
      component: AchievementsScreen,
    },
    {
      id: 3,
      title: 'المحتوى التدريبي',
      icon: TrainingIcon,
      component: TrainingTabScreen,
    },
    {
      id: 4,
      title: 'الملف الشخصي',
      icon: ProfileIcon,
      component: ProfileScreen,
    },
  ];

  const renderActiveScreen = () => {
    const ActiveComponent = tabs[activeTab].component;
    return <ActiveComponent />;
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* Active Screen */}
      <View style={styles.screenContent}>{renderActiveScreen()}</View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        {tabs.map(tab => {
          const IconComponent = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <TouchableOpacity
              key={tab.id}
              style={[styles.tabItem, isActive && styles.activeTabItem]}
              onPress={() => setActiveTab(tab.id)}
            >
              <IconComponent
                color={isActive ? '#8B5CF6' : '#9CA3AF'}
                size={20}
              />
              <Text
                style={[styles.tabTitle, isActive && styles.activeTabTitle]}
              >
                {tab.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
