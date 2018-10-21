import React, { Component } from 'react';
import { View, ImageBackground, Dimensions, StyleSheet } from 'react-native';
import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import backgroundImage from '../../assets/background.jpg';
import ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground'

class AuthScreen extends Component {

    state = {
        viewMode: Dimensions.get('window').height > 600 ? "portrait" : "landscape"
    }

    constructor(props) {
        super(props);
        Dimensions.addEventListener('change', this.updateStyles)
    }

    componentWillUnmount() {
        Dimensions.removeEventListener('change', this.updateStyles);
    }

    updateStyles = (dims) => {
        this.setState({
            viewMode: dims.window.height > 600 ? "portrait" : "landscape"
        });
    }

    loginHandler = () => {
        startMainTabs();
    }

    render() {

        let headingText = null;
        if (this.state.viewMode === "portrait") {
            headingText = (
                <MainText>
                    <HeadingText > Log In </HeadingText>
                </MainText>
            );
        }

        return (
            <ImageBackground source={backgroundImage} style={styles.backgroundImage} >
                <View style={styles.container}>
                    {headingText}
                    <ButtonWithBackground color="#29AAF4" >Switch to Login</ButtonWithBackground>
                    <View style={styles.inputContainer}>
                        <DefaultInput style={styles.input} placeholder="Email" />
                        <View style={
                            this.state.viewMode === "portrait"
                                ? styles.portraitPasswordContainer
                                : styles.landscapePasswordContainer}>
                            <View style={this.state.viewMode === "portrait" ? styles.portraitPasswordWrapper : styles.landscapePasswordWrapper} >
                                <DefaultInput style={styles.input} placeholder="Password" />
                            </View>
                            <View style={this.state.viewMode === "portrait" ? styles.portraitPasswordWrapper : styles.landscapePasswordWrapper} >
                                <DefaultInput style={styles.input} placeholder="Confirm Password" />
                            </View>
                        </View>
                    </View>
                    <ButtonWithBackground color="#29AAF4" onPress={this.loginHandler} >Submit</ButtonWithBackground>
                </View>
            </ImageBackground >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        backgroundColor: "#eee",
        borderColor: "#bbb"
    },
    inputContainer: {
        width: '80%'
    },
    backgroundImage: {
        width: "100%",
        flex: 1
    },
    landscapePasswordContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    portraitPasswordContainer: {
        flexDirection: "column",
        justifyContent: "flex-start"
    },
    landscapePasswordWrapper: {
        width: "45%"
    },
    portraitPasswordWrapper: {
        width: "100%"
    }
})
export default AuthScreen;