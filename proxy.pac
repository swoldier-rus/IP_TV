function FindProxyForURL(url, host) {

  if(dnsDomainIs(host, "google.com")) {
  
    return 'PROXY 192.168.0.15:1080';
  
  }
  else {
  
    return 'DIRECT';
  
  }

}
