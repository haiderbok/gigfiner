import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavigationBar from 'react-native-navbar';

class HomeScreen extends Component
{
    constructor(props)
    {
      super(props);

      //Opening a navigation object for being able to navigate to different pages.
      this.navigate = this.props.navigation.navigate;

      //Initialize handlers
      /**
       * TODO: Go to login page.
       * When button clicked, we have to route to /login (which has signup inside)
       */
      this.rightButtonConfig = {
      title: 'Login',
      handler: () => this.navigate('Signup'),
      };

    }

    render()
    {
        return (
            //The empty view should be the dynamic part. 
            <View style={styles.container}>
                <View style={styles.navbar}>
                  <NavigationBar
                    title={titleConfig}
                    rightButton={this.rightButtonConfig}
                  />
                </View>
                <View style={styles.content}>
                    <Text>Welcome to the Gigfiner.</Text>
                </View>
            </View>
          );
    }

    onSignupClicked()
    {
        return this.navigate('Signup');
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



export default HomeScreen;