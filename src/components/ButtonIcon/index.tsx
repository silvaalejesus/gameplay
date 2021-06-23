import React from 'react';
import {
    Text,
    Image,
    View,
    TouchableOpacity,
    TouchableOpacityProps,
} from 'react-native';

import DiscordImg from '../../assets/discord.png';
import { Styles } from './styles';

// Ele recebe todas as propriedades de TouchableOpacityProps e das propriedades
// que estiverem dentro das chaves
type Props = TouchableOpacityProps & {
    title: string;
}

export function ButtonIcon({title, ...rest} : Props) {
    return (
        <TouchableOpacity
            style={Styles.container}
            {...rest}
            >
            <View style={Styles.iconWrapper}>
                <Image source={DiscordImg} style={Styles.icon} />
            </View>

            <Text style={Styles.title}>
                { title }
            </Text>
        </TouchableOpacity>
    );
}

