import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, ScrollView, Image, Modal } from 'react-native';


class UserDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            openModal: false,
            personalData: []
        }
    }
    componentDidMount() {
        let data = this.props.navigation.getParam('empDetails')
        this.setState({ data: data.user })
        console.log('data >>', data.user)
    }
    UserData = (data) => {
        console.log(" >> >> ", data)
        this.setState({
            personalData: data,
            openModal: true
        })
    }
    
    render() {
        const { data, openModal, personalData } = this.state;
        return (

            <View >
                <Text style={{ fontSize: 20, fontWeight: '700', color: 'grey', justifyContent: 'center', alignItems: 'center', marginTop: 30, textAlign: 'center' }}>Employee Details</Text>
                <ScrollView style={{ paddingHorizontal: 10, marginLeft: 15 }}>
                    <FlatList
                        data={data}
                        contentContainerStyle={{ marginBottom: 100 }}
                        renderItem={({ item, index }) => <TouchableOpacity  key={index} style={{ borderRadius: 7, flexDirection: 'row', height: 150, backgroundColor: '#E5E5E5', marginTop: 20, width: '95%' }} >
                            <View >
                                <Text style={{ marginLeft: 15, marginTop: 5, fontSize: 16, textAlign: 'left' }}>Name : {item.name}</Text>
                                <Text style={{ marginLeft: 15, marginTop: 5, fontSize: 16, textAlign: 'left' }}>Age : {item.age}</Text>
                                <Text style={{ marginLeft: 15, marginTop: 5, fontSize: 16, textAlign: 'left' }}>Phone No. : {item.phoneNo}</Text>
                                <Text style={{ marginLeft: 15, marginTop: 5, fontSize: 16, textAlign: 'left' }}>Gender : {item.gender}</Text>
                                <Text style={{ marginLeft: 15, marginTop: 5, fontSize: 16, textAlign: 'left' }}>Email : {item.email}</Text>
                            </View>
                            <View style={{ paddingLeft: 30 ,marginTop : 15}} >
                                <Image style={{ width: 100, height: 100, }} source={require('./userImage.png')} />
                            </View>
                        </TouchableOpacity>}
                        keyExtractor={item => item.id}
                    />
                </ScrollView>
            </View>

        )
    }
}
export default UserDetails;