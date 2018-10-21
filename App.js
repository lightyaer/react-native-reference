import { Navigation } from 'react-native-navigation'
import AuthScreen from './src/screens/Auth/Auth';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
import PlaceDetailScreen from './src/screens/PlaceDetail/PlaceDetail';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
import SideDrawerScreen from './src/screens/SideDrawer/SideDrawer';
const store = configureStore();


//Register Screens

Navigation.registerComponent("awesome-project.AuthScreen", () => AuthScreen, store, Provider);
Navigation.registerComponent("awesome-project.SharePlaceScreen", () => SharePlaceScreen, store, Provider)
Navigation.registerComponent("awesome-project.FindPlaceScreen", () => FindPlaceScreen, store, Provider)
Navigation.registerComponent("awesome-project.PlaceDetailScreen", () => PlaceDetailScreen, store, Provider)
Navigation.registerComponent("awesome-project.SideDrawerScreen", () => SideDrawerScreen);
//Start a App

Navigation.startSingleScreenApp({
  screen: {
    screen: 'awesome-project.AuthScreen', // unique ID registered with Navigation.registerScreen
    title: 'Welcome', // title of the screen as appears in the nav bar (optional)
  }
})


// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import React, { Component } from 'react';
// import { StyleSheet, View } from 'react-native';
// import { connect } from 'react-redux';
// import { addPlace, selectPlace, deselectPlace, deletePlace } from './src/store/actions/index';
// import PlaceList from './src/components/PlaceList/PlaceList';
// import PlaceInput from './src/components/PlaceInput/PlaceInput';
// import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
// import PlaceImage from './src/assets/scene.jpg';

// class App extends Component {

//   placeAddedHandler = (placeName) => {
//     this.props.onAddPlace(placeName, PlaceImage);
//   }
//   placeDeletedHandler = () => {
//     this.props.onDeletePlace();
//   }

//   modalClosedHandler = () => {
//     this.props.onDeselectPlace();
//   }

//   placeSelectedHandler = (key) => {
//     this.props.onSelectPlace(key);
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <PlaceDetail onPlaceDeleted={this.placeDeletedHandler}
//           onModalClosed={this.modalClosedHandler}
//           selectedPlace={this.props.selectedPlace} />
//         <PlaceInput onPlaceAdded={this.placeAddedHandler} />
//         <PlaceList
//           places={this.props.places}
//           onPlaceSelected={this.placeSelectedHandler} />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   }
// });

// const mapStateToProps = state => {
//   return {
//     places: state.places.places,
//     selectedPlace: state.places.selectedPlace
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     onAddPlace: (name, image) => dispatch(addPlace(name, image)),
//     onDeletePlace: () => dispatch(deletePlace()),
//     onSelectPlace: (key) => dispatch(selectPlace(key)),
//     onDeselectPlace: () => dispatch(deselectPlace())
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);