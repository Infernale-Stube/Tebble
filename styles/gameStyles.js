import { StyleSheet } from "react-native";

const gameStyles = StyleSheet.create({
    pieceContainer: {
        position: 'absolute',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    grid: {
        width: 300,
        height: 300,
    },
    row: {
        flexDirection: 'row',
    },
    cell: {
        width: 30,
        height: 30,
        borderColor: 'black',
        borderWidth: 1,
    },
});

export default gameStyles;
