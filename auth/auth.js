import { AsyncStorage } from "react-native";

export const USER_KEY = "USER_TOKEN";

export const onSignIn = () => AsyncStorage.setItem(USER_KEY, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb25zdGFudCI6Il90YXNrcGx1c18iLCJleHAiOjE1NDAwMzI1ODl9.Kjbv1sP_w78BnVQLbYrUbiqgsc4GzNbZTTdAhwgRJWc");

export const onSignOut = () => AsyncStorage.removeItem(USER_KEY);

export const isSignedIn = () => {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem(USER_KEY)
            .then(res => {
                if (res !== null) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            })
            .catch(err => reject(err));
    });
};