import {createMuiTheme, fade, makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    dataTable: {
        "& th":{
            //backgroundColor:"#E2EAFF",
            // padding:5
        },
        "&  button": {
            margin: 10,
        },
        "& .search": {
            color:'black',
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: '#E9E9E9',
            '&:hover': {
                backgroundColor: fade(theme.palette.common.black, 0.05),
            },
            marginRight: theme.spacing(2),
            marginLeft: 0,
            //width: '222px',
            [theme.breakpoints.up('sm')]: {
                // marginLeft: theme.spacing(3),
                width: 'auto',
            },
            margin:'auto',
        },
        "& .searchIcon": {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        "& .inputRoot": {
            color: 'inherit',
        },
        "& .inputInput": {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
    },

}))

export const overRidesMuiTheme =()=> createMuiTheme({
    overrides:{
        MUIDataTableHeadCell:{
            fixedHeader:{
                backgroundColor: "#E2EAFF",
                paddingLeft: 20
            }
        },
        MuiTableCell:{
            root:{
                padding:4
            }
        },
        MUIDataTableToolbar:{
            left:{
                flex:"none"
            },
            icon:{
                display:"none"
            }
        },
    }
})
