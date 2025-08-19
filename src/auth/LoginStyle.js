import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const loginStyle = StyleSheet.create({
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
    height: height * 0.35, // تقليل ارتفاع الـ header قليلاً
    backgroundColor: 'transparent', // جعل الخلفية شفافة
    paddingTop: 10,
    borderBottomLeftRadius: 30,
  },
  signalIcon: {
    color: '#FFFFFF',
    fontSize: 16,
    marginRight: 5,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // logoCircle: {
  //   width: 100,
  //   height: 100,
  //   borderRadius: 50,
  //   backgroundColor: 'rgba(255, 255, 255, 0.2)', // جعل الخلفية شبه شفافة
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   shadowColor: '#000',
  //   shadowOffset: {
  //     width: 0,
  //     height: 4,
  //   },
  //   shadowOpacity: 0.3,
  //   shadowRadius: 6,
  //   elevation: 8,
  // },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF', // تغيير لون النص إلى أبيض
  },
  // logoWrapper: {
  //   backgroundColor: '#fff',
  //   borderRadius: 60,
  //   padding: 15,
  // },
  logo: {
    width: 150,
    height: 150,
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 40,
    borderTopLeftRadius: 50,
    backgroundColor: '#FFFFFF', // خلفية بيضاء كاملة
    marginTop: 30, // رفع المحتوى لأعلى قليلاً
    paddingBottom: 100, // إضافة مسافة كبيرة في الأسفل
    minHeight: height * 0.25, // ضمان ارتفاع كافي
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 40,
  },
  inputLabel: {
    fontSize: 14,
    color: 'black',
    marginBottom: 10,
    textAlign: 'right',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderRadius: 15,
    marginBottom: 20,
    paddingHorizontal: 15,
    height: 55,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#1F2937',
    paddingRight: 10,
  },
  inputIcon: {
    fontSize: 20,
    color: '#9CA3AF',
  },
  eyeIcon: {
    padding: 5,
  },
  loginButton: {
    backgroundColor: '#8014DC',
    borderRadius: 15,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#8014DC',
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
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPassword: {
    alignItems: 'center',
    marginTop: 25,
  },
  forgotPasswordText: {
    color: '#425CC5',
    fontSize: 14,
    fontWeight: 'regular',
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

export default loginStyle;
