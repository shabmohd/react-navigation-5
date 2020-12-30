import { StyleSheet, Linking, Platform } from "react-native";

const Contact = () => {
 
  let phoneNumber = '';

  if (Platform.OS === 'android') {
    phoneNumber = 'tel:9900789012';
  }
  else {
    phoneNumber = 'telprompt:9900789012';
  }

  Linking.openURL(phoneNumber);
};

export default Contact;
