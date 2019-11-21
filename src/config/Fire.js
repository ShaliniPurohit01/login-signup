import firebase from "firebase";
const config = {
  apikey: "AIzaSyAcIXScStA6NvEh6EKDHy9PTs4pBNPMwd4",
  authDomain: "login-signup-fd04.appspot.com",
  databaseURL: "https://login-signup-fdb04.firebaseio.com",
  projectId: "login-signup-fdb04",
  storageBucket: "login-signup-fd04.appspot.com",
  messegingSenderid: "661814507896"
};
const fire = firebase.initializeApp(config);
export default fire;
