import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const CustomDob = ({onDateSelected}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    const dt = new Date(date); // Ensure we create a new Date object
    const day = String(dt.getDate()).padStart(2, '0');
    const month = String(dt.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = dt.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    setSelectedDate(formattedDate);
    onDateSelected(formattedDate); // Call the callback with the formatted date
    hideDatePicker();
  };

  return (
    <View
      style={{
        width: responsiveWidth(41),
        height: 55,
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        justifyContent: 'center',
        paddingLeft: responsiveWidth(5),
        paddingRight: responsiveWidth(5),
      }}>
      <View>
        <TouchableOpacity onPress={showDatePicker}>
          <Text>{selectedDate ? selectedDate : 'Select DOB'}</Text>
        </TouchableOpacity>

        {/* Date-Picker-modal */}
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>
    </View>
  );
};

export default CustomDob;
