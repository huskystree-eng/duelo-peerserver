const { PeerServer } = require('peer');

PeerServer({
  port: process.env.PORT || 9000,
  path: '/',
  proxied: true,          // necesario detrás del proxy de Render
  allow_discovery: false,
  alive_timeout: 60000
}, () => console.log('PeerServer escuchando'));
