import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const ResultCalculation = ({
  errorMessage,
  amount,
  interest,
  months,
  total,
}) => {
  return (
    <View style={styles.content}>
      {total && (
        <View style={styles.boxResult}>
          <Text style={styles.title}>RESUME</Text>
          <DataResult title={'Amount requested'} value={`$ ${amount}`} />
          <DataResult title={'Interest %:'} value={`${interest} %`} />
          <DataResult title={'Plazos:'} value={` ${months} months `} />
          <DataResult title={'Monthly Pay:'} value={`$ ${total.monthlyFee}`} />
          <DataResult title={'Total:'} value={`$ ${total.totalPayable}`} />
        </View>
      )}
      <View>
        <Text style={styles.error}>{errorMessage}</Text>
      </View>
    </View>
  );
};

function DataResult({ title, value }) {
  return (
    <View style={styles.value}>
      <Text>{title}</Text>
      <Text>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  error: {
    textAlign: 'center',
    color: 'red',
    fontWeight: 'bold',
    fontSize: 20,
  },
  content: {
    marginTop: 0,
    marginHorizontal: 40,
  },
  boxResult: {
    padding: 30,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  value: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});
