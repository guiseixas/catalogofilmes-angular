const PROXY_CONFIG = [
  {
    context: ['/filme', '/categoria', '/idioma', '/usuario', '/auth'],
    target: 'http://localhost:8080',
    secure: false,
    logLevel: 'debug'
  }
];
module.exports = PROXY_CONFIG;
