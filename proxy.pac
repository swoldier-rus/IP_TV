function FindProxyForURL(url, host)
{
  if (shExpMatch(url, "ytimg.com")) { return "PROXY 192.168.0.15:1080"; }
  if (shExpMatch(url, "youtube.com")) { return "PROXY 192.168.0.15:1080"; }
  if (shExpMatch(url, "googleapis.com")) { return "PROXY 192.168.0.15:1080"; }
  if (shExpMatch(url, "googlevideo.com")) { return "PROXY 192.168.0.15:1080"; }
  if (shExpMatch(url, "youtu.be")) { return "PROXY 192.168.0.15:1080"; }
  if (shExpMatch(url, "yt.be")) { return "PROXY 192.168.0.15:1080"; }
  if (shExpMatch(url, "ggpht.com")) { return "PROXY 192.168.0.15:1080"; }
  if (shExpMatch(url, "gvt1.com")) { return "PROXY 192.168.0.15:1080"; }
  if (shExpMatch(url, "youtube-nocookie.com")) { return "PROXY 192.168.0.15:1080"; }  

  return "DIRECT";
}
