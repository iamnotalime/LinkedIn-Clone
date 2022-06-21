import "./Login.css";
import React, {useState}  from 'react';
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { login } from './features/counter/userSlice';

function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState(""); 
    const [profilePic, setPic] = useState("");
    const dispatch = useDispatch();


    const loginToApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileUrl: userAuth.user.photoURL,
            }));    
        }).catch(error => alert(error));
    };

    const register = () => {        
        if(!name) {
            return alert("Please enter a full name");
        }
        auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
            userAuth.user.updateProfile({
                displayName : name,
                photoURL: profilePic, 
            }).then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoUrl: profilePic,  
                }) 
                );
            });
        })
        .catch((error) => alert(error.message));
    };

    return (
        <div className="login">
            <img src="https://th.bing.com/th/id/R.cbbb1e132ef042351783921b3e3ca475?rik=lxRauBa2g4GBkg&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2017%2f03%2fFont-of-the-LinkedIn-Logo.jpg&ehk=dy7EAVq5GrzRalsqc3gRYbas0B%2b4rlWu%2bSk2mAvSaXs%3d&risl=&pid=ImgRaw&r=0" alt=""/>
            <form>
                <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Full name{required if registering}"/>
                <input type="text" value={profilePic} onChange={e => setPic(e.target.value)} placeholder="Profile pic URL {optional}"/>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email"/>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password"/>
                <button type="submit" onClick={loginToApp}>
                    Sign in
                </button>
            </form>
            <p>
                Not a member?{""}       
                <span className="login__register" onClick={register}>
                    Register Now
                </span>
            </p>
        </div>
    );
}

export default Login;