function FindProxyForURL(url, host)
{
  var proxy_1 = "PROXY 192.168.0.10:1080";
  
  if (shExpMatch(host, "*ytimg.com/*")) { return proxy_1; }
  if (shExpMatch(host, "*youtube.com/*")) { return proxy_1; }
  if (shExpMatch(host, "*googleapis.com/*")) { return proxy_1; }
  if (shExpMatch(host, "*googlevideo.com/*")) { return proxy_1; }
  if (shExpMatch(host, "*youtu.be/*")) { return proxy_1; }
  if (shExpMatch(host, "*yt.be/*")) { return proxy_1; }
  if (shExpMatch(host, "*ggpht.com/*")) { return proxy_1; }
  if (shExpMatch(host, "*gvt1.com/*")) { return proxy_1; }
  if (shExpMatch(host, "*youtube-nocookie.com")) { return proxy_1; }
  if (shExpMatch(host, "*l.google.com/*")) { return proxy_1; }

  return "DIRECT";
}
