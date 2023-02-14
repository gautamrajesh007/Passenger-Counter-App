function prntmssg(){
  console.log("Hi");
}



function printmessage(message) {
  console.log("Test");
  message();
};

function printmessage2(callback) {
  setTimeout(function() {
    console.log("Hello World");
    callback(prntmssg);
  },3000)
};

printmessage2(printmessage);