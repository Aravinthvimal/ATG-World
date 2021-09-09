$('.nav-link').on('click', function() {
	$('.active-link').removeClass('active-link');
	$(this).addClass('active-link');
});

function ready() {
    document.getElementsByTagName("i")[24].style.display = "none";
    document.getElementById("leave").style.display = "none";
}


function group() {
    if(document.getElementById("join-group").innerHTML == "Join Group"){
        document.getElementById("join-group").innerHTML = "Leave Group";
    } else {
        document.getElementById("join-group").innerHTML = "Join Group";
    } 
};

function lgGroup1() {
    document.getElementById("join").style.display = "none"
    document.getElementById("leave").style.display = "block";  
}

function lgGroup2() {
    document.getElementById("leave").style.display = "none"
    document.getElementById("join").style.display = "block";  
}

function toggle() {
    var bg = document.getElementById("dropdownMenuButton1");
    bg.classList.remove("bg-white");
}

function editLocation() {
    const editLoc = document.getElementById("location-text");

    editLoc.disabled = false; 
    editLoc.value = "";
    editLoc.focus();

    document.getElementsByTagName("i")[25].style.display = "none";
    document.getElementsByTagName("i")[24].style.display = "block";
}

function saveLocation() {
    document.getElementsByTagName("i")[25].style.display = "none"
    document.getElementsByTagName("i")[24].style.display = "block";
    document.getElementById("location-text").disabled = true;
}

function reset() {
    document.getElementById("location-text").value = "";
    document.getElementsByTagName("i")[24].style.display = "none"
    document.getElementsByTagName("i")[25].style.display = "block";
}

function follow1() {
    if(document.getElementById("following1").innerHTML == "Follow") {
        document.getElementById("following1").innerHTML = "Followed";
        var x = document.getElementsByClassName("follow-btn");
        x[0].style.background = "black";
        var y = document.getElementsByClassName("follow-btn-txt");
        y[0].style.color = "white";
    } else {
        document.getElementById("following1").innerHTML = "Follow";
        var x = document.getElementsByClassName("follow-btn");
        x[0].style.background = "#EDEEF0";
        var y = document.getElementsByClassName("follow-btn-txt");
        y[0].style.color = "black";
    }
};

function follow2() {
    if(document.getElementById("following2").innerHTML == "Follow") {
        document.getElementById("following2").innerHTML = "Followed";
        var x = document.getElementsByClassName("follow-btn");
        x[1].style.background = "black";
        var y = document.getElementsByClassName("follow-btn-txt");
        y[1].style.color = "white";
    } else {
        document.getElementById("following2").innerHTML = "Follow";
        var x = document.getElementsByClassName("follow-btn");
        x[1].style.background = "#EDEEF0";
        var y = document.getElementsByClassName("follow-btn-txt");
        y[1].style.color = "black";
    }
};

function follow3() {
    if(document.getElementById("following3").innerHTML == "Follow") {
        document.getElementById("following3").innerHTML = "Followed";
        var x = document.getElementsByClassName("follow-btn");
        x[2].style.background = "black";
        var y = document.getElementsByClassName("follow-btn-txt");
        y[2].style.color = "white";
    } else {
        document.getElementById("following3").innerHTML = "Follow";
        var x = document.getElementsByClassName("follow-btn");
        x[2].style.background = "#EDEEF0";
        var y = document.getElementsByClassName("follow-btn-txt");
        y[2].style.color = "black";
    }
};

function follow4() {
    if(document.getElementById("following4").innerHTML == "Follow") {
        document.getElementById("following4").innerHTML = "Followed";
        var x = document.getElementsByClassName("follow-btn");
        x[3].style.background = "black";
        var y = document.getElementsByClassName("follow-btn-txt");
        y[3].style.color = "white";
    } else {
        document.getElementById("following4").innerHTML = "Follow";
        var x = document.getElementsByClassName("follow-btn");
        x[3].style.background = "#EDEEF0";
        var y = document.getElementsByClassName("follow-btn-txt");
        y[3].style.color = "black";
    }
};














