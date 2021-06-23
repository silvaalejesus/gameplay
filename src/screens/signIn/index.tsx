// estrutura da interface

import React from "react";
import {
    Text,
    View,
    Image,
    StatusBar
} from 'react-native';

import { ButtonIcon } from "../../components/ButtonIcon";
import IllustrationImg from '../../assets/illustration.png';
import { Styles } from './styles';

export function SignIn() {
    return (
        <View style={Styles.container}>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
            <Image
                source={IllustrationImg}
                style={Styles.image}
                resizeMode="stretch"
            />

            <View style={Styles.content}>
                <Text style={Styles.title}>
                    Organize {`\n`}
                    suas jogatinas {`\n`}
                    facilmente
                </Text>

                <Text style={Styles.subtitle}>
                    Crie grupos para jogar seus games {`\n`}
                    favoritos com seus amigos
                </Text>
                <ButtonIcon
                    title="Entrar com o Discord"
                    activeOpacity={0.7}
                />
            </View>
        </View>
    )
}