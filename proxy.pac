function FindProxyForURL(url, host) {

  if(dnsDomainIs(host, "googlevideo.com")) {
  
    return 'PROXY 192.168.0.1:1080';
  
  }
  else {
  
    return 'DIRECT';
  
  }

}
