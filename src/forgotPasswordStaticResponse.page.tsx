import { Icon } from '@rneui/base';
import { Button, Card, Input } from '@rneui/themed';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "column",
        gap: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: "center",
        flex: 2,
    },
    titleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    formcontainer: {
        flex: 2.8,
    }
});

const ForgotPasswordStaticResponsePage = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <View style={{ flexDirection: "row" }}>
                    <FontAwesome5 name={'arrow-left'} size={20} style={{ flex: 1, alignSelf: "flex-start" }} />
                    <Text style={styles.title}>Hispid CRM</Text>
                </View>
                <Text>Forgot Password</Text>
            </View>
            <View style={styles.formcontainer}>
                <Card containerStyle={{ width: 350 }}>
                    <Text style={{ textAlign: "center", marginTop: 10, fontSize: 15 }}>
                        If the email address you entered is associated with an account, you will receive a password reset link shortly.
                    </Text>
                </Card>
            </View>
        </View>
    );
}

export default ForgotPasswordStaticResponsePage;