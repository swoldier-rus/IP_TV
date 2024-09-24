function FindProxyForURL(url, host) {

  if(dnsDomainIs(host, "google.com")) {  
    return 'DIRECT';  
  }

  else {  
    return 'DIRECT';  
  }

}
