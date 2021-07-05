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
