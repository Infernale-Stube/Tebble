import { StyleSheet } from "react-native";

const campaignStyles = StyleSheet.create({
    headlineContainer: {
        flex: 0.5,
        justifyContent: "center",
        alignItems: "center",
        fontSize: 100,
    },
    headline: {
        fontSize: 18,
        fontFamily: "BungeeSpice",
    },
    scrollViewContainer: {
        flex: 4,
    },
    bottomButtonContainer: {
        flex: 0.5,
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingLeft: 25,
        paddingRight: 25,
    },
    scrollViewContent: {
        paddingVertical: 20,
        paddingHorizontal: 35,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    levelButton: {
        width: 60,
        height: 60,
        backgroundColor: '#FF5733',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    disabledButton: {
        backgroundColor: 'grey',
        opacity: 0.5,
    },
    levelButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    disabledButtonText: {
        color: 'black',
    },
});

export default campaignStyles;
