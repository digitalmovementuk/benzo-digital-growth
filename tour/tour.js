(() => {
  "use strict";

  const products = {
    gragnano: {
      title: "Pasta aus Gragnano",
      category: "Pasta & Küche",
      image: "assets/Gragnano.webp",
      alt: "Regal mit verschiedenen Pastaformen aus Gragnano im Benzo Markt",
      description: "Viele Formen und Formate für Küche und Vorrat – direkt im Pasta-Sortiment des Benzo Markts entdeckt."
    },
    rummo: {
      title: "Rummo Rigatoni",
      category: "Pasta & Küche",
      image: "assets/Rummo.webp",
      alt: "Gestapelte Kartons Rummo Rigatoni Nummer 50 im Benzo Lager",
      description: "Ein Blick hinter die Kulissen: Rummo Rigatoni warten im Benzo Lager auf Markt, Gastronomie und Handel."
    },
    ab: {
      title: "AB Selezione",
      category: "Spirituosen",
      image: "assets/Ab-selezione.webp",
      alt: "Verpackung und Flasche AB Selezione Grappa I Millesimi 2008 im Benzo Sortiment",
      description: "Eine besondere Grappa-Position aus dem Spirituosensortiment, fotografiert direkt bei Benzo."
    },
    annone: {
      title: "Annone Rosso",
      category: "Wein",
      image: "assets/Annone.webp",
      alt: "Flasche Annone Rosso auf Weinkartons im Benzo Markt",
      description: "Italienischer Rotwein im Markt – eine von vielen Positionen, bei denen das Benzo Team persönlich berät."
    },
    jermann: {
      title: "Jermann",
      category: "Wein",
      image: "assets/Jermann.webp",
      alt: "Reihe von Jermann Weißweinflaschen im Weinregal des Benzo Markts",
      description: "Ausgewählte Weißweine von Jermann, zu finden in der Weinabteilung des Benzo Markts."
    },
    nonino: {
      title: "Nonino Grappa",
      category: "Spirituosen",
      image: "assets/Nonino.webp",
      alt: "Mehrere Nonino Grappa-Flaschen im Spirituosenregal des Benzo Markts",
      description: "Mehrere Abfüllungen von Nonino zeigen die Vielfalt im Grappa- und Spirituosensortiment."
    },
    gaja: {
      title: "Gaja Darmagi",
      category: "Wein",
      image: "assets/Gaja.webp",
      alt: "Flasche Gaja Darmagi Langhe 2015 auf verpackten Weinflaschen",
      description: "Eine ausgewählte Weinposition von Gaja, aufgenommen zwischen den Regalen des Benzo Markts."
    },
    rotari: {
      title: "Rotari",
      category: "Schaumwein",
      image: "assets/Rotari.webp",
      alt: "Reihe von Rotari Schaumweinflaschen mit gelben Etiketten im Weinregal",
      description: "Italienischer Schaumwein von Rotari – Teil der Auswahl für Gastronomie, Handel und private Genießer."
    }
  };

  const scenes = [
    {
      id: "ankunft",
      area: "Ankommen",
      title: "Willkommen bei Benzo",
      description: "Der Rundgang beginnt vor dem Benzo Markt in der Montanstraße.",
      image: "assets/benzo-panorama.webp",
      alt: "Außenansicht des Benzo Gebäudes mit Eingang, Firmenbeschriftung und Kundenparkplätzen",
      focus: { x: .58, y: .5, zoom: 1.02 },
      hotspots: []
    },
    {
      id: "markt",
      area: "Markt",
      title: "Mitten im Sortiment",
      description: "Ein erster weiter Blick über Wein, Pasta, Feinkost und italienische Spezialitäten.",
      image: "assets/LEH-Panorama.webp",
      alt: "Panoramablick über die Verkaufsfläche des Benzo Markts mit Wein-, Pasta- und Feinkostregalen",
      focus: { x: .5, y: .5, zoom: 1.01 },
      hotspots: []
    },
    {
      id: "marktgang",
      area: "Marktgang",
      title: "Feinkost auf beiden Seiten",
      description: "Kaffee, Vorrat, Wein und Spirituosen liegen im Markt nah beieinander.",
      image: "assets/LEH1-panorama.webp",
      alt: "Blick durch einen Marktgang mit Kaffee, Feinkost, Spirituosen und Wein im Benzo Markt",
      focus: { x: .5, y: .5, zoom: 1.03 },
      hotspots: [
        { product: "jermann", x: .80, y: .39 },
        { product: "nonino", x: .91, y: .51 }
      ]
    },
    {
      id: "sortiment",
      area: "Sortiment",
      title: "Italien zum Entdecken",
      description: "Die breite Marktansicht zeigt die Auswahl für Karte, Theke und Vorrat.",
      image: "assets/Regale-panorama.webp",
      alt: "Breiter Blick über die Regale mit Wein, Pasta und Feinkost im Benzo Markt",
      focus: { x: .48, y: .5, zoom: 1.02 },
      hotspots: [
        { product: "ab", x: .14, y: .38 },
        { product: "annone", x: .82, y: .48 }
      ]
    },
    {
      id: "wein",
      area: "Wein & Spirituosen",
      title: "Flasche für Flasche ausgewählt",
      description: "Weine, Schaumweine und Spirituosen aus verschiedenen italienischen Regionen.",
      image: "assets/Regal-wein.webp",
      alt: "Wein- und Feinkostregale im Benzo Markt",
      focus: { x: .47, y: .48, zoom: 1.06 },
      hotspots: [
        { product: "gaja", x: .19, y: .42 },
        { product: "rotari", x: .73, y: .63 }
      ]
    },
    {
      id: "pasta",
      area: "Pasta & Küche",
      title: "Klassiker in vielen Formen",
      description: "Vom vertrauten Küchenklassiker bis zur besonderen Pastaform.",
      image: "assets/Regal_DeCecco.webp",
      alt: "Regal mit De-Cecco-Pasta in verschiedenen Formen im Benzo Markt",
      focus: { x: .55, y: .5, zoom: 1.04 },
      hotspots: [
        { product: "gragnano", x: .31, y: .38 },
        { product: "rummo", x: .75, y: .66 }
      ]
    },
    {
      id: "salumeria",
      area: "Frischetheke",
      title: "Benvenuti in der Salumeria",
      description: "Die Frischetheke bringt Salumi, Käse und italienische Marktstimmung zusammen.",
      image: "assets/Salumeria.webp",
      alt: "Frischetheke der Benzo Salumeria mit rot-weiß kariertem Baldachin",
      focus: { x: .51, y: .51, zoom: 1.02 },
      hotspots: []
    },
    {
      id: "lager",
      area: "Hinter den Kulissen",
      title: "Das Benzo Lager",
      description: "Paletten, Kartons und Warenbestand machen die Belieferung im Alltag möglich.",
      image: "assets/Lager-panorama.webp",
      alt: "Panoramablick in das Benzo Lager mit Paletten, Kartons und Hochregalen",
      focus: { x: .51, y: .5, zoom: 1.01 },
      hotspots: []
    },
    {
      id: "lagergang",
      area: "Lagergang",
      title: "Bereit für Markt und Gastronomie",
      description: "Im Lagergang stehen die Waren für Abholung und Belieferung bereit.",
      image: "assets/Lager1-panorama.webp",
      alt: "Lagergang mit Paletten und gestapelten De-Cecco-Kartons im Benzo Lager",
      focus: { x: .5, y: .5, zoom: 1.02 },
      hotspots: []
    },
    {
      id: "lieferung",
      area: "Lieferung",
      title: "Von Berlin auf den Weg",
      description: "Der Rundgang endet bei einem Benzo Lieferfahrzeug vor dem Standort.",
      image: "assets/benzo-transporter.webp",
      alt: "Nahaufnahme eines weißen Benzo Lieferwagens mit Firmenlogo",
      focus: { x: .5, y: .5, zoom: 1.02 },
      hotspots: []
    }
  ];

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

  const tourShell = $("#tourShell");
  const viewer = $("#tourViewer");
  const stage = $("#sceneStage");
  const sceneImage = $("#sceneImage");
  const hotspotLayer = $("#hotspotLayer");
  const loadingState = $("#loadingState");
  const errorState = $("#errorState");
  const retryButton = $("#retryButton");
  const previousButton = $("#previousButton");
  const nextButton = $("#nextButton");
  const previousLabel = $("#previousLabel");
  const nextLabel = $("#nextLabel");
  const sceneNumber = $("#sceneNumber");
  const sceneTotal = $("#sceneTotal");
  const sceneArea = $("#sceneArea");
  const sceneTitle = $("#sceneTitle");
  const sceneDescription = $("#sceneDescription");
  const sceneAnnouncement = $("#sceneAnnouncement");
  const routeProgress = $("#routeProgress");
  const gestureHint = $("#gestureHint");
  const routeButton = $("#routeButton");
  const helpButton = $("#helpButton");
  const fullscreenButton = $("#fullscreenButton");
  const zoomInButton = $("#zoomInButton");
  const zoomOutButton = $("#zoomOutButton");
  const resetViewButton = $("#resetViewButton");
  const introDialog = $("#introDialog");
  const startButton = $("#startButton");
  const routeDialog = $("#routeDialog");
  const helpDialog = $("#helpDialog");
  const productDialog = $("#productDialog");
  const routeList = $("#routeList");
  const productImage = $("#productImage");
  const productCategory = $("#productCategory");
  const productTitle = $("#productTitle");
  const productDescription = $("#productDescription");
  const productContinueButton = $("#productContinueButton");

  let currentIndex = 0;
  let naturalWidth = 1;
  let naturalHeight = 1;
  let baseScale = 1;
  let zoom = 1;
  let panX = 0;
  let panY = 0;
  let loadToken = 0;
  let started = false;
  let hintTimer = 0;
  let resizeTimer = 0;
  const pointers = new Map();
  let lastPointer = null;
  let lastPinchDistance = 0;
  let lastPinchCenter = null;

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
  const pad = value => String(value).padStart(2, "0");
  const isDialogOpen = () => $$('dialog[open]').length > 0;

  function showModal(dialog) {
    if (dialog.open) return;
    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
  }

  function closeDialog(dialog) {
    if (!dialog.open) return;
    if (typeof dialog.close === "function") dialog.close();
    else dialog.removeAttribute("open");
  }

  function buildRouteUI() {
    sceneTotal.textContent = scenes.length;
    routeList.innerHTML = scenes.map((scene, index) => `
      <li class="route-item">
        <button type="button" data-scene-index="${index}" aria-label="Station ${index + 1}: ${scene.title}">
          <img class="route-thumb" src="${scene.image}" alt="" loading="lazy" width="48" height="48">
          <span><strong>${scene.title}</strong><small>${scene.area}</small></span>
          <span class="route-index">${pad(index + 1)}</span>
        </button>
      </li>`).join("");

    routeProgress.innerHTML = scenes.map((scene, index) => `
      <button type="button" data-progress-index="${index}" aria-label="Zu Station ${index + 1}: ${scene.title}"></button>`).join("");
  }

  function currentScene() { return scenes[currentIndex]; }

  function calculateScale() {
    const rect = stage.getBoundingClientRect();
    baseScale = Math.max(rect.width / naturalWidth, rect.height / naturalHeight);
    return rect;
  }

  function bounds() {
    const rect = stage.getBoundingClientRect();
    const scale = baseScale * zoom;
    return {
      x: Math.max(0, (naturalWidth * scale - rect.width) / 2),
      y: Math.max(0, (naturalHeight * scale - rect.height) / 2)
    };
  }

  function clampPan() {
    const limit = bounds();
    panX = clamp(panX, -limit.x, limit.x);
    panY = clamp(panY, -limit.y, limit.y);
  }

  function renderView() {
    clampPan();
    const scale = baseScale * zoom;
    sceneImage.style.width = `${naturalWidth}px`;
    sceneImage.style.height = `${naturalHeight}px`;
    sceneImage.style.transform = `translate(-50%, -50%) translate3d(${panX}px, ${panY}px, 0) scale(${scale})`;
    renderHotspotPositions(scale);
    zoomInButton.disabled = zoom >= 2.2;
    zoomOutButton.disabled = zoom <= 1;
  }

  function resetView(render = true) {
    const scene = currentScene();
    calculateScale();
    zoom = clamp(scene.focus.zoom || 1, 1, 2.2);
    const scale = baseScale * zoom;
    panX = -((scene.focus.x ?? .5) - .5) * naturalWidth * scale;
    panY = -((scene.focus.y ?? .5) - .5) * naturalHeight * scale;
    if (render) renderView();
  }

  function setZoom(nextZoom, anchorClientX, anchorClientY) {
    const oldZoom = zoom;
    zoom = clamp(nextZoom, 1, 2.2);
    if (zoom === oldZoom) return;

    const rect = stage.getBoundingClientRect();
    const anchorX = typeof anchorClientX === "number" ? anchorClientX - rect.left - rect.width / 2 : 0;
    const anchorY = typeof anchorClientY === "number" ? anchorClientY - rect.top - rect.height / 2 : 0;
    const ratio = zoom / oldZoom;
    panX = anchorX - (anchorX - panX) * ratio;
    panY = anchorY - (anchorY - panY) * ratio;
    renderView();
  }

  function buildHotspots() {
    hotspotLayer.innerHTML = "";
    currentScene().hotspots.forEach((spot, index) => {
      const product = products[spot.product];
      const button = document.createElement("button");
      button.type = "button";
      button.className = "hotspot";
      button.dataset.hotspotIndex = index;
      button.setAttribute("aria-label", `${product.title} näher ansehen`);
      button.innerHTML = `
        <svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><path d="M12 8.5v7M8.5 12h7"/></svg>
        <span class="hotspot-label">${product.title}</span>`;
      button.addEventListener("click", event => {
        event.stopPropagation();
        hideGestureHint();
        openProduct(spot.product);
      });
      hotspotLayer.appendChild(button);
    });
  }

  function renderHotspotPositions(scale = baseScale * zoom) {
    const rect = stage.getBoundingClientRect();
    const spots = currentScene().hotspots;
    $$(".hotspot", hotspotLayer).forEach((button, index) => {
      const spot = spots[index];
      const x = rect.width / 2 + panX + (spot.x - .5) * naturalWidth * scale;
      const y = rect.height / 2 + panY + (spot.y - .5) * naturalHeight * scale;
      button.style.left = `${x}px`;
      button.style.top = `${y}px`;
      button.classList.toggle("is-offscreen", x < -30 || y < -30 || x > rect.width + 30 || y > rect.height + 30);
    });
  }

  function updateUI() {
    const scene = currentScene();
    const previous = scenes[currentIndex - 1];
    const next = scenes[currentIndex + 1];

    sceneNumber.textContent = pad(currentIndex + 1);
    sceneArea.textContent = scene.area;
    sceneTitle.textContent = scene.title;
    sceneDescription.textContent = scene.description;

    previousButton.disabled = !previous;
    previousLabel.textContent = previous ? previous.title : "–";
    previousButton.setAttribute("aria-label", previous ? `Zurück zu ${previous.title}` : "Keine vorherige Station");

    nextLabel.textContent = next ? next.title : "Tour neu starten";
    nextButton.setAttribute("aria-label", next ? `Weiter zu ${next.title}` : "Tour neu starten");

    $$("[data-scene-index]", routeList).forEach((button, index) => {
      if (index === currentIndex) button.setAttribute("aria-current", "step");
      else button.removeAttribute("aria-current");
    });

    $$("[data-progress-index]", routeProgress).forEach((button, index) => {
      if (index === currentIndex) button.setAttribute("aria-current", "step");
      else button.removeAttribute("aria-current");
    });
  }

  function preloadNearby() {
    const indexes = [currentIndex - 1, currentIndex + 1].filter(index => scenes[index]);
    indexes.forEach(index => { const image = new Image(); image.src = scenes[index].image; });
    currentScene().hotspots.forEach(spot => { const image = new Image(); image.src = products[spot.product].image; });
  }

  function finishSceneLoad(token, announce) {
    if (token !== loadToken) return;
    naturalWidth = sceneImage.naturalWidth || 1;
    naturalHeight = sceneImage.naturalHeight || 1;
    loadingState.classList.remove("show");
    errorState.hidden = true;
    sceneImage.classList.remove("is-changing");
    resetView(false);
    buildHotspots();
    renderView();
    updateUI();
    preloadNearby();

    if (announce) {
      const scene = currentScene();
      sceneAnnouncement.textContent = `Station ${currentIndex + 1} von ${scenes.length}: ${scene.title}`;
    }
  }

  function showScene(index, options = {}) {
    const bounded = (index + scenes.length) % scenes.length;
    currentIndex = bounded;
    const scene = currentScene();
    const token = ++loadToken;

    hideGestureHint();
    pointers.clear();
    sceneImage.classList.add("is-changing");
    loadingState.classList.add("show");
    errorState.hidden = true;
    hotspotLayer.innerHTML = "";
    updateUI();

    sceneImage.onload = () => finishSceneLoad(token, options.announce !== false);
    sceneImage.onerror = () => {
      if (token !== loadToken) return;
      loadingState.classList.remove("show");
      errorState.hidden = false;
      sceneImage.classList.remove("is-changing");
    };
    sceneImage.alt = scene.alt;
    sceneImage.src = scene.image;

    if (sceneImage.complete && sceneImage.naturalWidth) {
      requestAnimationFrame(() => finishSceneLoad(token, options.announce !== false));
    }

    if (location.hash !== `#${scene.id}`) history.replaceState(null, "", `#${scene.id}`);
  }

  function moveNext() {
    showScene(currentIndex === scenes.length - 1 ? 0 : currentIndex + 1);
  }

  function movePrevious() {
    if (currentIndex > 0) showScene(currentIndex - 1);
  }

  function openProduct(key) {
    const product = products[key];
    productImage.src = product.image;
    productImage.alt = product.alt;
    productCategory.textContent = product.category;
    productTitle.textContent = product.title;
    productDescription.textContent = product.description;
    showModal(productDialog);
  }

  function hideGestureHint() {
    clearTimeout(hintTimer);
    gestureHint.classList.remove("show");
  }

  function scheduleGestureHint() {
    if (!started) return;
    clearTimeout(hintTimer);
    hintTimer = window.setTimeout(() => gestureHint.classList.add("show"), 450);
    window.setTimeout(hideGestureHint, 4200);
  }

  function pointerDistance() {
    const values = [...pointers.values()];
    if (values.length < 2) return 0;
    return Math.hypot(values[0].x - values[1].x, values[0].y - values[1].y);
  }

  function pointerCenter() {
    const values = [...pointers.values()];
    if (values.length < 2) return null;
    return { x: (values[0].x + values[1].x) / 2, y: (values[0].y + values[1].y) / 2 };
  }

  viewer.addEventListener("pointerdown", event => {
    if (event.target.closest("button, a") || isDialogOpen()) return;
    hideGestureHint();
    viewer.setPointerCapture?.(event.pointerId);
    pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    viewer.classList.add("is-dragging");

    if (pointers.size === 1) lastPointer = { x: event.clientX, y: event.clientY };
    if (pointers.size === 2) {
      lastPinchDistance = pointerDistance();
      lastPinchCenter = pointerCenter();
      lastPointer = null;
    }
  });

  viewer.addEventListener("pointermove", event => {
    if (!pointers.has(event.pointerId)) return;
    pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });

    if (pointers.size === 1 && lastPointer) {
      panX += event.clientX - lastPointer.x;
      panY += event.clientY - lastPointer.y;
      lastPointer = { x: event.clientX, y: event.clientY };
      renderView();
      return;
    }

    if (pointers.size >= 2) {
      const distance = pointerDistance();
      const center = pointerCenter();
      if (lastPinchDistance && center && lastPinchCenter) {
        panX += center.x - lastPinchCenter.x;
        panY += center.y - lastPinchCenter.y;
        setZoom(zoom * (distance / lastPinchDistance), center.x, center.y);
      }
      lastPinchDistance = distance;
      lastPinchCenter = center;
    }
  });

  function releasePointer(event) {
    pointers.delete(event.pointerId);
    if (pointers.size === 0) {
      viewer.classList.remove("is-dragging");
      lastPointer = null;
      lastPinchDistance = 0;
      lastPinchCenter = null;
    } else if (pointers.size === 1) {
      const remaining = [...pointers.values()][0];
      lastPointer = { ...remaining };
      lastPinchDistance = 0;
      lastPinchCenter = null;
    }
  }

  viewer.addEventListener("pointerup", releasePointer);
  viewer.addEventListener("pointercancel", releasePointer);

  viewer.addEventListener("wheel", event => {
    if (isDialogOpen()) return;
    event.preventDefault();
    hideGestureHint();
    const factor = Math.exp(-event.deltaY * .0014);
    setZoom(zoom * factor, event.clientX, event.clientY);
  }, { passive: false });

  previousButton.addEventListener("click", movePrevious);
  nextButton.addEventListener("click", moveNext);
  zoomInButton.addEventListener("click", () => setZoom(zoom + .22));
  zoomOutButton.addEventListener("click", () => setZoom(zoom - .22));
  resetViewButton.addEventListener("click", () => resetView());
  retryButton.addEventListener("click", () => showScene(currentIndex));

  routeButton.addEventListener("click", () => {
    hideGestureHint();
    routeButton.setAttribute("aria-expanded", "true");
    showModal(routeDialog);
    const active = $(`[data-scene-index="${currentIndex}"]`, routeList);
    active?.scrollIntoView({ block: "center" });
  });

  helpButton.addEventListener("click", () => {
    hideGestureHint();
    showModal(helpDialog);
  });

  routeDialog.addEventListener("close", () => routeButton.setAttribute("aria-expanded", "false"));

  routeList.addEventListener("click", event => {
    const button = event.target.closest("[data-scene-index]");
    if (!button) return;
    closeDialog(routeDialog);
    showScene(Number(button.dataset.sceneIndex));
    viewer.focus({ preventScroll: true });
  });

  routeProgress.addEventListener("click", event => {
    const button = event.target.closest("[data-progress-index]");
    if (button) showScene(Number(button.dataset.progressIndex));
  });

  $$("[data-close-dialog]").forEach(button => {
    button.addEventListener("click", () => closeDialog(button.closest("dialog")));
  });
  productContinueButton.addEventListener("click", () => closeDialog(productDialog));

  [routeDialog, helpDialog, productDialog].forEach(dialog => {
    dialog.addEventListener("click", event => {
      const rect = dialog.getBoundingClientRect();
      const inside = event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom;
      if (!inside) closeDialog(dialog);
    });
  });

  startButton.addEventListener("click", () => {
    started = true;
    closeDialog(introDialog);
    viewer.focus({ preventScroll: true });
    scheduleGestureHint();
  });

  function requestFullscreen() {
    if (document.fullscreenElement) document.exitFullscreen?.();
    else tourShell.requestFullscreen?.();
  }

  fullscreenButton.addEventListener("click", requestFullscreen);
  document.addEventListener("fullscreenchange", () => {
    const active = Boolean(document.fullscreenElement);
    tourShell.classList.toggle("is-fullscreen", active);
    fullscreenButton.setAttribute("aria-label", active ? "Vollbild schließen" : "Vollbild öffnen");
    window.setTimeout(() => { resetView(); }, 80);
  });

  if (!document.fullscreenEnabled || !tourShell.requestFullscreen) fullscreenButton.hidden = true;

  viewer.addEventListener("keydown", event => {
    if (isDialogOpen()) return;
    if (["ArrowRight", "ArrowUp"].includes(event.key)) { event.preventDefault(); moveNext(); }
    else if (["ArrowLeft", "ArrowDown"].includes(event.key)) { event.preventDefault(); movePrevious(); }
    else if (["+", "="].includes(event.key)) { event.preventDefault(); setZoom(zoom + .22); }
    else if (["-", "_"].includes(event.key)) { event.preventDefault(); setZoom(zoom - .22); }
    else if (["0", "Home"].includes(event.key)) { event.preventDefault(); resetView(); }
    else if (event.key.toLowerCase() === "m") { event.preventDefault(); showModal(routeDialog); }
    else if (event.key.toLowerCase() === "f") { event.preventDefault(); requestFullscreen(); }
  });

  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => resetView(), 120);
  });

  window.addEventListener("hashchange", () => {
    const id = location.hash.slice(1);
    const index = scenes.findIndex(scene => scene.id === id);
    if (index >= 0 && index !== currentIndex) showScene(index);
  });

  buildRouteUI();
  const initialId = location.hash.slice(1);
  const initialIndex = Math.max(0, scenes.findIndex(scene => scene.id === initialId));
  showScene(initialIndex, { announce: false });
  requestAnimationFrame(() => showModal(introDialog));
})();
