import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import { Footer, Form, ResultCalculation } from './src/components';
import colors from './src/utils/colors';

export default function App() {
  const [amount, setAmount] = useState(null);
  const [interest, setInterest] = useState(null);
  const [months, setMonths] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const calculate = () => {
    reset();
    if (!amount) {
      setErrorMessage('Add amount requested');
    } else if (!interest) {
      setErrorMessage('Add interest');
    } else if (!months) {
      setErrorMessage('Select Months to pay');
    } else {
      const i = interest / 100;
      const fee = amount / ((1 - Math.pow(i + 1, -months)) / i);
      setTotal({
        monthlyFee: fee.toFixed(2).replace('.', ','),
        totalPayable: (fee * months).toFixed(2).replace('.', ','),
      });
    }
  };

  const reset = () => {
    setErrorMessage('');
    setTotal(null);
  };

  useEffect(() => {
    if (amount && interest && months) calculate();
    else reset();
  }, [amount, interest, months]);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.background} />
        <Text style={styles.titleApp}>Loan Form</Text>
        <Form
          setAmount={setAmount}
          setInterest={setInterest}
          setMonths={setMonths}
        />
      </SafeAreaView>

      <ResultCalculation
        errorMessage={errorMessage}
        amount={amount}
        interest={interest}
        months={months}
        total={total}
      />

      <Footer calculate={calculate} />
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    height: 380,
    alignItems: 'center',
    backgroundColor: 'red',
  },
  background: {
    position: 'absolute',
    backgroundColor: colors.PRIMARY_COLOR,
    height: 250,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    zIndex: -1,
  },
  titleApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,
  },
});
