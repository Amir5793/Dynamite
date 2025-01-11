export function localStorageHandler (method,key,value = null) {
    if (method === 'set') {
        localStorage.setItem(key, value);
        console.log('Item set in local storage');
    }
    else if (method == 'get') {
        return localStorage.getItem(key)
    }
    else if (method == 'remove') {
        localStorage.removeItem(key);
        console.log('Item removed from local storage');
    }
    else {
        console.log('Invalid method');
    }
}