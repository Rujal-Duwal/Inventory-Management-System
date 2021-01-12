import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    pos: {
        backgroundColor: '#E4E2E2',

        //Css for AUTO Suggest
        '& .react-autosuggest__input':{
            width: 200,
            height: 30,
            padding: "4px 8px",
            fontFamily: "Helvetica, sans-serif",
            fontWeight: 300,
            fontSize: 16,
            border: "1px solid #aaa",
            borderRadius: 4,
        },
        '& .react-autosuggest__container': {
            position: "relative"
        },
        '& .react-autosuggest__input--focused': {
            outline: "none"
        },
        '& .react-autosuggest__input--open':{
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0
        },
        '& .react-autosuggest__suggestions-container':{
            display:"none"
        },
        '& .react-autosuggest__suggestions-container--open':{
            display: "block",
            position: "absolute",
            top: 51,
            width: 280,
            border: "1px solid #aaa",
            backgroundColor: "#fff",
            fontFamily: "Helvetica, sans-serif",
            fontWeight: 300,
            fontSize: 16,
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4,
            zIndex: 2,
        },
        '& .react-autosuggest__suggestions-list':{
            margin: 0,
            padding: 0,
            listStyleType: "none"
        },
        '& .react-autosuggest__suggestion':{
            cursor: "pointer",
            padding: "10px 20px"
        },
        '& .react-autosuggest__suggestion--highlighted':{
            backgroundColor: "#ddd"
        },

        '& .MuiToolbar-dense': {
            minHeight: '40px'
        },
        flexGrow: 1,

        //style for shrinking text field
        '& input': {
            height: 1,
        },
        '& label': {
            top: -6
        },
        /**/

        '& .MuiAppBar-root': {
            '& .MuiIconButton-root': {
                padding: 0
            }
        },
        '& .MuiTypography-body2': {
            fontSize: '0.8rem'
        },

        '& .MuiTableCell-root': {
            fontSize: '0.8rem'
        },

        '& .MuiTableContainer-root': {
            marginTop: '0px'
        },

        '& .MuiTableCell-head': {
            color: 'white'
        }
    },

    body: {
        paddingLeft: '16px',
        padding: '8px',
        '& .MuiPaper-root': {
            padding: '10px',
            borderRadius: 0,
        }
    },

    items: {
        paddingLeft: '40px'
    },

    menuButton: {
        marginRight: theme.spacing(2),
    },

    customer: {
        '& .MuiTextField-root': {
            margin: theme.spacing(0.8),
        }
    },

    checkout:{
        '& .MuiListItem-dense': {
            paddingTop: 0,
            paddingBottom: 0,
        }
    }
}));