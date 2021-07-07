

export const generateStoreKey = (creds) =>{
    return "@"+creds.username+"#"+creds.password;
}

export const generateItemsKey = (creds,storeName) =>{
    return "@"+creds.username+"#"+creds.password+"#"+storeName;
}