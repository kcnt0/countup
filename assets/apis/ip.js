export const getIP = () => {
  return new Promise(r => {
    var w = window,
      a = new (w.RTCPeerConnection ||
        w.mozRTCPeerConnection ||
        w.webkitRTCPeerConnection)({
        iceServers: []
      }),
      b = () => {}
    a.createDataChannel('')
    a.createOffer(c => a.setLocalDescription(c, b, b), b)
    a.onicecandidate = c => {
      try {
        c.candidate.candidate
          .match(
            /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g
          )
          .forEach(r)
      } catch (e) {}
    }
  })
}

export const queryIP = axios => {
  return axios.$get('https://ipinfo.io/json')
}
