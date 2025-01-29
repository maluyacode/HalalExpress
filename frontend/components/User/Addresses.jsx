import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../styles/theme'
import Divider from '../Divider'
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';

const Addresses = ({ item }) => {
    return (
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Entypo name="location" size={24} color={COLORS.primary} />
                <View style={{ flex: 1, height: 60, justifyContent: 'center' }}>
                    <Text style={{ fontFamily: 'regular', fontSize: 14, marginLeft: 10, color: COLORS.gray }} numberOfLines={3} ellipsizeMode='tail'>{item.address}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Feather name="edit" size={24} color={COLORS.secondary} style={{ marginLeft: 5 }} />
                    <Feather name="trash-2" size={24} color={COLORS.red} style={{ marginLeft: 5 }}/>
                </View>
            </View>
            <Divider />
        </View>
    )
}

export default Addresses

const styles = StyleSheet.create({})