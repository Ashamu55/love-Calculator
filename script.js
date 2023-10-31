const disp = () => {
    let name = document.getElementById("first").value
    let sec = document.getElementById("second").value
    let All = {name, sec}

    let mat = Math
    let loved = mat.random()*100
    // console.log(mat.round(loved));
    let overlove = mat.round(loved)

    if(name !=="" && sec !==""){
        // TodoArray.push(All)
        first.value = "";
        second.value = "";
        showError.innerHTML = ""
        display.innerHTML = (`Love score for ${name} and ${sec} : ${overlove}%`);
        if (overlove < 50){
            message.innerHTML = `<p>😫😔You are not compatible😔😇</p>`
        }else if (overlove > 50){
            message.innerHTML = `<p>😍🎉Congratulation you are compatible🥰😍</p>`
        }
    }else{
        showError.innerHTML = `<p>Not fill yet🤬😡</p>`
    }
}