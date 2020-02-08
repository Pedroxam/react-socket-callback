# react-socket-callback
An easy way to send and get response from socket in one request



<b>import SocketData from "./client/socket";</b>


<b>Example:</b>

<p style="white-space:pre">
myFunction() {
  //Data to send
  var data = {
    option1: 1,
    option2: 2
  }
    SocketData(data, function(result) {
      console.log(result); // Get socket result in here
    });
  }

</p>
