

export const generateStoreKey = (creds) =>{
    return "@"+creds.username+"#"+creds.password;
}

export const generateItemsKey = (creds,storeName) =>{
    return "@"+creds.username+"#"+creds.password+"#"+storeName;
}

export const getRandomString = () =>{
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    var length=24;
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}