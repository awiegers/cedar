import { View, Text, StyleSheet } from 'react-native';

function ServingCount({servingCount}: { servingCount: number }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Serving Count: {servingCount}</Text>
        </View>
    );
}

export default ServingCount;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center'

    },
    text: {
        color: 'white',
        fontSize: 26
    }
})