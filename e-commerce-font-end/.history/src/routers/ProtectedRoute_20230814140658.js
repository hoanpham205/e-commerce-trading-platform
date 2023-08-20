import { useAuth } from '../custom-hooks/useAuth';


const ProtectedRoute =({children})=>{
    const {currentUser}= useAuth();
    return 
}

export default ProtectedRoute;