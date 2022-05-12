module.exports = {
    getAll,
    getByIndex,
    add,
}

const OBJ = ['hi']

async function getAll(){
    return OBJ
}

async function getByIndex(i){
    return OBJ[i]
}

async function add(object){
    OBJ.push(object)
    return object
}