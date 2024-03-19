function SendMail(){
    let params = {
        email : document.getElementById("email").value,
        name : document.getElementById("name").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_zvv4gf6","template_z0x6g5g",params).then(alert("Message sent successfully"))
}