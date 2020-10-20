import * as React from "react";
import { View } from "react-native";
import Input from "../input";
import moment from "moment";
import RNDatePicker from "react-native-modal-datetime-picker";
import styles from "./styles";

interface DatePickerProps {
    value?: Date;
    placeHolder?: string;
    onChange(date: Date): void;
}
const oneDay = 1;

export default function DatePicker(props: DatePickerProps) {
    const [showPicker, setShowPicker] = React.useState<boolean>(false);
    const [date, setDate] = React.useState<Date>(props.value || (new Date()));

    function onChange() {
        // Intentionally left empty as we don't want to do anything on change
    }

    function onDateChange(newDate?: Date) {
        if (newDate) {
            setDate(newDate);
            setShowPicker(false);
            if (props.onChange) {
                props.onChange(newDate);
            }
        }
    }

    function onFocus() {
        if (!showPicker) {
            setShowPicker(true);
        }
    }

    function closeModal() {
        setShowPicker(false);
    }

    return (
        <View>
            <Input
                placeHolder={props.placeHolder}
                onChange={onChange}
                value={moment(date).format("dddd, MMMM Do YYYY")}
                containerStyle={styles.pickerDisplay}
                onFocus={onFocus}
                disabled={showPicker}
            />
            <RNDatePicker
                date={date}
                isVisible={showPicker}
                mode="date"
                display="calendar"
                minimumDate={moment().add(oneDay, "day").toDate()}
                onConfirm={onDateChange}
                onCancel={closeModal}
                headerTextIOS={props.placeHolder}
            />
        </View>
    );
}