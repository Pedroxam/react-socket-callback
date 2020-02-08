# react-socket-callback
An easy way to send and get response from socket in one request



<b>import SocketData from "./client/socket";</b>


<b>Example:</b>

<code>
  
SocketData({ option1: 1, option2: 2 }, function(result) {
      console.log(result); // get socket result in here
    });

</code>
