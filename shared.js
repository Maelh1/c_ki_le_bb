// Utilitaires communs au jeu et au scoreboard. Rien à modifier ici.
(function () {
  const NTFY = 'https://ntfy.sh/';

  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  // Mélange déterministe (mulberry32 + Fisher-Yates) : même ordre sur tous les téléphones.
  function shuffled(n, seed) {
    let a = seed >>> 0;
    const rnd = () => {
      a = (a + 0x6D2B79F5) >>> 0;
      let t = a;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
    const idx = [...Array(n).keys()];
    for (let i = n - 1; i > 0; i--) {
      const j = Math.floor(rnd() * (i + 1));
      [idx[i], idx[j]] = [idx[j], idx[i]];
    }
    return idx;
  }

  async function publishScore(entry) {
    const res = await fetch(NTFY + encodeURIComponent(window.CANAL), { method: 'POST', body: JSON.stringify(entry) });
    if (!res.ok) throw new Error('ntfy ' + res.status);
  }

  // Convertit un message ntfy en score, ou null s'il n'est pas valide.
  function parseMessage(m) {
    if (!m || m.event !== 'message') return null;
    try {
      const s = JSON.parse(m.message);
      if (typeof s.name !== 'string' || !Number.isFinite(s.score) || !Number.isFinite(s.total)) return null;
      return { id: String(s.id || m.id), name: s.name.slice(0, 40), score: s.score, total: s.total, ts: m.time * 1000, msgId: m.id, time: m.time };
    } catch (e) { return null; }
  }

  async function fetchScores(since) {
    const res = await fetch(NTFY + encodeURIComponent(window.CANAL) + '/json?poll=1&since=' + since);
    if (!res.ok) throw new Error('ntfy ' + res.status);
    const text = await res.text();
    return text.split('\n').filter(Boolean).map(l => { try { return JSON.parse(l); } catch (e) { return null; } });
  }

  function subscribe(since, onMsg) {
    const es = new EventSource(NTFY + encodeURIComponent(window.CANAL) + '/sse?since=' + since);
    es.onmessage = e => { try { onMsg(JSON.parse(e.data)); } catch (err) {} };
    return es;
  }

  window.Shared = { esc, shuffled, publishScore, parseMessage, fetchScores, subscribe };
})();
