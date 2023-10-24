    // lexical Environment
    // Global env
    // Record : {}
    // Parent : null
    const array = [1, 2, 3, 4, 5, 6, 7];
    // Global env
    // Record : {array = [1, 2, 3, 4, 5, 6, 7]}
    // Parent : null

    // [[Environment]] = Global env
    const removeElement = function (newArray, item) {
    // removeElement env
    // Record : {item : 5}
    // Parent : Global env
        const index = newArray.indexOf(item);
    // removeElement env
    // Record : {item : 5, index : newArray.indexOf(item)}
    // Parent : Global env
        if (index === -1) {
            console.log('There is no item')
            return
        }
        newArray.splice(index, 1);
    }
    // Global env
    // Record : {array = [1, 2, 3, 4, 5, 6, 7], removeElement <function>}
    // Parent : null
    removeElement(array, 5);
    console.log('Result:', array)