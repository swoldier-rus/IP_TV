function FindProxyForURL(url, host)
{
  if (dnsDomainIs(host, "ytimg.com")) { return "PROXY 192.168.0.15:1080"; }
  if (dnsDomainIs(host, "youtube.com")) { return "PROXY 192.168.0.15:1080"; }
  if (dnsDomainIs(host, "googleapis.com")) { return "PROXY 192.168.0.15:1080"; }
  if (dnsDomainIs(host, "googlevideo.com")) { return "PROXY 192.168.0.15:1080"; }
  if (dnsDomainIs(host, "youtu.be")) { return "PROXY 192.168.0.15:1080"; }
  if (dnsDomainIs(host, "yt.be")) { return "PROXY 192.168.0.15:1080"; }
  if (dnsDomainIs(host, "ggpht.com")) { return "PROXY 192.168.0.15:1080"; }
  if (dnsDomainIs(host, "gvt1.com")) { return "PROXY 192.168.0.15:1080"; }
  if (dnsDomainIs(host, "youtube-nocookie.com")) { return "PROXY 192.168.0.15:1080"; }  
  if (dnsDomainIs(host, "l.google.com")) { return "PROXY 192.168.0.15:1080"; } 

  return "DIRECT";
}
