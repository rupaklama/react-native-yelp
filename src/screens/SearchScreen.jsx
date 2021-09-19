import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import yelp from '../api/yelp';

import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('pizza');
  const [data, setData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  console.log(data);

  useEffect(() => {
    let isMounted = true;

    try {
      const fetchApi = async () => {
        const response = await yelp.get('/search', {
          params: {
            limit: 50,
            term,
            location: 'elmhurst, queens, new york',
          },
        });

        if (isMounted) setData(response.data.businesses);
      };

      fetchApi();

      return () => (isMounted = false);
    } catch (err) {
      if (isMounted) {
        console.error('Error fetching data', err);
        setErrorMessage(`something went wrong - ${err.message}`);
      }
    }
  }, [term]);

  const filterResultsByPrice = price => {
    return data.filter(item => {
      return item.price === price;
    });
  };

  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text style={styles.textStyle}>We have found {data.length} results!</Text>

      <ScrollView>
        <ResultsList title='Cost Effective' stores={filterResultsByPrice('$')} />
        <ResultsList title='Bit Pricier' stores={filterResultsByPrice('$$')} />
        <ResultsList title='Big Spender' stores={filterResultsByPrice('$$$')} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginLeft: 15,
    marginVertical: 5,
  },
});

export default SearchScreen;
