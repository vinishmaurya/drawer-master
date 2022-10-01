import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { colors } from "./color";
const Example = ({chrckcell}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
function showDatePicker(){
    setDatePickerVisibility(true)
}
//   const showDatePicker = () => {
//   };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    // chrckcell(date);//using for data send pairent component
    // console.log("A date has been picked: ", date);
    hideDatePicker();
  };

  return (
    <View>
      <Pressable onPress={showDatePicker} style={{backgroundColor:colors.colors.white,padding:5,borderRadius:4}}><Text>Show Date Picker</Text></Pressable>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default Example;