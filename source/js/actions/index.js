
export const addMutter = (mutterText) => {
    console.log('add mutter:', mutterText);
    return {
        type: 'ADD_MUTTER',
        mutterText
    }
}
