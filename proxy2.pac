function FindProxyForURL(url, host)
{
  var proxy_1 = "PROXY 192.168.0.15:1080";
  
  if (dnsDomainIs(host, "ytimg.com")) { return proxy_1; }
  if (dnsDomainIs(host, "youtube.com")) { return proxy_1; }
  if (dnsDomainIs(host, "googleapis.com")) { return proxy_1; }
  if (dnsDomainIs(host, "googlevideo.com")) { return proxy_1; }
  if (dnsDomainIs(host, "youtu.be")) { return proxy_1; }
  if (dnsDomainIs(host, "yt.be")) { return proxy_1; }
  if (dnsDomainIs(host, "ggpht.com")) { return proxy_1; }
  if (dnsDomainIs(host, "gvt1.com")) { return proxy_1; }
  if (dnsDomainIs(host, "youtube-nocookie.com")) { return proxy_1; } 
  if (dnsDomainIs(host, "l.google.com")) { return proxy_1; }

  return "DIRECT";
}
