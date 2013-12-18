import "js.jsx";
import "socket.io-webclient.jsx";

class _Main {
  static function main(args : string[]) : void {
    var io = js.global["io"] as __noconvert__ SocketIOWebClient;
    var socket = io.connect('http://localhost');
    socket.on('news', function (data) {
      log data;
      socket.emit('my other event', { my: 'data' });
    });
  }
}
