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

const ForgotPasswordPage = (): JSX.Element => {
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
                    <Text style={{ textAlign: "center", marginTop: 10, fontSize: 15 }}>Enter your email address and we'll send you a link to reset your password.</Text>
                    <Card.Divider style={{ marginTop: 20, marginBottom: 20 }} />
                    <Input placeholder="Username / Email" />
                    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 10 }}>
                        <Button>Reset password</Button>
                    </View>
                </Card>
            </View>
        </View>
    );
}

export default ForgotPasswordPage;