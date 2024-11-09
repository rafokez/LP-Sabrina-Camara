// Google Tag Manager Script
(function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js'
    });
    var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l != 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    f.parentNode.insertBefore(j, f);
  
    // Adiciona um log no console para confirmar o carregamento do GTM
    j.onload = function () {
      console.log('Google Tag Manager carregado com sucesso.');
    };
    j.onerror = function () {
      console.error('Erro ao carregar o Google Tag Manager.');
    };
  })(window, document, 'script', 'dataLayer', 'GTM-WXJ2B6KM');