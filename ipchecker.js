//checks ips for blaclisting. 
console.log("HELLO WORLD!");
function isPrivateIP(ip) {
  // List of private IP ranges
  var privateRanges = [
    '10.0.0.0/8',
    '172.16.0.0/12',
    '192.168.1.132/135'
    // Add more private IP ranges if needed
  ];

  for (var i = 0; i < privateRanges.length; i++) {
    var range = privateRanges[i].split('/');
    var subnet = range[0];
    var subnetMask = range[1] || 32;
    var subnetStart = ipToNumber(subnet);
    var subnetEnd = subnetStart + Math.pow(2, (32 - subnetMask)) - 1;

    if (ipToNumber(ip) >= subnetStart && ipToNumber(ip) <= subnetEnd) {
      return true;
    }
  }

  return false;
}

function ipToNumber(ip) {
  var parts = ip.split('.');
  return (parts[0] << 24) + (parts[1] << 16) + (parts[2] << 8) + parseInt(parts[3]);
}

function checkIP() {
  fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      var ip = data.ip;
      if (isPrivateIP(ip)) {
        window.location.href = 'https://endr1337.github.io/about.html';
        window.location.href = 'error.html';
      } else {
        // Proceed with normal flow for non-private IP addresses
        // ...
      }
    });
}
