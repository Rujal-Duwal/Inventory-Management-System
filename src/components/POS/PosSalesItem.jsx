import React, {useState} from 'react';
import {Button, Checkbox, FormControlLabel, Grid, Paper, TextField} from "@material-ui/core";
import {addToPosSalesItem, addToPosSalesList} from "../../redux/pos/pos.action";
import Autosuggest from "react-autosuggest";
import {useStyles} from "../../pages/pos/pos.styles";
import {useDispatch, useSelector} from "react-redux";
import {posSalesItemSelector, posSalesListSelector} from "../../redux/pos/pos.selecotrs";
import {productsSelector} from "../../redux/products/products.selectors";


let itemExists
let itemFound

/**
 *
 * @returns {*}
 * @constructor
 */
function PosSalesItem() {
    const [suggestions,setSuggestions] =useState([])
    const [value,setValue] =useState("")

    const classes = useStyles();
    const salesItem=useSelector(posSalesItemSelector)
    const salesList = useSelector(posSalesListSelector)
    const products = useSelector(productsSelector)
    const dispatch = useDispatch()

    const handleItemCode=(e)=>{
        if(e.key==="Enter") {
            let dataForSalesItem
            if (e.target.value !== "") {
                itemExists=salesList.find(product=>product.itemCode===e.target.value)
                if(itemExists)
                    salesList.map(product=>product.itemCode===e.target.value?product.quantity++:product)
                else{
                    itemFound = products.find(product => product.itemCode === e.target.value)
                    if(itemFound) {
                        dataForSalesItem = {
                            itemCode: itemFound.itemCode,
                            name: itemFound.name,
                            rate: itemFound.sellingPrice,
                            quantity: 1
                        }
                    }
                }
            }
            if (itemFound)
            {
                dispatch(addToPosSalesList(dataForSalesItem))
                itemFound=""}
            dispatch(addToPosSalesItem())
        }
    }

    const handleAddToPurchase=()=>{
        dispatch(addToPosSalesList(salesItem))
        dispatch(addToPosSalesItem())
    }

    /**
     *
     ************ Functions for AutoSelect **************
     *
     */
    // Teach AutoSuggest how to calculate suggestions for any given input value.
    const getSuggestions = () => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
        return inputLength === 0 ? [] : products.filter(lang =>
            {
                return(lang.name.toLowerCase().slice(0, inputLength) === inputValue)
            }
        );
    };

    // AutoSuggest will call this function every time you need to update suggestions.
    // You already implemented this logic above, so just use it.
    const onSuggestionsFetchRequested = () => {
        setSuggestions(getSuggestions(value))
    };

    const getSuggestionValue = suggestion => {
        const dataForSalesItem={
            itemCode:suggestion.itemCode,
            name:suggestion.name,
            rate:suggestion.sellingPrice,
        }
        dispatch(addToPosSalesItem(dataForSalesItem))
        return(suggestion.name)
    };

    const renderSuggestion = suggestion => (
        <div>
            {suggestion.name}
        </div>
    );

    const inputProps = {
        placeholder: salesItem.name,
        value,
        onChange: ((e,{newValue})=>setValue(newValue))
    };
    /**
     // ********************************************** //
     */

    return (
        <Paper square className={classes.items} style={{ padding: '2px 5px 2px 30px' }}>
            <Grid item container style={{ padding: '4px' }} spacing={2}>
                <Grid item xs={4}>
                    <TextField
                        autoFocus
                        id="itemCode"
                        variant={"outlined"}
                        label="Item Code"
                        style={{ width: '100%' }}
                        value={salesItem.itemCode}
                        onKeyDown={handleItemCode}
                        onInput={
                            (e)=>
                                dispatch(addToPosSalesItem({...salesItem, itemCode: e.target.value}))
                        }
                    />
                </Grid>
                <Grid item xs={4}>
                    <Autosuggest
                        suggestions={suggestions}
                        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                        getSuggestionValue={getSuggestionValue}
                        renderSuggestion={renderSuggestion}
                        inputProps={inputProps}
                    />
                </Grid>
                <Grid item xs={4}>
                </Grid>
                <Grid item xs={2}>
                    <TextField
                        id="rate"
                        variant={"outlined"}
                        label="Rate"
                        value={salesItem.rate}
                    />
                </Grid>
                <Grid item xs={2}>
                    <TextField
                        id="discount"
                        variant={"outlined"}
                        label="Discount"
                        value="0"
                        style={{ width: '100%' }}
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        id="itemCode"
                        label="Quantity"
                        variant={"outlined"}
                        style={{ width: '100%' }}
                        value={salesItem.quantity}
                        onChange={
                            (e)=>dispatch(addToPosSalesItem({...salesItem, quantity:e.target.value}))
                        }
                    />
                </Grid>
                <Grid item xs={2}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                disableRipple
                                name="checkedB"
                                color="primary"
                            />
                        }
                        label="Packet"
                        labelPlacement="start"
                        style={{ marginLeft: '0px' }}
                    />
                </Grid>
                <Grid item xs={3} alignItems="right" style={{ paddingRight: '0vw' }}>
                    <Button
                        style={{ top: '-20px', backgroundColor: '#5087c9', color:'white' }}
                        variant="contained"
                        onClick={handleAddToPurchase}
                    >
                        Add to Purchase
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default PosSalesItem;