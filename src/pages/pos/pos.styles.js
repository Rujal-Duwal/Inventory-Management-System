import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    pos: {
        backgroundColor: '#E4E2E2',

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