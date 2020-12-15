export const colorCode = (icolor: string) => {
    if(COLORS.findIndex(color => color === icolor) !== -1){
        return COLORS.indexOf(icolor);
    }else{
        throw new Error('Delete this line and implement this function')
    }
}

export const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];