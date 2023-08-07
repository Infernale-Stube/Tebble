import { StyleSheet } from "react-native";

const campaignStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    scrollViewContent: {
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    levelButton: {
        width: 60,
        height: 60,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    levelButtonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default campaignStyles;