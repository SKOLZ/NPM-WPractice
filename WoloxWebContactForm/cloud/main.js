
/* global Parse,console,require */

var Mandrill = require('mandrill');
Mandrill.initialize('NtsII7qvJDVrI8F0NhGCXg');

Parse.Cloud.beforeSave("Contact", function(request, response) {

  var text = "Someone contacted woloxamerica.com:\n" +
    "From: "+request.object.get("name") + "\n"+
    "Email: "+request.object.get("email") + "\n"+
    "Message:\n" + request.object.get("comment")+ "\n\n"+
    "Option:\n" + request.object.get("option")+ "\n\n"+
    "News:\n" + request.object.get("news")+ "\n\n"+
    "Budget:\n" + request.object.get("budget");

  Mandrill.sendEmail({
    message: {
      text: text,
      subject: "Contact Form - " + request.object.get("name"),
      from_email: "no-reply@wolox.com.ar",
      from_name: "Wolox America",
      to: [
        {
          email: "contact@wolox.com.ar",
          name: "Wolox Contact"
        }
      ]
    },
    async: true
    },{
      success: function(httpResponse) {
        response.success();
      },
      error: function(httpResponse) {
        console.error(httpResponse);
        response.error("Uh oh, something went wrong");
      }
    }
  );
});

