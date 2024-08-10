let p = fetch("https://randomuser.me/api")

p.then((data)=>{
    return data.json()
}).then((data)=>{
    console.log(data)
})