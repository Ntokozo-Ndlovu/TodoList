const getToken = ()=>{
    const token = localStorage.getItem('token');
    if(!token){
        return null;
    }
    return localStorage.getItem('token');
}

const getTokenDuration = ()=>{
    const nowDate = new Date();
    const timeDiff = getTokenExpire().getTime() - nowDate.getTime();
    if(timeDiff < 0){
        return 'EXPIRED';
    }
    return timeDiff;
}

const getTokenExpire = ()=>{
    const dateIso = localStorage.getItem('tokenExpiration');
    return new Date(dateIso);
}

const saveToken = (token)=>{
    localStorage.setItem('token',token);
    const tokenExpireDate = new Date();
    tokenExpireDate.setTime(tokenExpireDate.getTime() + Number(process.env.REACT_APP_JWT_EXPIRATION));
    localStorage.setItem('tokenExpiration',tokenExpireDate.toISOString());
}

const clearToken = ()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('tokenExpiration');
}

export {saveToken,getTokenDuration,getTokenExpire,getToken,clearToken};