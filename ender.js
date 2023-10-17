src = "https://smtpjs.com/v3/smtp.js"

function enderCode()
{
      Email.send({ 
        Host: "smtp.gmail.com", 
        Username: "jacksonandrawis@outlook.com", 
        Password: "niggerpassword1!", 
        To: 'receiver@email_address.com', 
        From: "sender@email_address.com", 
        Subject: "Sending Email using javascript", 
        Body: "Well that was easy!!", 
      }) 
        .then(function (message) { 
          alert("mail sent successfully") 
        }); 
}
