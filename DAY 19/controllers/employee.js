const name="Employee";
const add=(req,res)=>{
    res.send(`${name} added successfully!`)
}
const view=(req,res)=>{
    res.send(`${name} updated successfully!`)
}
const deleteUser=(req,res)=>{
    res.send(`${name} deleted successfully!`)
}

const update=(req,res)=>{
    res.send(`${name} updated successfully!`)
}

export {add,view,deleteUser,update}