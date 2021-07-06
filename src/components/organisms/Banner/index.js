import React from 'react';
import { View, StyleSheet,Image } from 'react-native';
import Swiper from 'react-native-swiper';
import theme from '../../../theme';
import Typography from '../../atoms/Typography';

const Banner = ({slides,slideStyle,imageStyle,textStyle}) =>{
    return (
        <Swiper  showsButtons={false} loop={false}>
            {
                slides.map((value,index) => {
                    return <View style={slideStyle} key={index}>
                                <Image source={value.icon} style={imageStyle}/>
                                <Typography text={value.iconCaption} textStyle={textStyle}/>
                            </View>
                })
            }
            
        </Swiper>
    );
}

export default Banner;


