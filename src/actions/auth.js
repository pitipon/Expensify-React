import { firebase, googleAuthProvider } from '../firebase/firebase';

const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    }
}

const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    }
}


module.exports = {
    startLogin,
    startLogout
} 