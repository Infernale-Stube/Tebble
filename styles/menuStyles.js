import { StyleSheet } from 'react-native';

const menuStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    logoContainer: {
      backgroundColor: '#ffbd84',
      alignItems: 'center',
    },
    logo: {
      alignItems: 'center',
      height: 200,
      width: 200,
      marginTop: 50,
    },
    buttonContainer: {
      flex: 3,
      backgroundColor: '#ffbd84',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      width: 250,
      height: 50,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 15,
      borderRadius: 10,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

export default menuStyles;