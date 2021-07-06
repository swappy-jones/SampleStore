const theme = {
    palette:{
        PRIMARY:"#8B008B",
        SECONDRY:"#FAFAD2",
        WHITE:"#FFFFFF",
        BLACK:"#000000",
        GREY:"#C9A9A9",
        SHADED_BACKGROUND:'#E4EDE5',
        PURPLE:"#8B008B"
    },
    button:{
        text:"text",
        outlined:"outlined",
        contained:"contained"
    },
    textInput:{
        flat:"flat",
        outlined:"outlined"
    },
}

export const textInputTheme = {
     colors: {
          primary: theme.palette.PRIMARY,
          text: theme.palette.PRIMARY,
          background: theme.palette.SECONDRY,
          placeholder:theme.palette.PRIMARY
        }
    }

    export const textInputGreyBorder = {
        colors: {
            primary: theme.palette.GREY,
            text: theme.palette.BLACK,
            background: theme.palette.WHITE,
            placeholder: theme.palette.GREY
        }
    }

export default theme