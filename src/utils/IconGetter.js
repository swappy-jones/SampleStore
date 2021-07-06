const { SPLASH_SCREEN_TEXTS,LOGIN_SCREEN_TEXTS } = require('./strings')

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
    firstSlide:{
        icon:require('../assets/namaste_icon.png'),
        iconCaption:'Welcome to \nCapo Sales'
    },
    secondSlide:{
        icon:require('../assets/create_shop_icon.png'),
        iconCaption:'Create a store'
    },
    firstSlide:{
        icon:require('../assets/add_items_icon.png'),
        iconCaption:'Add Items'
    },
    firstSlide:{
        icon:require('../assets/make_money_icon.png'),
        iconCaption:'Make Money'
    },
    continue:{
        icon:require('../assets/arrow_right_icon.png'),
        iconCaption:'Continue'
    }
}
