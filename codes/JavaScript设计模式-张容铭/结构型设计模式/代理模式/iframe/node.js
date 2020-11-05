let http = require("http");

http.createServer(function (request, response) {

	const result = {
		success: true,
		data: [{
			name: 'zj',
			age: 18
		}],
	};

	// post是分块传送的
	let body = []; // 接收 post 数据

	// 当有数据传送过来时，将其推入数组
	request.on('data', chuck => { // chuck 是二进制数据
		body.push(chuck);
	});

	// 所有的数据接收完成触发
	request.on('end', () => {
		// 将二进制数组拼接成一个 Buffer 对象
		let buffer = Buffer.concat(body);

		let reqBody = toReqBody(buffer);
		console.log(reqBody);
		// {
		//     callback: 'callback',
		//     proxy: 'http%3A%2F%2F127.0.0.1%3A5500%2Fproxy.html'
		// }

		if (reqBody.proxy) {
      		let location = `${decodeURIComponent(reqBody.proxy)}?callback=${reqBody.callback}&arg=${JSON.stringify(result)}`;
      
			response.writeHead(302, { 'Location': location });
			response.write('302');
			response.end();
		} else {
			response.end('404');
		}
	});

}).listen(8886);

function toReqBody(buffer) {
	let bufferArr = buffer.toString().split('&'),
		reqBody = {};

	for (let item of bufferArr) {
		let arr = item.split('=');
		reqBody[arr[0]] = arr[1];
	}

	return reqBody;
}