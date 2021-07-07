const { 
    SPLASH_SCREEN_TEXTS,
    LOGIN_SCREEN_TEXTS,
    FIRST_TIME_LOGIN_SCREEN_TEXTS,
    CREATE_STORE_SCREEN_TEXTS,
    BOTTOM_NAVIGATION,
    STORE_DETAILS_SCREEN_TEXTS,
    HEADER_TEXT,
    ITEM_DETAILS_SCREEN_TEXTS } = require('./strings')

export const SPLASH_ICON = {
    iconCaption:SPLASH_SCREEN_TEXTS.iconCaption,
    icon: require('../assets/business_icon.png')
}

export const LOGIN_SCREEN_ICON={
    appLogo:{
        iconCaption:LOGIN_SCREEN_TEXTS.iconCaption,
        icon: require('../assets/app_logo.png')
    },
    user:{
        icon: require('../assets/user_icon.png')
    },
    password:{
        icon: require('../assets/password_icon.png')
    },
    passwordVisible:{
        icon: require('../assets/password_visible_icon.png')
    },
    passwordHidden:{
        icon: require('../assets/password_hidden_icon.png')
    },
    login:{
        iconCaption:LOGIN_SCREEN_TEXTS.loginButton,
        icon: require('../assets/login_icon.png')
    }
}

export const FIRST_TIME_LOGIN_SCREEN_ICON={
    slides:[
        {
            icon:require('../assets/namaste_icon.png'),
            iconCaption:FIRST_TIME_LOGIN_SCREEN_TEXTS.firstSlideIconCaption
        },
        {
            icon:require('../assets/create_shop_icon.png'),
            iconCaption:FIRST_TIME_LOGIN_SCREEN_TEXTS.secondSlideIconCaption
        },
        {
            icon:require('../assets/add_items_icon.png'),
            iconCaption:FIRST_TIME_LOGIN_SCREEN_TEXTS.thirdSlideIconCaption
        },
        {
            icon:require('../assets/make_money_icon.png'),
            iconCaption:FIRST_TIME_LOGIN_SCREEN_TEXTS.fourthSlideIconCaption
        },
    ],
    continue:{
        icon:require('../assets/arrow_right_icon.png'),
        iconCaption:FIRST_TIME_LOGIN_SCREEN_TEXTS.continueButtonIconCaption
    }
}

export const CREATE_STORE_SCREEN_ICON={
    screenLogo:{
        icon:require('../assets/create_shop_icon.png'),
        iconCaption:FIRST_TIME_LOGIN_SCREEN_TEXTS.secondSlideIconCaption
    },
    storeName:{
        icon:require('../assets/name_icon.png'),
        iconCaption:CREATE_STORE_SCREEN_TEXTS.storeNameField
    },
    storeBio:{
        icon:require('../assets/description_icon.png'),
        iconCaption:CREATE_STORE_SCREEN_TEXTS.storeBioField
    },
    createButton:{
        icon:require('../assets/create_icon.png'),
        iconCaption:CREATE_STORE_SCREEN_TEXTS.createButton
    },
}

export const BOTTOM_TABS={
    itemList:{
        icon:require('../assets/item_list_icon.png'),
        iconCaption:BOTTOM_NAVIGATION.itemList
    },
    store:{
        icon:require('../assets/store_icon.png'),
        iconCaption:BOTTOM_NAVIGATION.store
    }
}

export const STORE_DETAILS_ICON={
    logo:{
        icon: require('../assets/business_icon.png')
    },
    storeName:{
        icon:require('../assets/name_icon.png'),
        iconCaption:STORE_DETAILS_SCREEN_TEXTS.storeNameField
    },
    storeBio:{
        icon:require('../assets/description_icon.png'),
        iconCaption:STORE_DETAILS_SCREEN_TEXTS.storeBioField
    },
    edit:{
        iconCaption:STORE_DETAILS_SCREEN_TEXTS.edit,
        icon:require('../assets/edit_icon.png')
    },
    save:{
        iconCaption:STORE_DETAILS_SCREEN_TEXTS.save,
        icon:require('../assets/save_icon.png')
    }
}

export const ITEM_LIST_SCREEN_ICON={
    addItem:{
        icon: require('../assets/add_icon.png')
    }
}

export const HEADER_ICON={
    app:{
        icon: require('../assets/app_logo.png'),
        iconCaption: HEADER_TEXT.appName
    },
    backButton:{
        icon: require('../assets/arrow_left.png'),
    },
    logout:{
        icon: require('../assets/logout_icon.png'),
    }
}

export const ITEM_DETAILS_SCREEN_ICON={
    itemName:{
        iconCaption:ITEM_DETAILS_SCREEN_TEXTS.name,
        icon:require('../assets/item_name_icon.png')
    },
    itemDescription:{
        iconCaption:ITEM_DETAILS_SCREEN_TEXTS.description,
        icon:require('../assets/product_description_icon.png')
    },
    itemPrice:{
        iconCaption:ITEM_DETAILS_SCREEN_TEXTS.price,
        icon:require('../assets/dollar_icon.png')
    },
    itemTag:{
        iconCaption:ITEM_DETAILS_SCREEN_TEXTS.tags,
        icon:require('../assets/tag_icon.png')
    },
    itemStock:{
        iconCaption:ITEM_DETAILS_SCREEN_TEXTS.stock,
        icon:require('../assets/stock_icon.png')
    },
    edit:{
        iconCaption:ITEM_DETAILS_SCREEN_TEXTS.edit,
        icon:require('../assets/edit_icon.png')
    },
    save:{
        iconCaption:ITEM_DETAILS_SCREEN_TEXTS.save,
        icon:require('../assets/save_icon.png')
    }
}
