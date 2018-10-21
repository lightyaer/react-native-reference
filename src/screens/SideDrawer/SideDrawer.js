import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
class SideDrawer extends Component {
    render() {
        return (
            <View style={[styles.container, { width: Dimensions.get("window").width * 0.8 }]} >
                <View style={styles.textContainer}>
                    <Text>Side Drawer</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => alert("Logout")}>
                        <View style={styles.logoutButton} >
                            <Icon style={styles.drawerIcon} size={30} name={Platform.OS === 'android' ? "md-log-out" : "ios-log-out"} color="red" ></Icon>
                            <Text>Sign Out</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        backgroundColor: "white",
        flex: 1,
        height: "100%",
        width: "100%"
    },
    textContainer: {
        padding: 10,
        margin: 8
    },
    logoutButton: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#eee"
    },
    drawerIcon: {
        margin: 10
    }
});
export default SideDrawer;