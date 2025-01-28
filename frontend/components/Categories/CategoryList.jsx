import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import CategoryItem from './CategoryItem'
import { useFocusEffect } from '@react-navigation/native'
import axios from 'axios'
import baseUrl from '../../assets/common/baseUrl'

const CategoryList = ({ setSelectedCategory, setSelectedSection, setSelectedValue }) => {
    const [categories, setCategories] = useState([]);
    const [selected, setSelected] = useState(null)

    const getCategories = async () => {
        try {
            const response = await axios.get(`${baseUrl}/api/category`);
            setCategories(response.data);
        } catch (error) {
            console.log("Error fetching restaurants:", error);
        }
    };

    useFocusEffect(
        React.useCallback(() => {
            getCategories();
        }, [])
    );

    const handleSelectedCategory = (item) => {
        if (selected == item.value) {
            setSelectedCategory(null);
            setSelected(null);
            setSelectedSection(null);
            setSelectedValue(null);
        } else {
            setSelectedCategory(item._id);
            setSelected(item.value);
            setSelectedSection('category');
            setSelectedValue(item.title);
        }
    }

    return (
        <FlatList
            data={categories}
            showsHorizontalScrollIndicator={false}
            horizontal
            style={{ marginTop: 5 }}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) =>
                <TouchableOpacity onPress={() => handleSelectedCategory(item)}>
                    <CategoryItem selected={selected} category={item} />
                </TouchableOpacity>}
        />
    )
}

export default CategoryList

const styles = StyleSheet.create({})