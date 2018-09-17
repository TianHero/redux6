import { injectGlobal } from 'styled-components';

injectGlobal`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1536479978332'); /* IE9*/
    src: url('./iconfont.eot?t=1536479978332#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAXYAAsAAAAACHwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFY8d0pEY21hcAAAAYAAAABqAAABstKFnaFnbHlmAAAB7AAAAd0AAAIceUcaTWhlYWQAAAPMAAAALwAAADYSmSvRaGhlYQAAA/wAAAAeAAAAJAfiA4tobXR4AAAEHAAAABIAAAAUFAUAAGxvY2EAAAQwAAAADAAAAAwA/AGUbWF4cAAABDwAAAAfAAAAIAETADxuYW1lAAAEXAAAAUUAAAJtPlT+fXBvc3QAAAWkAAAANAAAAEWvqBMHeJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2BkYWScwMDKwMHUyXSGgYGhH0IzvmYwYuRgYGBiYGVmwAoC0lxTGByeMb4IZG7438AQw9zA0AAUZgTJAQDjuAw4eJztkbENgDAMBM8kIIQoGYOamhXYg4qhrWwBn5iCIfjoIvv1ceEAPZDEKjLYhVF1yrXmJ6bmZ3b1EyMdnZsvvpXjvuFbvzLl4qB00lvNsoFfc7v3t8t1e4H2hC9B/RHfgpopR4A9OP8XiwAAeJw1kM9qE1EUxs+ZOzM3tjJTSGai6TQ1ufOnqTBJJ5kZUSbJQBXBvUgsFSy6qBvFriWgge7NC1h8gGwqbiwtpC/QVUFU9A26UQvJrXday4VzOd/54HfOBxLAWZ+IB3NQAUBaRkNDGtJi2Ma45dbP24JZjH3MFEOa9PwG2d3u9/emyurkvHYvJOlLz99Kt3dJt9/vKtO9xztv///dywGQjCfLgmfCPCwJoudWKaqUCIZ5B50oxih2PVTyVzCmGEfBIpaxKAw//jobDmclNdE0a1nDHjPwm41oT3/xDwmuY/VNyr+nuWuzf2QFpZy0ccoYdwybfzRv6laizuNXe2XFnn5OcA3X+M9393AxzeVO5VmZUgDIsjgg+yQFI8tCwTaGPnpaFkoxEIuZQdQSYixaIfpIPvETt0bGw+FYlsfDzisf9ZlSYbIjjwaDESFZpaj7LzsXhveHZNnlJzOFEv4ejORLl0CDLNhngg1AQQcb6gAV5lUow2aeuB4T9ytRM1hAFjKVVd2w1cEWq1KxiFEwm0GUoLT//D4/vvsM9aerLxRVUugmHjfar29hJfXjzfXu7fqTpYUbJadxdESA17Az57I8P1CsrcN61Kg91K4+cB4p1nXDCpwywD/vnYHKAAAAeJxjYGRgYADidcv0NeP5bb4ycLMwgMD1XZ9fIej/DSwszA1ALgcDE0gUAFRJDE0AeJxjYGRgYG7438AQw8LKAAQsLAyMDKiAFQBH1AJ3AAB4nGNhYGBgAWFWKA3EAAE7ABoAAAAAAAAAOACGAMQBDnicY2BkYGBgZTBgYGEAASYg5gJCBob/YD4DAA3dAVAAeJxlj01OwzAQhV/6B6QSqqhgh+QFYgEo/RGrblhUavdddN+mTpsqiSPHrdQDcB6OwAk4AtyAO/BIJ5s2lsffvHljTwDc4Acejt8t95E9XDI7cg0XuBeuU38QbpBfhJto41W4Rf1N2MczpsJtdGF5g9e4YvaEd2EPHXwI13CNT+E69S/hBvlbuIk7/Aq30PHqwj7mXle4jUcv9sdWL5xeqeVBxaHJIpM5v4KZXu+Sha3S6pxrW8QmU4OgX0lTnWlb3VPs10PnIhVZk6oJqzpJjMqt2erQBRvn8lGvF4kehCblWGP+tsYCjnEFhSUOjDFCGGSIyujoO1Vm9K+xQ8Jee1Y9zed0WxTU/3OFAQL0z1xTurLSeTpPgT1fG1J1dCtuy56UNJFezUkSskJe1rZUQuoBNmVXjhF6XNGJPyhnSP8ACVpuyAAAAHicY2BigAAuBuyAlZGJkZmRhZGVkY2BpbggM48pKZMrLTEvPSUxKzMvnckxkYEBAGdMB20=') format('woff'),
    url('./iconfont.ttf?t=1536479978332') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1536479978332#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
