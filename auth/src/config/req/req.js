export const makeRequest= (msg)=>{
    const req={
        "message":msg
    }
   return req;
}

export const makeRequestWithCredentials=(msg,agentInfo)=>{
    const req={
        "message":msg,
        "agent":agentInfo
    }
    return req;
}