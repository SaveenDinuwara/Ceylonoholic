function inputValidation(user_name,user_email,subject,region,message){
    //input validating function
    if (user_name == "" || user_name == null){
        alert("Full Name is required!");
        return false;
    }
    else if(isNaN(user_name)==false){
		alert("The name should only have letters")
		return false;
	}
    else if (user_email == "" || user_email == null){
        alert("Email is required!");
        return false;
    }
    else if(user_email.includes("@")==false){
        alert("Email is wrong!");
        return false;
    }
    else if(subject=="" || subject==null){
        alert("Subject is required!");
        return false;

    }
    else if(message=="" || message==null){
        alert("Your message is required!");
        return false;
    }
    else{
		hide_form();
        show_summery_text(user_name,user_email,subject,region,message);   
        return true;    
	}
}
function hide_form(){
    document.getElementById("form_section_1").classList.add("hide");
    document.getElementById("form_summery").classList.remove("hide");
    document.getElementById("form_img").src="imgs/form_img2.jpg";
}
function hide_summery(){
    document.getElementById("form_section_1").classList.remove("hide");
    document.getElementById("form_summery").classList.add("hide");
}
function show_summery_text(name,email,subject,region,message){
    let summery=("<b>Name: </b>"+name+"<br><b>Email: </b>"+email+"<br><b>Subject: </b>"+subject+"<br><b>Region: </b>"+region+"<br><b>Message: </b>"+message);
    document.getElementById("summery_msg").innerHTML=summery;
}
function getSelectedValue(selectList){
    return selectList[selectList.selectedIndex].value;
}
function submitted(Username){
    console.log("submitted");
	alert("Dear "+Username+" Thank you for using Ceylonoholic.\nDo you want to send an email?");
}

//-------------------main programme------------

//onclick view
document.getElementById("view_btn").addEventListener("click",function(e){
    e.preventDefault();

    let formName = document.querySelector("form");
    let user_name=document.forms["query_form"]["name"].value;
    let user_email=document.forms["query_form"]["email"].value;
    let subject=getSelectedValue(formName.subject);
    let region=getSelectedValue(formName.region);
    let message=document.forms["query_form"]["comments"].value;
    
    if (inputValidation(user_name,user_email,subject,region,message)==true){
        console.log("its true")
    }
    
});

//onclick edit
document.getElementById("edit_btn").addEventListener("click",function(e){
    e.preventDefault();
    document.getElementById("form_img").src="imgs/form_img1.jpg";
    
    hide_summery();//hiding the summery message

    document.getElementById("name").value=user_name;
    document.getElementById("email").value=user_email;
    document.getElementById("subject").value=subject;
    document.getElementById("region").value=region;
});

//onclick submit
document.querySelector("form").addEventListener('submit',function(){
    submitted(document.forms["query_form"]["name"].value);
});

