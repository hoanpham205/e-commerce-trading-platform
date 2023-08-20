import { useAuth } from '../custom-hooks/useAuth';


const ProtectedRoute =({children})=>{
    const {currentUser}= useAuth();
    return currentUser ? children : <
}

export default ProtectedRoute;