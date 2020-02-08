import React from "react";

/*
 * Socket address
 */
const websocket = new WebSocket("ws://127.0.0.1:3003");

/**
 * Initialize Socket Connection
 */
function init(data, callback) {
  websocket.onopen = () => {};

  websocket.onclose = () => {
    websocket.close();
  };

  websocket.onmessage = event => {
    callback(getData(event.data));
  };

  sendData(data);
}

/**
 * Send Data to Socket
 * @param data
 */
function sendData(data) {
  setTimeout(function() {
    websocket.send(data);
  }, 100);
}

/**
 * Get Data from Socket
 * @param data
 */
function getData(data) {
  return data;
}

export default init;
