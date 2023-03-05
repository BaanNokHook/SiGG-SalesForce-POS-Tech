if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
    .then(function(registration) {
      console.log('Registered:', registration);
    })
    .catch(function(error) {
      console.log('Registration failed: ', error);
    });
}


window.addEventListener('online', handleConnection);
window.addEventListener('offline', handleConnection);


function handleConnection() {
    if (navigator.onLine) {
      isReachable(getServerUrl()).then(function(online) {
        if (online) { // handle online status
          console.log('online');
          localStorage.setItem('online', 1);
        } else {
          console.log('no connectivity');
          localStorage.setItem('online', 0);
        }
      });
    } else { // handle offline status
      console.log('offline');
      localStorage.setItem('online', 0);
    }
}

function isReachable(url) {
    return fetch(url, { method: 'HEAD', mode: 'no-cors' })
      .then(function(resp) {
        return resp && (resp.ok || resp.type === 'opaque');
      })
      .catch(function(err) {
        console.warn('[conn test failure]:', err);
      });
  }
  
  function getServerUrl() {
    return document.getElementById('serverUrl').value || window.location.origin;
  }

  // window.onload = function() { console.log("Window Loaded!"); }; var img1 = new Image(); img1.src = 'http://192.168.2.3:88/assets/icon/favicon.png'; img1.onerror = function () { setTimeout(() => { console.log("onError Windows"); window.location.reload(true); }, 30 * 1000 ); };