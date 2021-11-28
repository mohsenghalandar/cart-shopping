function shorter(title){
    const splitedtitle = title.split(" ")
    const newTitle = splitedtitle[0]+splitedtitle[1];
    return newTitle;
}
export {shorter} ; 