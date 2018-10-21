import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
const listItem = (props) => (
    <TouchableOpacity onPress={props.onPlacePressed}>
        <View style={styles.listItem} >
            <Image resizeMode="stretch" style={styles.placeImage} source={props.placeImage} />
            <Text style={{ fontSize: 18 }} >{props.placeName}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        padding: 10,
        marginBottom: 5,
        backgroundColor: "#eee",
        flexDirection: 'row',
        alignItems: "center"
    },
    placeImage: {
        marginRight: 8,
        height: 30,
        width: 30
    }
})

export default listItem;