// https://api.github.com/users


async function getGithubuser(){
    let response = await fetch('https://api.github.com/users')
    console.log(response)
    let data = await response.json()
    // console.log(data)
    // console.log(data[0].avatar_url)
    let display = "";
    data.map((value) => {
        display += 
        `<div class="cards">
            <img src=${value.avatar_url} alt=${value.login}"">
            <h1>${value.login}</h1>
        </div>`
    })
    document.getElementById("root").innerHTML = display;

    await new Promise((resolve, reject) => {
        setTimeout(resolve, 2000);
    })

    document.getElementById("done").innerText = "All data is been displayed"
    console.log("love Jesus")
}

getGithubuser()