import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import colors from '../utils/colors';

export const Form = ({ setAmount, setInterest, setMonths }) => {
  return (
    <View style={styles.viewForm}>
      <View style={styles.viewInputs}>
        <TextInput
          placeholder="Amount..."
          style={styles.input}
          keyboardType="numeric"
          onChange={(e) => setAmount(e.nativeEvent.text)}
        />

        <TextInput
          placeholder="Interest %"
          style={[styles.input, styles.inputPercentage]}
          keyboardType="numeric"
          onChange={(e) => setInterest(e.nativeEvent.text)}
        />
      </View>
      <View style={styles.container}>
        <Picker
          style={styles.picker}
          itemStyle={{ height: 100 }}
          onValueChange={(value) => setMonths(value)}
        >
          <Picker.Item label="3 months" value="3" />
          <Picker.Item label="6 months" value="6" />
          <Picker.Item label="12 months" value="12" />
          <Picker.Item label="24 months" value="24" />
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewForm: {
    position: 'absolute',
    bottom: 0,
    width: '85%',
    paddingHorizontal: 50,
    backgroundColor: colors.PRIMERY_COLOR_DARK,
    borderRadius: 30,
    height: 250,
    justifyContent: 'center',
  },
  viewInputs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: colors.PRIMARY_COLOR,
    borderRadius: 5,
    width: '55%',
    marginBottom: 10,
    color: '#000',
    paddingHorizontal: 20,
  },
  inputPercentage: {
    width: '40%',
  },
  container: {
    backgroundColor: 'yellow',
    borderRadius: 5,
  },
  picker: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 5,
  },
});
