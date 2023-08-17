

const ProtectedRoute =({children})=>{
    const {current} = useAuth;
    return {children}
}

export default ProtectedRoute;