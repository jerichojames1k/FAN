var topic = "jericho/fan/status";

$(document).ready(function () {
  client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt");

  $('#1').click(function (e) {
    e.preventDefault();
    $('#h3').innerHTML = "The fan is currently at 1";
    client.subscribe(topic);
    client.publish(topic, "The fan is currently at 1 : " + moment().format('llll'));
  })

  $('#2').click(function (e) {
    e.preventDefault();
    $('#h3').innerHTML = "The fan is currently at 2";
    client.subscribe(topic);
    client.publish(topic, "The fan is currently at 2 : " + moment().format('llll'));
  })

  $('#3').click(function (e) {
    e.preventDefault();
    $('#h3').innerHTML = "The fan is currently at 3";
    client.subscribe(topic);
    client.publish(topic, "The fan is currently at 3 : " + moment().format('llll'));
  })

  $('#off').click(function (e) {
    e.preventDefault();
    $('#h3').innerHTML = "The fan is currently off";
    client.subscribe(topic);
    client.publish(topic, "The fan is currently turn off : " + moment().format('llll'));
  })
})


