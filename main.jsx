import "socket.io.jsx";
import "express.jsx";
import "nodejs/*.jsx";

native class http_express extends http {
	static function createServer(
    app : Application
	) : HTTPServer;
} = "require('http')";

class _Main {
  static function main(args : string[]) : void {
    var app = express.create();
    app.use(express.static_(path.join(node.__dirname, 'public')));
    var server = http_express.createServer(app);

    server.listen(3000);
    var io = SocketIO.listen(server);
    io.sockets.on("connection", function(socket : Socket) {
      socket.emit("news", {"hello":"world"});
      socket.on("my other event", function(data) {
        log data;
      });
    });
  }
}

