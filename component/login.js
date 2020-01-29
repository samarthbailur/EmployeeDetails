import React, { Component } from 'react';
import { View, Text, Dimensions, TextInput, TouchableOpacity, ActivityIndicator, StatusBar, SafeAreaView } from 'react-native';
const screenWidth = Dimensions.get('window').width;
const screenHeigth = Dimensions.get('window').height;
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            email: '',
            password: '',
            err: ''
        }
    }
   
    Login = () => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        const { email, password } = this.state;
        if (reg.test(this.state.email) === true){
            if (email != '' || password != '') {
                if (user.username == email) {
                    if (user.password == password) {
                        this.props.navigation.navigate('UserDetails',{empDetails})
                    }
                    else {
                        this.setState({ err: 'Invalid Password' })
                    }
                }
                else {
                    this.setState({ err: 'Invalid Email' })
                }
            }
            else {
                this.setState({ err: 'Invalid Email And Password' })
            }
        }
        else{
            this.setState({ err: 'Invalid Email Format' })
        }
        return;
        

    }
    render() {
        return (
            <SafeAreaView>
                <StatusBar backgroundColor='#f8f8f8' barStyle="dark-content" />
                <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: screenHeigth / 3.5 }}>
                    <View style={{ width: screenWidth * 0.9, backgroundColor: '#f8f8f8', height: 50, borderRadius: 7, marginBottom: 20, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', borderWidth: 1, padding: 10 }} >
                        <TextInput
                            style={{ fontWeight: '300', fontSize: 16, left: 40, position: 'absolute', width: screenWidth * 0.8 }}
                            placeholder='Enter email'
                            blurOnSubmit={false}
                            value={this.state.email}
                            onChangeText={(text) => this.setState({ email: text,err : '' })}
                        />
                    </View>
                    <View style={{ width: screenWidth * 0.9, backgroundColor: '#f8f8f8', height: 50, borderRadius: 7, marginBottom: 20, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', borderWidth: 1, padding: 10 }} >
                        <TextInput
                            type='password'
                            style={{ fontWeight: '300', fontSize: 16, left: 40, position: 'absolute', width: screenWidth * 0.8 }}
                            placeholder='Enter Password'
                            blurOnSubmit={false}
                            secureTextEntry={true}
                            value={this.state.password}
                           
                            onChangeText={(text) => this.setState({ password: text ,err : ''})}
                        />
                    </View>
                    <Text style={{ color: 'red' }}>{this.state.err}</Text>
                    <TouchableOpacity onPress={() => this.Login()} style={{ borderRadius: 7, height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000', marginTop: 20, width: '90%' }}>
                        <Text style={{ fontSize: 18, fontWeight: '500', color: '#fff' }}> Login</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}
const user =
{
    username: "hruday@gmail.com",
    password: 'hruday123'
}
const empDetails = {
    user: [{
        "id": 1,
        "name": "test1",
        "age": "11",
        "gender": "male",
        "email": "test1@gmail.com",
        "phoneNo": "9415346313"
    },
    {
        "id": 2,
        "name": "test2",
        "age": "12",
        "gender": "male",
        "email": "test2@gmail.com",
        "phoneNo": "9415346314"
    },
    {
        "id": 3,
        "name": "test3",

        "age": "13",
        "gender": "male",
        "email": "test3@gmail.com",
        "phoneNo": "9415346315"
    },
    {
        "id": 4,
        "name": "test4",
        "age": "14",
        "gender": "male",
        "email": "test4@gmail.com",
        "phoneNo": "9415346316"
    },
    {
        "id": 5,
        "name": "test5",
        "age": "15",
        "gender": "male",
        "email": "test5@gmail.com",
        "phoneNo": "9415346317"
    },
    {
        "id": 6,
        "name": "test6",
        "age": "16",
        "gender": "male",
        "email": "test6@gmail.com",
        "phoneNo": "9415346318"
    }
    ]
}
export default Login;