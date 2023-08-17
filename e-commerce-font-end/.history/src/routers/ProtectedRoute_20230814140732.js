import { useAuth } from '../custom-hooks/useAuth';


const ProtectedRoute =({children})=>{
    const {currentUser}= useAuth();
    return currentUser ? children : <Navigate to=
}

export default ProtectedRoute;