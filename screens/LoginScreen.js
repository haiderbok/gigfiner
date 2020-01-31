import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import NavigationBar from 'react-native-navbar';

class LoginScreen extends Component
{
    constructor(props)
    {
        super(props);

        //Opening a navigation object for being able to navigate to different pages.
        this.navigate = this.props.navigation.navigate;

        this.onSignupPressed = this.onSignupPressed.bind(this);
    }

    onSignupPressed()
    {
      return this.navigate('Signup');
    }

    render()
    {
        return (
            //TODO: Update here with the proper login form.
            <View style={styles.container}>
                <View style={styles.navbar}>
                  <NavigationBar
                    title={titleConfig}
                  />
                </View>
                <View style={styles.content}>
                    <Text>Welcome to the login page.</Text>
                    <Button title="Sign up!" onPress={this.onSignupPressed}>Signup</Button>
                </View>
            </View>
          );
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
  
const titleConfig = {
title: 'Gigfiner',
};

export default LoginScreen;