function FindProxyForURL(url, host)
{
  if (dnsDomainIs(url, "ytimg.com")) { return "PROXY 192.168.0.15:1080"; }
  if (dnsDomainIs(url, "youtube.com")) { return "PROXY 192.168.0.15:1080"; }
  if (dnsDomainIs(url, "googleapis.com")) { return "PROXY 192.168.0.15:1080"; }
  if (dnsDomainIs(url, "googlevideo.com")) { return "PROXY 192.168.0.15:1080"; }
  if (dnsDomainIs(url, "youtu.be")) { return "PROXY 192.168.0.15:1080"; }
  if (dnsDomainIs(url, "yt.be")) { return "PROXY 192.168.0.15:1080"; }
  if (dnsDomainIs(url, "ggpht.com")) { return "PROXY 192.168.0.15:1080"; }
  if (dnsDomainIs(url, "gvt1.com")) { return "PROXY 192.168.0.15:1080"; }
  if (dnsDomainIs(url, "youtube-nocookie.com")) { return "PROXY 192.168.0.15:1080"; }  
  if (dnsDomainIs(url, "l.google.com")) { return "PROXY 192.168.0.15:1080"; } 
return "DIRECT";
}
