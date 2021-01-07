function changeSrc() {
    if (document.getElementById("workspaces-radio").checked) {
    document.getElementById("swap-workspaces-channels").src = "static/img/mockup-workspaces-real.png";
    } else if (document.getElementById("channels-radio").checked) { 
    document.getElementById("swap-workspaces-channels").src = "static/img/mockup-channels-real.png";
    }
}

