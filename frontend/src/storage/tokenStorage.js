export function setToken(token){
    localStorage.setItem('authToken', token);
    return true;
}

export function getToken(){
    return localStorage.getItem('authToken');
}

export function dropStorageToken(){
    return localStorage.removeItem('authToken');
}