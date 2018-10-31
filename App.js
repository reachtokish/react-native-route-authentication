import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import { createRootNavigator } from "./router";
import { isSignedIn } from "./auth/auth";

import { PermissionsAndroid } from 'react-native';


export default class App extends Component<Props> {
	
	constructor(props) {
		super(props);
		this.state = {
			signedIn: false,
			checkedSignIn: false
		};
	}
    
	componentDidMount() {
		isSignedIn()
			.then(res => this.setState({ signedIn: res, checkedSignIn: true }))
			.catch(err => alert("An error occurred"));


		async function requestCameraPermission() {
			try {
				const granted = await PermissionsAndroid.request(
					PermissionsAndroid.PERMISSIONS.CAMERA,
						{
							'title': 'Cool Photo App Camera Permission',
							'message': 'Cool Photo App needs access to your camera ' +
								'so you can take awesome pictures.'
						}
					)
					if (granted === PermissionsAndroid.RESULTS.GRANTED) {
						console.log("You can use the camera")
					} else {
						console.log("Camera permission denied")
					}
				} catch (err) {
					console.warn(err)
				}
			}

			async function requestLocationPermission() {
				try {
					const granted = await PermissionsAndroid.request(
						PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
							{
								'title': 'Cool Photo App Camera Permission',
								'message': 'Cool Photo App needs access to your camera ' +
									'so you can take awesome pictures.'
							}
						)
						if (granted === PermissionsAndroid.RESULTS.GRANTED) {
							console.log("You can use the Location")
						} else {
							console.log("Location permission denied")
						}
					} catch (err) {
						console.warn(err)
					}
				}

				requestLocationPermission();


	}

	render() {
		const { checkedSignIn, signedIn } = this.state;
		// If we haven't checked AsyncStorage yet, don't render anything (better ways to do this)
		if (!checkedSignIn) {
			return null;
		}
		const Layout = createRootNavigator(signedIn);
		return <Layout />;
	}

}