import { createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
    color: {
        primary: "#036F2F",
        secondary: "#00BCD4",
        error: "#E64A19",
        textColor: "#ffffff"
    },
    shape: {
        borderRadius: 4,
        backgroundColor: "#7B1FA2",
        textColor: "#FFFFFF",
        border: "#CCCCCC"
    },
    typography: {
        fontFamily: "Roboto"
    }
});
export default theme;