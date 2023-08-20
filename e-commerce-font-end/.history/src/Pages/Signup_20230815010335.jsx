import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Helmet from '../components/Helmet/Helmet';
import '../styles/login.css';

import { doc, setDoc } from 'firebase/firestore';
import { auth, db, storage } from '../firebase.config';


const Signup = () => {
    const [username, setUsername] = useState('')
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [file,setFile] = useState(null);
    const [loading,setLoading] = useState(false)
    const [role, setRole] = useState('individual');
    const navigate = useNavigate()

    const handleFileChange = (e) => {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
  };
//     const signup = async(e)=>{
//       e.preventDefault()
//       setLoading(true);

//       try{
//           const userCredential = await createUserWithEmailAndPassword(auth,email,password)
//           const user= userCredential.user;
//           console.log(user);
//           let avatarUrl = null;
//             if (file) {
//                 const storage = getStorage();
//                 const avatarRef = ref(storage, `avatars/${user.uid}`);
//                 await uploadBytes(avatarRef, file);
//                 avatarUrl = await getDownloadURL(avatarRef);
//               }
//             //const storageRef= ref(storage, `avatars/${Date.now()}`);  
//             const userDocRef = doc(db, "users", user.uid);
//             await setDoc(userDocRef, {
//                 uid: user.uid,
//                 username: username,
//                 email: email,
//                 avatarUrl: avatarUrl,
//                 role: role,
//                 // Thêm các trường khác của người dùng ở đây
//             });
//             //Xác nhận đăng ký vai trò người bán
//             if (role === 'seller') {
//                 const requestDocRef = doc(db, "seller_requests", user.uid);
//                 await setDoc(requestDocRef, {
//                     uid: user.uid,
//                     status: 'pending', // Trạng thái xác nhận: 'pending', 'approved', 'rejected'
//                 });
//             }

//             setLoading(false);
//             toast.success("Account created");
//             navigate('/login')
//       }catch(error){
        
//             setLoading(false);
//             toast.error("something went wrong");
//     }
//   }
    const signup = async(e) =>{
        e.preventDefault();
        setLoading(true);
        try{
            const userCredential = await createUserWithEmailAndPassword(auth,email, password);
            const storageRef = ref(storage, `img/${Date.now()+username}`);
            const uploadTask = uploadBytesResumable(storageRef,file)
            uploadTask.on((error)=>{
                toast.error(error.message);
            },()=>{
                getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL)=>{
                    await updateProfile(user,{
                        displayName: username,
                        photoURL: downloadURL,
                    })
                    await setDoc(doc(db,'user',user.uid),{
                        uid: user.uid,
                        displayName: username,
                        email,
                        photoURL: downloadURL
                    })
                });
            });
            const user= userCredential.user;
            setLoading(false);
            toast.success("account created")
            navigate('/login')
        }
        catch (error){
            setLoading(false);
            toast.error("something went wrong");    
        }
    }

    return <Helmet title = 'Signup'>
        <section>
            <Container>
                <Row>
                    
                </Row>
            </Container>
        </section>
    </Helmet>
}

export default Signup;
