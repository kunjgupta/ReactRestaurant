import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import Yelp from "../api/Yelp";

const ResultShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    console.log(result)

    const getKunj = async (id) => {
        console.log('Search Detail API call: ' + id)
        const response = await Yelp.get(`/${id}`);
        setResult(response.data)
    }

    useEffect(() => {
        getKunj(id)
    }, []);

    if (!result) {
        return null
    }

    return (
        <View style={styles.viewStyle}>
            <Text>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({item}) => {
                    return <Image style={styles.image} source={{ uri: item }} />
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    image: {
        height:200,
        width:300
    }
});

export default ResultShowScreen;