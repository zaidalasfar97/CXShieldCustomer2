/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../../../components/Button';
import Next from '../../../assets/svg/NewAccount/next.svg';
import LinearGradient from 'react-native-linear-gradient';
import AccountCreatedPic from '../../../assets/svg/NewAccount/AccountCreated.svg';
import { tbColors } from '../../../config/appConfig';
interface AccountFinishProps {
    navigation: any;
}

const AccountFinish = (props: AccountFinishProps) => {
    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.container}
            colors={[
                '#2EC4B6',
                '#3CC8BB',
                '#46CBBE',
                '#59D0C5',
                '#69D5CB',
                '#7CDAD1',
                '#8DDFD7',
                '#A4E6DF',
                '#BCEDE8',
                '#D4F3F0',
                '#EBFAF8',
                '#EBFAF8',
                '#EBFAF8',
                '#EBFAF8',
            ]}>
            <View style={{ alignItems: 'center', marginTop: '45%' }}>
                <AccountCreatedPic />
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Account Activated</Text>
                <Text style={{ fontSize: 18, textAlign: 'center', marginVertical: 7 }}>
                    Thank you for completing all the requirements. You can now browse and accept auditing requests.
                </Text>
            </View>

            <View style={{ marginTop: 60 }}>
                <Button
                    title="Home Page"
                    BKColor={tbColors.white}
                    titleColor={tbColors.black}
                    onPress={async () => {
                        props.navigation.navigate('HomeTabs');
                    }}
                />
            </View>

        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FBFBFB',
        paddingTop: 60,
        paddingHorizontal: 20,
    },
    backButton: {
        // position: 'absolute',
        // top: 50,
        // left: 24,
        // zIndex: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    backArrow: {
        fontSize: 24,
        color: '#000',
    },
    title: {
        fontSize: 24,
        fontWeight: '800',
        textAlign: 'center',
        marginVertical: 5,
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
        color: '#444',
        marginVertical: 5,
    },
    cardContainer: {
        marginVertical: 16,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#DEDEEC',
        padding: 20,
        shadowColor: '#000',
        shadowOpacity: 0.03,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 3 },
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#2EC4B6',
        marginTop: 12,
        marginBottom: 4,
    },
    cardText: {
        fontSize: 15,
        color: '#333',
    },
    containerTerms: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
        flexWrap: 'wrap', // allow multi-line support
    },
    checkboxContainer: {
        marginRight: 10,
        marginLeft: 5,
    },
    text: {
        flex: 1,
        fontSize: 14,
        color: '#333',
        lineHeight: 22,
    },
    link: {
        color: '#2EC4B6',
        fontWeight: 'bold',
    },
});

export default AccountFinish;
