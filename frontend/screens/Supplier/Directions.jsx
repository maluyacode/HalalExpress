import { Linking, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { SupplierContext } from '../../contexts/SupplierContext'
import GoogleMapView from '../../components/GoogleMapView'
import { COLORS, SIZES } from '../../styles/theme'

const Directions = ({ item }) => {
    const [key, setKey] = useState(0)
    const { supplierObj, setSupplierObj } = useContext(SupplierContext)
    const coords = supplierObj.coords
    const onDirectionClick = () => {
        const url = Platform.select({
            ios: " maps:" + coords.latitude + "," + coords.longitude,
            android: "geo:" + coords.latitude + "," + coords.longitude + "?z=16"
        })
        Linking.openURL(url);
    }

    useEffect(() => {
        setKey(prev => prev + 1)
    }, [])

    return (
        <View>
            <GoogleMapView key={key} placeList={[coords]} title={item.title} />

            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", margin: 12 }}>
                <Text style={[styles.small, { width: SIZES.width / 1.6 }]}>
                    {coords.address}
                </Text>

                <TouchableOpacity style={styles.ratingBtn} onPress={() => onDirectionClick()}>
                    <Text>Directions</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Directions

const styles = StyleSheet.create({
    small: {
        fontSize: 13,
        fontFamily: "regular",
        color: COLORS.gray
    },
    ratingBtn: {
        borderColor: COLORS.black,
        borderWidth: 1,
        borderRadius: 9,
        padding: 6
    }
})