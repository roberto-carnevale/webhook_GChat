var WebHook = "https://chat.googleapis.com/XXXXXXXXX"

function sendToWebHook(text) {
  // Here is the message for the chat
  var message ={
    'text': text
  }
  // Here is the option for fetching the webhook answer
  var options = {
    'method' : 'post',
    'contentType': 'application/json',
    'payload' : JSON.stringify(message)
  };
  // runs the webhook
  var ans = UrlFetchApp.fetch(WebHook, options);
  
}

function doGet(e) {
  var text = "**ERROR** Text not set!";
  try {
    var text = e.parameter["text"];
    sendToWebHook(text);
  }
  catch (err) {
    var template = HtmlService
      .createTemplateFromFile('500');
    template.err = err;
    console.log(err, err.message);
    return template.evaluate();
  }
  var template = HtmlService
      .createTemplateFromFile('200');
  template.text = text;
  return template.evaluate();

}


// To use include as a library with Key: XXXXXXXXXX
// and call as [Library].sendToWebHook(text);
