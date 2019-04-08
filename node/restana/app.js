var restana = require('restana');
var service = restana({
  disableResponseEvent: true
});

// Simple JSON test
service.get('/helloworld', function(req, res) {
  res.send({
    message: 'Hello World!'
  });
});

// Simple list with string interpolation
service.get('/list', function(req, res) {
  var list = [];
  for (var x = 0; x < 500; x++) {
    var item = {
      index: x,
      message: 'Item ' + (x + 1) + ' with index ' + x
    };
    list.push(item);
  }
  res.send(list);
});

// Simple Fibonacci List
function fibonacci(num) {
	var sequence = [1, 1];
	for (var i = 2; i < num; i++) {
		sequence[i] = sequence[i-1]+ sequence[i-2];
	}
	return sequence[num-1];
}
service.get('/fibonacci', function(req, res) {
  var list = [];
  for (var x = 0; x < 100; x++) {
    list.push(fibonacci(x));
  }
  res.send(list);
});

service.start(3000);