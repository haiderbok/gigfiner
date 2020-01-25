import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavigationBar from 'react-native-navbar';

export default function App() {
  return (
    //The empty view should be the dynamic part. 
    <View style={styles.container}>
        <View style={styles.navbar}>
          <NavigationBar
            title={titleConfig}
            rightButton={rightButtonConfig}
          />
        </View>
        <View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f'
  },
  navbar: {
    flex: 1
  },
  content : {
    alignContent: 'center',
    textAlign: 'center'
  }
});

/**
 * TODO: Go to login page.
 * When button clicked, we have to route to /login (which has signup inside)
 */
const rightButtonConfig = {
  title: 'Login',
  handler: () => alert(''),
};

const titleConfig = {
  title: 'Gigfiner',
};

