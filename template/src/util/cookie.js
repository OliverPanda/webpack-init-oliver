const setCookie = (name, content) => {
    if(!name) {
        return;
    }
    if(typeof content !== 'string') {
        JSON.stringify(content)
    }
    window.localStorage.setItem(name, content)
}

const getCookie = (name) => {
    if(!name) {
        return; 
    }
    window.localStorage.getItem(name)
}

const deleteCookie = (name) => {
    if(!name) {
        return;
    }
    window.localStorage.removeItem(name)
}


export {
    setCookie,
    getCookie,
    deleteCookie
}