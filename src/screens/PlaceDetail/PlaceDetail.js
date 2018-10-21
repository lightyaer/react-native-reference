import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Platform, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { deletePlace } from '../../store/actions/index';

class PlaceDetail extends Component {

    state = {
        viewMode: Dimensions.get('window').height > 600 ? "portrait" : "landscape"
    }

    constructor(props) {
        super(props);
        Dimensions.addEventListener('change', this.updateStyles);
    }

    componentWillUnmount() {
        Dimensions.removeEventListener('change', this.updateStyles);
    }

    updateStyles = (dims) => {
        this.setState({
            viewMode: dims.window.height > 600 ? "portrait" : "landscape"
        });
    }

    placeDeletedHandler = () => {
        this.props.onDeletePlace(this.props.selectedPlace.key);
        this.props.navigator.pop({
            animated: true, // does the pop have transition animation or does it happen immediately (optional)
            animationType: 'fade'
        });
    }


    render() {
        return (
            <View style={
                [
                    styles.container,
                    this.state.viewMode === 'portrait'
                        ? styles.portraitContainer
                        : styles.landscapeContainer
                ]
            }>
                <View style={styles.subContainer} >
                    <Image source={this.props.selectedPlace.image} style={styles.PlaceImage} />
                </View>

                <View style={styles.subContainer}>
                    <View>
                        <Text style={styles.PlaceName} >{this.props.selectedPlace.name}</Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={this.placeDeletedHandler}>
                            <View style={styles.DeleteButton} >
                                <Icon size={30} name={Platform.OS === 'android' ? "md-trash" : "ios-trash"} color="red" />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>

        );
    }
}



const styles = StyleSheet.create({
    subContainer: {
        flex: 1
    },
    container: {
        margin: 22,
        flex: 1
    },
    portraitContainer: {
        flexDirection: "column",
        justifyContent: "flex-start"
    },
    landscapeContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        flex: 1
    },
    PlaceImage: {
        height: 200,
        width: "100%"
    },
    PlaceName: {
        fontWeight: 'bold',
        textAlign: "center",
        fontSize: 28,
        marginTop: 10,
        marginBottom: 10
    },
    DeleteButton: {
        justifyContent: "center",
        alignItems: "center"
    }

});

const mapDispatchToProps = (dispatch) => {
    return {
        onDeletePlace: (key) => dispatch(deletePlace(key))
    }
}

export default connect(null, mapDispatchToProps)(PlaceDetail);