const theme = {
    palette:{
        PRIMARY:"#13AD3C",
        SECONDRY:"#FFC600",
        WHITE:"#FFFFFF",
        BLACK:"#000000",
        GREY:"#F2F2F2",
        SHADED_BACKGROUND:'#E4EDE5'
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

export const textInputWhiteBorder = {
     colors: {
          primary: theme.palette.WHITE,
          text: theme.palette.WHITE,
          background: theme.palette.PRIMARY,
          placeholder:theme.palette.WHITE
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