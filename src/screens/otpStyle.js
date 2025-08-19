import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const otpStyle = StyleSheet.create({
  // إضافة ستايل للـ gradient container
  gradientContainer: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    minHeight: height, // ضمان أن المحتوى يغطي الشاشة كاملة
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent', // جعل الخلفية شفافة لإظهار الـ gradient
  },
  header: {
    height: height * 0.3,
    backgroundColor: 'transparent', // جعل الخلفية شفافة
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoOuterCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  logoInnerCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoTextMain: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF6B35',
    marginBottom: 2,
  },
  logoTextArabic: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8014DC',
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 40,
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // خلفية بيضاء كاملة
    borderTopLeftRadius: 60,
    marginTop: 40, // رفع المحتوى لأعلى قليلاً
    paddingBottom: 100, // إضافة مسافة كبيرة في الأسفل
    minHeight: height * 0.7, // ضمان ارتفاع كافي
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 40,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 60,
  },
  codeInput: {
    width: 79.75,
    height: 56,
    borderRadius: 12,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  codeInputFilled: {
    backgroundColor: '#8014DC',
    borderWidth: 2,
    borderColor: '#8014DC',
  },
  codeInputEmpty: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#E5E7EB',
    color: '#1F2937',
  },
  loginButton: {
    backgroundColor: '#8014DC',
    borderRadius: 15,
    height: 55,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#8014DC',
    marginTop: 100,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'ElMessiri-Bold',
  },
  bottomIndicator: {
    width: 134,
    height: 5,
    backgroundColor: '#000000',
    borderRadius: 2.5,
    alignSelf: 'center',
    marginBottom: 15,
  },
});

export default otpStyle;
