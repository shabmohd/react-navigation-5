import React, { useState } from 'react';
import { StyleSheet, ScrollView } from "react-native";

import useResults from '../hooks/useResults';
import ResultsList from '../navigation/ResultList';

const Home = ({ navigation }) => {

  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter(result => {
      return result.restaurant.price_range === price;
    });
  };

  return (
    <ScrollView>
      <ResultsList results={filterResultsByPrice(2)} title="Cost Effective" />
      <ResultsList results={filterResultsByPrice(3)} title="Bit Pricier" />
      <ResultsList results={filterResultsByPrice(4)} title="Big Spender" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default Home;
