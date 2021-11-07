import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { useTokenAuth } from '../../hooks/GraphQL/mutations/userMutations'
import { getToken } from '../../storage/tokenStorage';
import authorizationActions from '../../store/authorization/authorizationActionCreators';
import { TODOS_PATH } from '../../routes/consts';
import tokenLoaderActions from '../../store/loaders/authorization/token/tokenLoaderActionCreators';
import userActions from '../../store/user/userActionCreators';

export default function TokenAuthorization() {
    const history = useHistory()
    const userAuthMutation = useTokenAuth();
    const [ token ,setToken ] = useState('')
    const { data, error, loading } = userAuthMutation.result;
    const dispatch = useDispatch()

    const handleAuth = async () => {
        try{
            if(token !== '' && token != null){
                dispatch(authorizationActions.setToken(token))
                await userAuthMutation.authUserMutation({
                    variables: {
                        token: token
                    }
                })
            } 
            if(token==null){
                dispatch(tokenLoaderActions.display(false))
            }
            
        } catch (error){
            dispatch(tokenLoaderActions.display(false))
            console.error(error.message)
        }
    }


    useEffect(()=>{
        setToken(getToken())
        dispatch(tokenLoaderActions.display(true))
    }, [])

    useEffect(()=>{
        handleAuth();
        
    }, [token])

    useEffect(()=>{
        if (data) {
            dispatch(authorizationActions.setAuthorized(true));
            dispatch(authorizationActions.setToken(data.auth.token))
            dispatch(tokenLoaderActions.display(false))
            if(data?.auth?.token){
                setToken(data.auth.token)
                dispatch(userActions.setId(data.auth._id));
                dispatch(userActions.setNickName(data.auth.nickName));
                dispatch(userActions.setToken(data.auth.token));
            }
            history.push(`${TODOS_PATH}`)
        }
    }, [data])

    return null
}
