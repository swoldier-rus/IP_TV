function FindProxyForURL(url, host) {

  if(dnsDomainIs(host, "googlevideo.com")) {
  
    return 'PROXY 192.168.0.15:1080';
  
  }
  else {
  
    return 'DIRECT';
  
  }

}
