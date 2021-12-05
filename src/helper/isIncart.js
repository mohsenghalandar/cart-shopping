const isIncart = (state,id) =>{
    const resualt = !!state.selectedItems.find(item => item.id === id);
    return resualt;
}
export {isIncart}
