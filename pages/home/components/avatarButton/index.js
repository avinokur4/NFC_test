import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import avatarImg from './assets/photo4.png';


const AvatarButton = () => (
  <TouchableOpacity><Image style={styles.headerActionLeft} source={avatarImg} /></TouchableOpacity>
);

export default AvatarButton;
