import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { connect } from 'react-redux';
import PlaceList from '../../components/PlaceList/PlaceList';
class FindPlaceScreen extends Component {
    static navigatorStyle = {
        navBarButtonColor: "orange"
    }

    state = {
        placesLoaded: false,
        removeAnim: new Animated.Value(1),
        placeListShowAnim: new Animated.Value(0)
    }

    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    onNavigatorEvent = (event) => {
        if (event.type === "NavBarButtonPress") {
            if (event.id === "sideDrawerToggle") {
                this.props.navigator.toggleDrawer({
                    side: 'left', // the side of the drawer since you can have two, 'left' / 'right'
                    animated: true, // does the toggle have transition animation or does it happen immediately (optional)
                    to: 'open'
                });
            }
        }

    }

    placesLoadedHandler = () => {
        Animated.timing(this.state.placeListShowAnim, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true
        }).start();
    }

    placeSelectedHandler = (key) => {
        const place = this.props.places.find(place => place.key === key);
        this.props.navigator.push({
            screen: "awesome-project.PlaceDetailScreen",
            title: place.name,
            passProps: {
                selectedPlace: place
            }
        });
    }

    placesSearchHandler = () => {
        Animated.timing(this.state.removeAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true
        }).start(() => {
            this.setState({
                placesLoaded: true
            });
            this.placesLoadedHandler();
        });
    }

    render() {
        let content = (
            <Animated.View style={{
                opacity: this.state.removeAnim,
                transform: [{
                    scale: this.state.removeAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [12, 1]
                    })
                }]
            }}>
                <TouchableOpacity onPress={this.placesSearchHandler} >
                    <View style={styles.searchButton} >
                        <Text style={styles.searchButtonText}>Find Places</Text>
                    </View>
                </TouchableOpacity>
            </Animated.View>
        );

        if (this.state.placesLoaded) {
            content = (
                <Animated.View style={{
                    opacity: this.state.placeListShowAnim,
                }} >
                    <PlaceList onPlaceSelected={this.placeSelectedHandler} places={this.props.places} />
                </Animated.View>

            );
        }
        return (
            <View style={this.state.placesLoaded ? null : styles.buttonContainer} >
                {content}
            </View>
        )
    }

}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    searchButton: {
        borderColor: "orange",
        borderWidth: 3,
        borderRadius: 50,
        padding: 20
    },
    searchButtonText: {
        color: "orange",
        fontWeight: "bold",
        fontSize: 26
    }
})

const mapStateToProps = state => {
    return {
        places: state.places.places
    }
}

export default connect(mapStateToProps)(FindPlaceScreen);