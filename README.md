# react-socket-callback
An easy way to send and get response from socket in one request



<b>import SocketData from "./client/socket";</b>


<b>Example:</b>

<pre>
  
//Data To Send  
var data = {
    option: 1,
    option: 2
}
  
SocketData(data, function(result) {
      console.log(result); // Get socket result in here
});

</pre>
