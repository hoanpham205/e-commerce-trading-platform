

export const loginUser = async (user,dispatch, navigate) => {
    dispatch(loginStart());
    try{
        const res = await axios.post('http://localhost:8080/trading-platform/login',user);
        dispatch(loginSuccess(res.data));
        navigate('/checkout');
    } catch (e){
        dispatch(loginFailed())
    }
}