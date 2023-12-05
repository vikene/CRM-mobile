import { Button, Card, Input } from '@rneui/themed';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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

const LoginPageComponent = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Hispid CRM</Text>
                <Text>Login</Text>
            </View>
            <View style={styles.formcontainer}>
                <Card containerStyle={{ width: 250 }}>
                    <Input placeholder="Username / Email" />
                    <Input placeholder="Password" secureTextEntry={true} />
                    <View style={{ flexDirection: "row", marginBottom: 10 }}>
                        <Button type="clear">Forgot Password?</Button>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 10 }}>
                        <Button type="outline">Reset</Button>
                        <Button>Submit</Button>
                    </View>
                    <View >
                        <Text style={{ textAlign: "center", marginTop: 10 }}>Don't have an account? <Button type="clear"><Text style={{ fontWeight: "bold" }}>Sign up</Text></Button></Text>
                    </View>
                </Card>
            </View>
        </View>
    );
}

export default LoginPageComponent;