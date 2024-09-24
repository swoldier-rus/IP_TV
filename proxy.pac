function FindProxyForURL(url, host) {

  if(dnsDomainIs(host, "www.google.com")) {  
    return "PROXY 195.168.0.150:1080";  
  }
  else {  
    return 'DIRECT';  
  }

}
