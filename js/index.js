    // lexical Environment
    // Global env
    // Record : {}
    // Parent : null

    // [[Environment]] = Global env
    function createSum () {
    // createSum env
    // Record : {}
    // Parent : Global env

        let sum = 0;
    // createSum env
    // Record : {sum : 0}
    // Parent : Global env

    // [[Environment]] = createSum env
        return function (value) {
    // anonymous env
    // Record : {sum : 0}
    // Parent : createSum env

            sum += value;
    // anonymous env
    // Record : {sum : value}
    // Parent : createSum env
            return sum;
        };
    }
    // Global env
    // Record : {createSum <function>}
    // Parent : null
    const sum = createSum();
    // Global env
    // Record : {createSum <function>, sum <function>}
    // Parent : null
    console.log(sum(3));
    console.log(sum(5));
    console.log(sum(20));