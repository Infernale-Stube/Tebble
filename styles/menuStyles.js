import { StyleSheet } from 'react-native';

const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logoTitleContainer: {
    backgroundColor: '#ffbd84',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 50,
  },
  logo: {
    height: 150,
    width: 150,
  },
  title: {
    fontFamily: "BungeeSpice",
    fontSize: 50,
  },
  buttonContainer: {
    flex: 3,
    backgroundColor: '#ffbd84',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 250,
    height: 60,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#fff',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default menuStyles;
