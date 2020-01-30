import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavigationBar from 'react-native-navbar';

class SignupScreen extends Component
{
    constructor(props)
    {
        super(props);

        //Opening a navigation object for being able to navigate to different pages.
        this.navigate = this.props.navigation.navigate;
    }

    render()
    {
        return (
            //The empty view should be the dynamic part. 
            <View style={styles.container}>
                <View style={styles.navbar}>
                  <NavigationBar
                    title={titleConfig}
                    rightButton={rightButtonConfig}
                  />
                </View>
                <View style={styles.content}>
                    <Text>Welcome to the signup page.</Text>
                </View>
            </View>
          );
    }

    onSignupClicked()
    {
        return this.navigate('Home');
    }
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
      flex: 1,
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

export default SignupScreen;
