function FindProxyForURL(url, host) {

  if(dnsDomainIs(host, "googlevideo.com")) {
  
    return 'PROXY <IP-адрес-прокси>:<порт-прокси>';
  
  }
  else {
  
    return 'DIRECT';
  
  }

}
