    // lexical Environment
    // Global env
    // Record : {}
    // Parent : null
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    // Global env
    // Record : {characters : 'abcdefghijklmnopqrstuvwxyz0123456789'}
    // Parent : null

    // [[Environment]] = Global env
    const generateKey = function (length, characters) {
    // generateKey env
    // Record : {length : 16, characters}
    // Parent : Global env
        let result = '';
        for (let i=0; i < length; i++ ) {
    // generateKey env
    // Record : {length : 16, characters, i, result}
    // Parent : Global env
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }
    // Global env
    // Record : {characters : 'abcdefghijklmnopqrstuvwxyz0123456789', generateKey <function>}
    // Parent : null
    const key = generateKey(16, characters);
    // Global env
    // Record : {characters : 'abcdefghijklmnopqrstuvwxyz0123456789', generateKey <function>, key}
    // Parent : null
    console.log(key);
