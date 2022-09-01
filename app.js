document.getElementById('btn').addEventListener('click',showProfile)

function showProfile() {
    let input =document.getElementById('input-box').value 

    let url = "https://api.github.com/users/"+input
    fetch(url)
    .then(res =>res.json())
    .then(data =>{
        if (data.message) {
            document.getElementById('info-first-child').innerHTML = 'profile not found'
            

        } else {
            
            document.getElementById('info-first-child').innerHTML = `
            
            <img src = '${data.avatar_url}'
            style = " width : 100%"
            <p> ${data.name} ${data.login}</p>
            <p> ${data.bio} </p>
            
            `
        }
    })
    .catch(e =>{
        console.log(e)
    })
}