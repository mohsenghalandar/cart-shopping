const counteritem = (state,id) => {
    const index = state.selectedItems.findIndex(item => item.id === id); 
    // we can't get exact Item because if it's not in array we have problem 
    // findIndex return to us a number without error.
    if( index === -1) 
    {
        return false
    }
    else {
       
        return state.selectedItems[index].quantity ; }
}
export {counteritem}
