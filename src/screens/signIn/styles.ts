// estilo da interface

import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const Styles = StyleSheet.create({
    container: {
        flex: 1, // pra ocupar toda tela
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.background
    },
    image: {
        width: '100%',
        height: 360,
    },
    content: {
        marginTop: -40,
        paddingHorizontal: 50
    },
    title: {
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 40,
        marginBottom: 16,
    },
    subtitle: {
        color: theme.colors.heading,
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 64
    }
});