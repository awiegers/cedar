import { Checkbox } from 'expo-checkbox';
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";

function ChecklistCard({ingredient, category, amounts}: {ingredient: string, category: string, amounts: { quantity: number, unit: string }[]}) {
    const [isChecked, setChecked] = useState(false);

    function joinAmounts(amounts: { quantity: number, unit: string }[]) {
        return amounts.map(amount => amount.quantity + ' ' + amount.unit).join(', ');

    }

    return (
        <View>
            <View style={styles.item}>
                <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
                <Text style={styles.text}>{ingredient} - {category}</Text>
            </View>
            <View style={styles.amounts}>
               <Text style={styles.amount}>{joinAmounts(amounts)}</Text>
            </View>
        </View>
    )
}

export default ChecklistCard;

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    amounts: {
        flexDirection: 'row',
        marginLeft: 64
    },
    amount: {
        color: 'white',
        marginRight: 8
    },
    checkbox: {
        margin: 8
    },
    text: {
        color: 'white'
    }
})

