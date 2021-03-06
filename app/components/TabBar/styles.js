import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white'
    },
    buttonContainer: {
        backgroundColor: '#efefed',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'row'
    },
    categoryButton: {
        margin: 3,
        borderWidth: 1,
        borderColor: '#d4d4d4'
    },
    categoryButtonText: {
        textAlign: 'center',
        margin: 5,
        fontSize: 10,
        color: '#666',
        fontWeight: 'bold'

    },
    darkBackground: {
        backgroundColor: '#d4d4d4'
    },
    darkFont: {
        color: '#7d7b7b'
    },
    informationContainer: {
        flex: 1,
        padding: 10
    },
    informationHeading: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#333'
    },
    informationTitle: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 15,
        color: '#333'
    },
    lightBackgroung: {
        backgroundColor: 'transparent'
    },
    lightFont: {
        color: '#efefed'
    },
    link: {
        color: 'blue',
        textDecorationLine: 'underline'
    },
    saveButton: {
        fontSize: 18,
        color: '#444',
        textAlign: 'center'
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 10,
    },
    tabHeading: {
        textAlign: 'center',
        fontSize: 30,
    },
    tabs: {
        height: 45,
        flexDirection: 'row',
        paddingTop: 5,
        borderWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomColor: 'rgba(0,0,0,0.05)',
    },
    tabView: {
        flex: 1,
        padding: 10,
        backgroundColor: 'rgba(0,0,0,0.01)',
    }
});
export default styles;
