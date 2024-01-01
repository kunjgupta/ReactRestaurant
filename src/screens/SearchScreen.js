import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from "../components/SearchBar";
import useResult from "../hooks/useResult";
import ResultList from "../components/ResultList";

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [serachAPI, results, errorMessage] = useResult();

    console.log(results)

    const filterResultByPrice = (price) => {
        //price === '$' || '$$' || '$$$'
        return results.filter(result => {
            return result.price === price;
        });
    };

    return (
        <View style={styles.viewStyle}>
            <SearchBar
                term={term}
                onTermChange={(newTerm) => setTerm(newTerm)}
                onTermSubmit={() => serachAPI(term)} />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultList
                    title="Cost Effective"
                    results={filterResultByPrice('$')} />
                <ResultList
                    title="Big Procier"
                    results={filterResultByPrice('$$')} />
                <ResultList
                    title="Big Spender"
                    results={filterResultByPrice('$$$')} />
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#FFFFFF',
        flex: 1
    }
});

export default SearchScreen;