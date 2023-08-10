import { StyleSheet } from 'react-native';

const menuStyles = StyleSheet.create({
  logoTitleContainer: {
    flex: 1,
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
    fontSize: 55,
  },
  primaryButtonContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryButtonContainer: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingLeft: 25,
    paddingRight: 25,
  },
  button: {
    width: 230,
    height: 60,
    backgroundColor: '#FF5733',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default menuStyles;
