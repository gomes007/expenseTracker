import { Pressable, View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { GlobalStyles } from "../../constants/styles";
import { getFormatDate } from '../../util/date';

function ExpenseItem({ id, description, date, amount }) {

    const navigation = useNavigation();

    function expensePresseHandler() {
        navigation.navigate('ManageExpense', {
            expenseId: id
        });
    }

    return (
        <Pressable onPress={expensePresseHandler} style={({ pressed }) => [styles.container, pressed && styles.pressed]}>
            <View style={styles.detailsContainer}>
                <View>
                    <Text style={[styles.textBase, styles.description]}>{description}</Text>
                    <Text style={[styles.textBase]}>{getFormatDate(date)}</Text>
                </View>
                <View style={styles.amountContainer}>
                    <Text style={styles.amount}>${amount.toFixed(2)}</Text>
                </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: GlobalStyles.colors.primary500,
        padding: 12,
        marginTop: 10,
        borderRadius: 6,
        shadowColor: GlobalStyles.colors.gray500,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 3,
        marginVertical: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    pressed: {
        opacity: 0.75
    },
    detailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1, // Garante que o container dos detalhes preencha o espaço
    },
    description: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    date: {
        fontSize: 14,
        color: GlobalStyles.colors.gray700,
    },
    amountContainer: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: 'white',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 80,
    },
    amount: {
        fontWeight: 'bold',
        color: GlobalStyles.colors.primary500,
    },
    textBase: {
        color: 'white',
    }
});

export default ExpenseItem;
