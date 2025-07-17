import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
const loginStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    height: height * 0.4,
    backgroundColor: '#8014DC',
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
  logoCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#8014DC',
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
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8B5CF6',
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 40,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 40,
  },
  inputLabel: {
    fontSize: 16,
    color: '#6B7280',
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
    backgroundColor: '#8B5CF6',
    borderRadius: 15,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#8B5CF6',
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
  },
  forgotPassword: {
    alignItems: 'center',
    marginTop: 25,
  },
  forgotPasswordText: {
    color: '#8B5CF6',
    fontSize: 16,
  },
  bottomIndicator: {
    width: 134,
    height: 5,
    backgroundColor: '#000000',
    borderRadius: 2.5,
    alignSelf: 'center',
    marginBottom: 15,
  },
  logoWrapper: {
    backgroundColor: '#fff',
    borderRadius: 60,
    padding: 15,
  },
  logo: {
    width: 100,
    height: 100,
  },
});
export default loginStyle;
