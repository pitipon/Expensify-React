import { firebase, googleAuthProvider } from '../firebase/firebase';

const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    }
}

export default startLogin;