import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  notificationLa: {
    flex: 0.0025,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  screenContent: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  headerLeft: {
    width: 40,
  },
  menuButton: {
    padding: 5,
  },
  menuIcon: {
    fontSize: 20,
    color: '#374151',
  },
  headerCenter: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    textAlign: 'center',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 80,
    justifyContent: 'flex-end',
  },
  searchButton: {
    padding: 5,
    marginRight: 10,
  },
  searchIcon: {
    fontSize: 18,
    color: '#6B7280',
  },
  notificationButton: {
    position: 'relative',
    padding: 15,
  },
  notificationIcon: {
    fontSize: 18,
    color: '#6B7280',
  },
  notificationBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#FFD694',
    borderRadius: 10,
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
  },
  searchSection: {
    flexDirection: 'row-reverse',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
  },
  searchContainer: {
    flex: 8,
    backgroundColor: '#F3F4F6',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 12,
    height: 40,
    width: 40,
  },
  searchInput: {
    fontSize: 16,
    textAlign: 'right',
    color: '#1F2937',
    fontFamily: 'Arial',
  },
  // Progress Section Styles
  progressSectionContainer: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  progressInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  progressTextContainer: {
    alignItems: 'flex-start',
  },
  progressText: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'left',
  },
  progressNumbersContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  progressPercentage: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8B5CF6',
  },
  progressDetails: {
    fontSize: 14,
    color: '#6B7280',
  },
  progressBar: {
    height: 8,
    backgroundColor: '#E5E7EB',
    borderRadius: 4,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#8B5CF6',
    borderRadius: 4,
  },
  // Course Card Progress Styles
  progressSectionCard: {
    marginBottom: 15,
  },
  progressInfoCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  progressTextContainerCard: {
    alignItems: 'flex-start',
  },
  progressTextCard: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'left',
  },
  progressNumbersContainerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  progressPercentageCard: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#8B5CF6',
  },
  progressDetailsCard: {
    fontSize: 12,
    color: '#6B7280',
  },
  progressBarCard: {
    height: 6,
    backgroundColor: '#E5E7EB',
    borderRadius: 3,
  },
  progressFillCard: {
    height: '100%',
    backgroundColor: '#8B5CF6',
    borderRadius: 3,
  },
  listContainer: {
    padding: 20,
  },
  courseCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  courseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  courseInfo: {
    flex: 1,
  },
  courseCategory: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 5,
    textAlign: 'right',
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 5,
    textAlign: 'right',
  },
  courseSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'right',
  },
  courseImageContainer: {
    marginLeft: 15,
  },
  courseImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  courseImageText: {
    fontSize: 24,
  },
  courseStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 2,
  },
  statLabel: {
    fontSize: 12,
    color: '#6B7280',
  },
  courseActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailsButton: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginRight: 10,
  },
  detailsButtonText: {
    fontSize: 16,
    color: '#6B7280',
    fontWeight: '600',
  },
  startButton: {
    flex: 1,
    backgroundColor: '#8B5CF6',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  startButtonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  bottomNavigation: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingVertical: 12,
    paddingHorizontal: 4,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  activeTabItem: {
    backgroundColor: 'transparent',
  },
  tabIcon: {
    fontSize: 20,
    color: '#9CA3AF',
    marginBottom: 4,
  },
  activeTabIcon: {
    color: '#8B5CF6',
  },
  tabTitle: {
    fontSize: 10,
    color: '#9CA3AF',
    textAlign: 'center',
    fontWeight: '500',
    marginTop: 4,
  },
  activeTabTitle: {
    color: '#8B5CF6',
    fontWeight: '600',
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 10,
  },
  screenSubtitle: {
    fontSize: 16,
    color: '#6B7280',
  },
});

export default styles;
