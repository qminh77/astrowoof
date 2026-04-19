import "./styles.css";

type TokenStat = {
  label: string;
  value: string;
  detail: string;
};

type RoadmapStep = {
  phase: string;
  title: string;
  detail: string;
};

type CommunityLink = {
  title: string;
  href?: string;
  detail: string;
  cta: string;
};

type HowToStep = {
  step: string;
  title: string;
  detail: string;
};

const tabItems = [
  { id: "overview", label: "Overview" },
  { id: "about", label: "Mission" },
  { id: "howto", label: "How To Buy" },
  { id: "tokenomics", label: "Meme-onomics" },
  { id: "roadmap", label: "Roadmap" },
  { id: "community", label: "Community" },
] as const;

type TabId = (typeof tabItems)[number]["id"];

const dashboardImage = "/astrowoof-dashboard.jpg";
const mascotImage = "/astrowoof-hero.jpg";
const sloganImage = "/astrowoof-slogan.jpg";
const astroWoofContract = "TBA";

const asteroidReference = {
  source: "https://asteroideth.site",
  contract: "0xAFF2565091E7207191dBe340B8528D02FA78d044",
  telegram: "https://t.me/asteroid_OG",
  x: "https://x.com/asteroidfanog",
  dex: "https://dexscreener.com/ethereum/0x7Dfc9DD51638573a812b39d33EDed20Df468E7bC",
  uniswap:
    "https://app.uniswap.org/swap?&chain=eth&use=v2&outputCurrency=0xaff2565091e7207191dbe340b8528d02fa78d044&inputCurrency=0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
};

const tokenStats: TokenStat[] = [
  {
    label: "Ticker",
    value: "$ASTROWOOF",
    detail: "Community meme coin on Ethereum.",
  },
  {
    label: "Total Supply",
    value: "1,000,000,000",
    detail: "One billion tokens loaded.",
  },
  {
    label: "Tax",
    value: "0 / 0",
    detail: "No buy tax and no sell tax.",
  },
  {
    label: "Ownership",
    value: "Renounced",
    detail: "Cockpit belongs to the community.",
  },
];

const roadmap: RoadmapStep[] = [
  {
    phase: "Boot 01",
    title: "Wake The Pack",
    detail: "Meme pushes, raids, and daily noise across socials.",
  },
  {
    phase: "Boot 02",
    title: "Grow The Dashboard",
    detail: "Plug live links, more content, and stronger community loops.",
  },
  {
    phase: "Boot 03",
    title: "Moon Drift",
    detail: "Keep momentum and let community culture lead.",
  },
  {
    phase: "Boot 04",
    title: "Infinite Meme Mode",
    detail: "Ship more jokes, art, and weird internet energy.",
  },
];

const communityLinks: CommunityLink[] = [
  {
    title: "Buy On Uniswap",
    href: "https://app.uniswap.org/swap",
    detail: "Main buy portal for $ASTROWOOF.",
    cta: "Open Uniswap",
  },
  {
    title: "Telegram",
    href: "https://t.me/AstrowoofERC",
    detail: "Official group chat for raids and updates.",
    cta: "Join Telegram",
  },
  {
    title: "X / Twitter",
    detail: "Add your X profile link here.",
    cta: "Pending Link",
  },
  {
    title: "Chart",
    detail: "Add Dexscreener or chart page.",
    cta: "Pending Link",
  },
];

const howToSteps: HowToStep[] = [
  {
    step: "01",
    title: "Download MetaMask",
    detail:
      "Install MetaMask (or wallet of choice) on mobile/extension, then set up your wallet.",
  },
  {
    step: "02",
    title: "Fund With ETH",
    detail:
      "Deposit ETH on Ethereum mainnet. You can buy in-wallet or transfer from exchange.",
  },
  {
    step: "03",
    title: "Open Uniswap",
    detail:
      "Connect wallet and open swap. Paste token contract when available, then select token.",
  },
  {
    step: "04",
    title: "Swap ETH -> $ASTROWOOF",
    detail:
      "Confirm swap. Tokenomics target follows 0/0 tax style for simple entry and exit.",
  },
];

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("App root was not found.");
}

app.innerHTML = `
  <div class="desktop">
    <div class="star-layer" aria-hidden="true"></div>

    <div class="browser window" id="top">
      ${renderTitleBar("Astrowoof_Memecoin_Dashboard.exe", "v1.1")}

      <div class="browser-toolbar">
        <div class="toolbar-actions">
          <button type="button" data-nav="back" aria-label="Back">◀</button>
          <button type="button" data-nav="forward" aria-label="Forward">▶</button>
          <button type="button" data-nav="refresh" aria-label="Refresh">⟳</button>
        </div>
        <div class="address-bar" data-address>https://astrowoof.eth</div>
      </div>

      <div class="tab-strip" role="tablist" aria-label="Main Tabs">
        ${tabItems
          .map(
            (tab, index) => `
              <button
                id="tab-${tab.id}"
                class="tab-button${index === 0 ? " is-active" : ""}"
                type="button"
                role="tab"
                data-tab-button="${tab.id}"
                data-tab-label="${tab.label}"
                aria-selected="${index === 0 ? "true" : "false"}"
                aria-controls="panel-${tab.id}"
              >
                ${tab.label}
              </button>
            `,
          )
          .join("")}
      </div>

      <div class="browser-content">
        <section
          class="tab-panel is-active"
          id="panel-overview"
          role="tabpanel"
          data-tab-panel="overview"
          aria-labelledby="tab-overview"
        >
          <header class="hero">
            <p class="hero-kicker">THE OFFICIAL WEBSITE OF $ASTROWOOF MEME FRENZY</p>
            <h1>ASTROWOOF: TO THE MOON (PROBABLY)</h1>
            <p class="hero-subtitle">
              Lost in the pixel void of the 90s, $ASTROWOOF landed on Ethereum with no pilot license and pure meme fuel.
            </p>

            <div class="hero-actions">
              <a class="button button-primary" href="https://app.uniswap.org/swap" target="_blank" rel="noreferrer">
                BUY $ASTROWOOF
              </a>
              <button class="button" type="button" data-open-tab="howto">
                HOW TO BUY
              </button>
              <button class="button" type="button" data-open-tab="community">
                JOIN THE CHAOS
              </button>
            </div>

            <article class="window hero-banner">
              ${renderTitleBar("Main_Display.exe", "Live")}
              <div class="hero-banner-body">
                <img src="${dashboardImage}" alt="Retro Astro-Woof dashboard style artwork" />
              </div>
            </article>

            <article class="window slogan-banner">
              ${renderTitleBar("Motto_Banner.exe", "Pixel Header")}
              <div class="slogan-banner-body">
                <img src="${sloganImage}" alt="I HAVE NO IDEA WHAT I'M DOING banner" />
              </div>
            </article>
          </header>

          <section class="mini-window-grid" aria-label="Interactive Meme Widgets">
            <article class="window mini-window draggable-window" data-window-id="decision" data-window-title="Decision Panel">
              ${renderTitleBar("Crypto_Investor_Tools.exe", "01", "decision")}
              <div class="mini-body decision-card">
                <h3>AVERAGE HOLDER'S DAILY DECISION</h3>
                <p>Buy or panic?</p>
                <div class="decision-buttons">
                  <button type="button" class="decision-button buy-box" data-decision-btn="buy">BUY THE DIP</button>
                  <button type="button" class="decision-button panic-box" data-decision-btn="panic">PANIC SELL</button>
                </div>
                <p class="widget-output" data-decision-output>Current mood: undecided.</p>
              </div>
            </article>

            <article class="window mini-window draggable-window" data-window-id="tracker" data-window-title="Tracker Panel">
              ${renderTitleBar("Astrowoof_Tracker.exe", "02", "tracker")}
              <div class="mini-body chart-card">
                <h3>TECHNICAL ANALYSIS IS CHEESE-BASED</h3>
                <div class="chart-controls">
                  <button type="button" class="chart-toggle is-active" data-chart-btn="1H">1H</button>
                  <button type="button" class="chart-toggle" data-chart-btn="1D">1D</button>
                  <button type="button" class="chart-toggle" data-chart-btn="1W">1W</button>
                </div>
                <div class="chart-row">
                  <div class="fake-chart" data-chart-canvas data-chart-mode="1H" aria-hidden="true"></div>
                  <img src="${mascotImage}" alt="Astro-Woof mascot" />
                </div>
                <p class="widget-output" data-chart-output>Mode 1H: high volatility and high confusion.</p>
              </div>
            </article>

            <article class="window mini-window draggable-window" data-window-id="compare" data-window-title="Comparison Panel">
              ${renderTitleBar("Astro_Comparison.exe", "03", "compare")}
              <div class="mini-body compare-card">
                <h3>$ASTROWOOF VS. REAL ASTEROID</h3>
                <div class="compare-row">
                  <div class="asteroid-box" aria-label="Asteroid"></div>
                  <img src="${mascotImage}" data-compare-image alt="Astro-Woof in suit" />
                </div>
                <button type="button" class="button compare-toggle" data-compare-toggle>
                  SWITCH VIEW
                </button>
                <p class="widget-output" data-compare-output>View 1: asteroid vs Astro-Woof.</p>
              </div>
            </article>
          </section>

          <div class="restore-dock" data-restore-dock hidden>
            <p>Closed windows:</p>
            <div class="restore-buttons" data-restore-buttons></div>
          </div>
        </section>

        <section
          class="tab-panel"
          id="panel-about"
          role="tabpanel"
          data-tab-panel="about"
          aria-labelledby="tab-about"
        >
          <section class="window section-window">
            ${renderTitleBar("System_Error_Success.exe", "Mission Log")}
            <div class="section-body">
              <h2>The Mission Log (The CTO Story)</h2>
              <p class="lead">Asteroid who? Astro-Woof is here.</p>
              <p>
                Inspired by the legendary Asteroid shiba, Astro-Woof is what happens when a meme gets lost in a 1995
                dial-up connection. This is a Pure CTO (Community Takeover). No dev wallets, no gatekeepers, just a
                bunch of confused pixels trying to find the moon.
              </p>
              <p>
                We are not here to solve world hunger; we are here to stare blankly at the stars and post memes.
              </p>

              <div class="mission-gallery">
                <article class="window mission-card">
                  ${renderTitleBar("Mascot_View.exe", "Doge")}
                  <div class="mission-card-body">
                    <img src="${mascotImage}" alt="Astro-Woof mascot reference" />
                  </div>
                </article>
                <article class="window mission-card mission-card-wide">
                  ${renderTitleBar("Meme_Banner.exe", "Header")}
                  <div class="mission-card-body">
                    <img src="${sloganImage}" alt="I HAVE NO IDEA WHAT I'M DOING banner" />
                  </div>
                </article>
              </div>

              <article class="window ref-window">
                ${renderTitleBar("Asteroid_Reference.exe", "Source Data")}
                <div class="ref-body">
                  <p class="ref-source">
                    Referenced from:
                    <a href="${asteroidReference.source}" target="_blank" rel="noreferrer">${asteroidReference.source}</a>
                  </p>
                  <p>
                    OG thesis context from that project: Liv Perrotto designed the Shiba plush "Asteroid" as zero-g
                    indicator for Polaris Dawn, which became a big part of the narrative on crypto social.
                  </p>
                  <p>
                    We use that structure as inspiration here for clear buy flow, social links, contract block, and
                    lore-style storytelling.
                  </p>
                  <div class="ref-links">
                    <a class="button" href="${asteroidReference.telegram}" target="_blank" rel="noreferrer">Asteroid TG</a>
                    <a class="button" href="${asteroidReference.x}" target="_blank" rel="noreferrer">Asteroid X</a>
                    <a class="button" href="${asteroidReference.dex}" target="_blank" rel="noreferrer">Asteroid Dex</a>
                  </div>
                </div>
              </article>
            </div>
          </section>
        </section>

        <section
          class="tab-panel"
          id="panel-howto"
          role="tabpanel"
          data-tab-panel="howto"
          aria-labelledby="tab-howto"
        >
          <section class="window section-window">
            ${renderTitleBar("How_To_Buy.exe", "4 Steps")}
            <div class="section-body">
              <h2>How To Buy $ASTROWOOF</h2>
              <div class="howto-grid">
                ${howToSteps
                  .map(
                    (item) => `
                      <article class="howto-card">
                        <p class="howto-step">${item.step}</p>
                        <h3>${item.title}</h3>
                        <p>${item.detail}</p>
                      </article>
                    `,
                  )
                  .join("")}
              </div>

              <div class="buy-action-row">
                <a class="button button-primary" href="https://app.uniswap.org/swap" target="_blank" rel="noreferrer">
                  Open Uniswap
                </a>
                <a class="button" href="https://metamask.io" target="_blank" rel="noreferrer">Get MetaMask</a>
                <a class="button" href="https://ethereum.org" target="_blank" rel="noreferrer">Ethereum Docs</a>
              </div>

              <article class="window contract-block">
                ${renderTitleBar("Contract_Block.exe", "Copy CA")}
                <div class="contract-body">
                  <p class="contract-label">ASTROWOOF Contract</p>
                  <div class="copy-row">
                    <code class="copy-value">${astroWoofContract}</code>
                    <button
                      type="button"
                      class="button copy-button"
                      data-copy-value="${astroWoofContract}"
                      ${astroWoofContract === "TBA" ? "disabled" : ""}
                    >
                      ${astroWoofContract === "TBA" ? "Awaiting CA" : "Copy CA"}
                    </button>
                  </div>

                  <p class="contract-label">Reference OG Asteroid Contract</p>
                  <div class="copy-row">
                    <code class="copy-value">${asteroidReference.contract}</code>
                    <button type="button" class="button copy-button" data-copy-value="${asteroidReference.contract}">
                      Copy Reference CA
                    </button>
                  </div>
                </div>
              </article>
            </div>
          </section>
        </section>

        <section
          class="tab-panel"
          id="panel-tokenomics"
          role="tabpanel"
          data-tab-panel="tokenomics"
          aria-labelledby="tab-tokenomics"
        >
          <section class="window section-window">
            ${renderTitleBar("Meme_onomics.exe", "100% Community")}
            <div class="section-body">
              <h2>Meme-onomics: 100% Community, 0% Clue</h2>
              <div class="stats-grid">
                ${tokenStats
                  .map(
                    (stat) => `
                      <article class="stat-card">
                        <p class="stat-label">${stat.label}</p>
                        <h3>${stat.value}</h3>
                        <p>${stat.detail}</p>
                      </article>
                    `,
                  )
                  .join("")}
              </div>

              <div class="token-flags">
                <span>ETH Network</span>
                <span>0 / 0 Tax</span>
                <span>Renounced Ownership</span>
                <span>Community Driven</span>
              </div>

              <div class="buy-action-row">
                <a class="button" href="${asteroidReference.uniswap}" target="_blank" rel="noreferrer">
                  Reference OG Swap Link
                </a>
                <a class="button" href="${asteroidReference.dex}" target="_blank" rel="noreferrer">
                  Reference DexScreener
                </a>
              </div>
            </div>
          </section>
        </section>

        <section
          class="tab-panel"
          id="panel-roadmap"
          role="tabpanel"
          data-tab-panel="roadmap"
          aria-labelledby="tab-roadmap"
        >
          <section class="window section-window">
            ${renderTitleBar("Mission_Roadmap.exe", "Queued")}
            <div class="section-body">
              <h2>Roadmap</h2>
              <div class="roadmap-list">
                ${roadmap
                  .map(
                    (item) => `
                      <article class="roadmap-item">
                        <p class="roadmap-phase">${item.phase}</p>
                        <h3>${item.title}</h3>
                        <p>${item.detail}</p>
                      </article>
                    `,
                  )
                  .join("")}
              </div>
            </div>
          </section>
        </section>

        <section
          class="tab-panel"
          id="panel-community"
          role="tabpanel"
          data-tab-panel="community"
          aria-labelledby="tab-community"
        >
          <section class="window section-window" id="community">
            ${renderTitleBar("Community_Uplink.exe", "Broadcast")}
            <div class="section-body">
              <h2>Community Links</h2>
              <div class="community-grid">
                ${communityLinks
                  .map(
                    (node) => `
                      <article class="community-card">
                        <h3>${node.title}</h3>
                        <p>${node.detail}</p>
                        ${
                          node.href
                            ? `<a class="button" href="${node.href}" target="_blank" rel="noreferrer">${node.cta}</a>`
                            : `<span class="button button-muted">${node.cta}</span>`
                        }
                      </article>
                    `,
                  )
                  .join("")}
              </div>

              <article class="window ref-window">
                ${renderTitleBar("OG_Asteroid_Channels.exe", "Reference")}
                <div class="ref-body">
                  <p>
                    Quick reference channels from the source project for benchmarking structure and content flow.
                  </p>
                  <div class="ref-links">
                    <a class="button" href="${asteroidReference.telegram}" target="_blank" rel="noreferrer">OG Telegram</a>
                    <a class="button" href="${asteroidReference.x}" target="_blank" rel="noreferrer">OG X</a>
                    <a class="button" href="${asteroidReference.dex}" target="_blank" rel="noreferrer">OG Dex</a>
                  </div>
                </div>
              </article>
            </div>
          </section>
        </section>
      </div>

      <footer class="window footer">
        ${renderTitleBar("Token_Info.txt", "Final Readout")}
        <div class="footer-body">
          <p><strong>$ASTROWOOF</strong> • Ethereum • Supply 1,000,000,000 • Tax 0/0 • Ownership Renounced</p>
          <p class="footer-meta">Reference structure: <a href="${asteroidReference.source}" target="_blank" rel="noreferrer">${asteroidReference.source}</a></p>
          <p class="footer-note">© <span data-year></span> $ASTROWOOF</p>
        </div>
      </footer>

      <div class="status-bar">
        <span data-status-main>Ready.</span>
        <span data-status-tab>Tab: Overview</span>
      </div>
    </div>
  </div>
`;

const yearNode = document.querySelector<HTMLElement>("[data-year]");

if (yearNode) {
  yearNode.textContent = new Date().getFullYear().toString();
}

buildStars();
setupTabsAndNavigation();
setupOpenTabButtons();
setupCopyButtons();
setupDecisionWidget();
setupChartWidget();
setupCompareWidget();
setupWindowControls();
setupDraggableWindows();

function setupTabsAndNavigation(): void {
  const tabButtons = Array.from(document.querySelectorAll<HTMLButtonElement>("[data-tab-button]"));
  const tabPanels = Array.from(document.querySelectorAll<HTMLElement>("[data-tab-panel]"));
  const backButton = document.querySelector<HTMLButtonElement>("[data-nav='back']");
  const forwardButton = document.querySelector<HTMLButtonElement>("[data-nav='forward']");
  const refreshButton = document.querySelector<HTMLButtonElement>("[data-nav='refresh']");
  const addressBar = document.querySelector<HTMLElement>("[data-address]");
  const statusTab = document.querySelector<HTMLElement>("[data-status-tab]");
  const browser = document.querySelector<HTMLElement>(".browser");

  const hashTarget = window.location.hash.replace("#", "");
  const initialTab = isTabId(hashTarget) ? hashTarget : "overview";

  let currentTab: TabId = initialTab;
  let tabHistory: TabId[] = [initialTab];
  let historyIndex = 0;

  const updateNavigationButtons = (): void => {
    if (backButton) {
      backButton.disabled = historyIndex <= 0;
    }
    if (forwardButton) {
      forwardButton.disabled = historyIndex >= tabHistory.length - 1;
    }
  };

  const activateTab = (tabId: TabId, pushHistory: boolean): void => {
    if (tabId === currentTab && pushHistory) {
      return;
    }

    currentTab = tabId;

    for (const button of tabButtons) {
      const isActive = button.dataset.tabButton === tabId;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-selected", isActive ? "true" : "false");
      button.tabIndex = isActive ? 0 : -1;
    }

    for (const panel of tabPanels) {
      panel.classList.toggle("is-active", panel.dataset.tabPanel === tabId);
    }

    const label = getTabLabel(tabId);

    if (addressBar) {
      addressBar.textContent = `https://astrowoof.eth${tabId === "overview" ? "" : `/#${tabId}`}`;
    }

    if (statusTab) {
      statusTab.textContent = `Tab: ${label}`;
    }

    if (pushHistory) {
      if (historyIndex < tabHistory.length - 1) {
        tabHistory = tabHistory.slice(0, historyIndex + 1);
      }

      const lastEntry = tabHistory[tabHistory.length - 1];

      if (lastEntry !== tabId) {
        tabHistory.push(tabId);
        historyIndex = tabHistory.length - 1;
      }
    }

    updateNavigationButtons();
  };

  for (const button of tabButtons) {
    button.addEventListener("click", () => {
      const nextTab = button.dataset.tabButton;

      if (!nextTab || !isTabId(nextTab)) {
        return;
      }

      activateTab(nextTab, true);
      setStatus(`Switched to ${getTabLabel(nextTab)}.`);
    });
  }

  if (backButton) {
    backButton.addEventListener("click", () => {
      if (historyIndex <= 0) {
        return;
      }

      historyIndex -= 1;
      activateTab(tabHistory[historyIndex], false);
      setStatus("Navigated back.");
    });
  }

  if (forwardButton) {
    forwardButton.addEventListener("click", () => {
      if (historyIndex >= tabHistory.length - 1) {
        return;
      }

      historyIndex += 1;
      activateTab(tabHistory[historyIndex], false);
      setStatus("Navigated forward.");
    });
  }

  if (refreshButton) {
    refreshButton.addEventListener("click", () => {
      buildStars();

      const activePanel = document.querySelector<HTMLElement>(".tab-panel.is-active");

      if (activePanel) {
        activePanel.classList.remove("panel-flash");
        void activePanel.offsetWidth;
        activePanel.classList.add("panel-flash");
      }

      if (browser) {
        browser.classList.add("is-refreshing");
        window.setTimeout(() => {
          browser.classList.remove("is-refreshing");
        }, 280);
      }

      setStatus("Window refreshed.");
    });
  }

  activateTab(initialTab, false);
  updateNavigationButtons();
}

function setupOpenTabButtons(): void {
  const openTabButtons = Array.from(document.querySelectorAll<HTMLButtonElement>("[data-open-tab]"));

  for (const button of openTabButtons) {
    button.addEventListener("click", () => {
      const target = button.dataset.openTab;

      if (!target || !isTabId(target)) {
        return;
      }

      const tabButton = document.querySelector<HTMLButtonElement>(`[data-tab-button="${target}"]`);

      if (!tabButton) {
        return;
      }

      tabButton.click();
    });
  }
}

function setupCopyButtons(): void {
  const copyButtons = Array.from(document.querySelectorAll<HTMLButtonElement>("[data-copy-value]"));

  for (const button of copyButtons) {
    button.addEventListener("click", async () => {
      const value = button.dataset.copyValue ?? "";

      if (!value || value === "TBA") {
        setStatus("Contract address is not available yet.");
        return;
      }

      try {
        await navigator.clipboard.writeText(value);
        setStatus("Contract copied to clipboard.");
      } catch {
        setStatus("Clipboard blocked. Please copy manually.");
      }
    });
  }
}

function setupDecisionWidget(): void {
  const buttons = Array.from(document.querySelectorAll<HTMLButtonElement>("[data-decision-btn]"));
  const output = document.querySelector<HTMLElement>("[data-decision-output]");
  const responses: Record<string, string> = {
    buy: "Current mood: bought the dip with full confidence and no map.",
    panic: "Current mood: panic sold, then FOMO bought again.",
  };

  for (const button of buttons) {
    button.addEventListener("click", () => {
      for (const control of buttons) {
        control.classList.toggle("is-active", control === button);
      }

      const choice = button.dataset.decisionBtn ?? "";
      const message = responses[choice] ?? "Current mood: still buffering.";

      if (output) {
        output.textContent = message;
      }

      setStatus(`Decision set to ${choice.toUpperCase()}.`);
    });
  }
}

function setupChartWidget(): void {
  const toggles = Array.from(document.querySelectorAll<HTMLButtonElement>("[data-chart-btn]"));
  const chart = document.querySelector<HTMLElement>("[data-chart-canvas]");
  const output = document.querySelector<HTMLElement>("[data-chart-output]");

  const chartNotes: Record<string, string> = {
    "1H": "high volatility and high confusion.",
    "1D": "sideways until meme energy spikes.",
    "1W": "uptrend powered by community noise.",
  };

  for (const toggle of toggles) {
    toggle.addEventListener("click", () => {
      const mode = toggle.dataset.chartBtn ?? "1H";

      for (const button of toggles) {
        button.classList.toggle("is-active", button === toggle);
      }

      if (chart) {
        chart.dataset.chartMode = mode;
      }

      if (output) {
        output.textContent = `Mode ${mode}: ${chartNotes[mode] ?? "signal unstable."}`;
      }

      setStatus(`Chart mode switched to ${mode}.`);
    });
  }
}

function setupCompareWidget(): void {
  const toggle = document.querySelector<HTMLButtonElement>("[data-compare-toggle]");
  const compareImage = document.querySelector<HTMLImageElement>("[data-compare-image]");
  const output = document.querySelector<HTMLElement>("[data-compare-output]");

  if (!toggle || !compareImage) {
    return;
  }

  const views = [
    {
      image: mascotImage,
      alt: "Astro-Woof in suit",
      text: "View 1: asteroid vs Astro-Woof.",
    },
    {
      image: dashboardImage,
      alt: "Astrowoof dashboard screenshot",
      text: "View 2: asteroid vs full meme dashboard.",
    },
    {
      image: sloganImage,
      alt: "I HAVE NO IDEA WHAT I'M DOING banner",
      text: "View 3: asteroid vs slogan banner energy.",
    },
  ];

  let currentIndex = 0;

  toggle.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % views.length;
    const currentView = views[currentIndex];

    compareImage.src = currentView.image;
    compareImage.alt = currentView.alt;

    if (output) {
      output.textContent = currentView.text;
    }

    setStatus("Comparison view switched.");
  });
}

function setupWindowControls(): void {
  const windows = Array.from(document.querySelectorAll<HTMLElement>(".draggable-window"));
  const controls = Array.from(document.querySelectorAll<HTMLButtonElement>("[data-control]"));
  const restoreDock = document.querySelector<HTMLElement>("[data-restore-dock]");
  const restoreButtonsHost = document.querySelector<HTMLElement>("[data-restore-buttons]");
  const windowMap = new Map<string, HTMLElement>();

  for (const item of windows) {
    const id = item.dataset.windowId;
    if (id) {
      windowMap.set(id, item);
    }
  }

  const syncRestoreDock = (): void => {
    if (!restoreDock || !restoreButtonsHost) {
      return;
    }

    restoreDock.hidden = restoreButtonsHost.childElementCount === 0;
  };

  const removeRestoreButton = (windowId: string): void => {
    if (!restoreButtonsHost) {
      return;
    }

    const existing = restoreButtonsHost.querySelector<HTMLButtonElement>(`[data-restore-id="${windowId}"]`);
    if (existing) {
      existing.remove();
    }
    syncRestoreDock();
  };

  const addRestoreButton = (windowId: string, windowTitle: string): void => {
    if (!restoreButtonsHost) {
      return;
    }

    const existing = restoreButtonsHost.querySelector<HTMLButtonElement>(`[data-restore-id="${windowId}"]`);
    if (existing) {
      syncRestoreDock();
      return;
    }

    const button = document.createElement("button");
    button.type = "button";
    button.className = "restore-button";
    button.dataset.restoreId = windowId;
    button.textContent = `Restore ${windowTitle}`;

    button.addEventListener("click", () => {
      const targetWindow = windowMap.get(windowId);

      if (!targetWindow) {
        return;
      }

      targetWindow.classList.remove("is-closed");
      removeRestoreButton(windowId);
      setStatus(`Restored ${windowTitle}.`);
    });

    restoreButtonsHost.appendChild(button);
    syncRestoreDock();
  };

  for (const button of controls) {
    button.addEventListener("click", (event) => {
      event.stopPropagation();

      const action = button.dataset.control;
      const windowId = button.dataset.windowId;

      if (!windowId || !action) {
        return;
      }

      const targetWindow = windowMap.get(windowId);

      if (!targetWindow) {
        return;
      }

      const title = targetWindow.dataset.windowTitle ?? "window";

      if (action === "minimize") {
        targetWindow.classList.toggle("is-minimized");
        setStatus(
          targetWindow.classList.contains("is-minimized")
            ? `Minimized ${title}.`
            : `Restored ${title}.`,
        );
        return;
      }

      if (action === "maximize") {
        targetWindow.classList.toggle("is-maximized");
        if (targetWindow.classList.contains("is-maximized")) {
          targetWindow.classList.remove("is-minimized");
        }
        applyWindowTransform(targetWindow);
        setStatus(
          targetWindow.classList.contains("is-maximized")
            ? `Maximized ${title}.`
            : `Returned ${title} to normal size.`,
        );
        return;
      }

      if (action === "close") {
        targetWindow.classList.add("is-closed");
        addRestoreButton(windowId, title);
        setStatus(`Closed ${title}.`);
      }
    });
  }

  syncRestoreDock();
}

function setupDraggableWindows(): void {
  const windows = Array.from(document.querySelectorAll<HTMLElement>(".draggable-window"));
  let highestLayer = 5;

  for (const item of windows) {
    const handle = item.querySelector<HTMLElement>(".titlebar");

    if (!handle) {
      continue;
    }

    handle.classList.add("titlebar--drag");

    handle.addEventListener("pointerdown", (event) => {
      if (event.button !== 0) {
        return;
      }

      const target = event.target as HTMLElement;
      if (target.closest(".control-button")) {
        return;
      }

      if (window.innerWidth <= 760 || item.classList.contains("is-maximized")) {
        return;
      }

      const startX = event.clientX;
      const startY = event.clientY;
      const originX = Number(item.dataset.x ?? "0");
      const originY = Number(item.dataset.y ?? "0");

      highestLayer += 1;
      item.style.zIndex = String(highestLayer);

      const onMove = (moveEvent: PointerEvent): void => {
        const nextX = originX + (moveEvent.clientX - startX);
        const nextY = originY + (moveEvent.clientY - startY);
        item.dataset.x = nextX.toFixed(1);
        item.dataset.y = nextY.toFixed(1);
        applyWindowTransform(item);
      };

      const onRelease = (): void => {
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("pointerup", onRelease);
      };

      window.addEventListener("pointermove", onMove);
      window.addEventListener("pointerup", onRelease);
    });

    handle.addEventListener("dblclick", () => {
      item.dataset.x = "0";
      item.dataset.y = "0";
      applyWindowTransform(item);
      setStatus("Window position reset.");
    });
  }
}

function applyWindowTransform(item: HTMLElement): void {
  if (item.classList.contains("is-maximized")) {
    item.style.transform = "";
    return;
  }

  const x = Number(item.dataset.x ?? "0");
  const y = Number(item.dataset.y ?? "0");
  item.style.transform = `translate(${x}px, ${y}px)`;
}

function buildStars(): void {
  const host = document.querySelector<HTMLElement>(".star-layer");

  if (!host) {
    return;
  }

  host.textContent = "";
  const fragment = document.createDocumentFragment();

  for (let index = 0; index < 90; index += 1) {
    const star = document.createElement("span");
    star.className = index % 8 === 0 ? "star star-drift" : "star";
    star.style.setProperty("--x", `${random(0, 100)}%`);
    star.style.setProperty("--y", `${random(0, 100)}%`);
    star.style.setProperty("--size", `${random(1, 2.8)}px`);
    star.style.setProperty("--delay", `${random(-6, 0)}s`);
    star.style.setProperty("--duration", `${random(2.8, 5.2)}s`);
    fragment.appendChild(star);
  }

  host.appendChild(fragment);
}

let statusTimeout = 0;

function setStatus(message: string): void {
  const statusMain = document.querySelector<HTMLElement>("[data-status-main]");

  if (!statusMain) {
    return;
  }

  statusMain.textContent = message;

  if (statusTimeout) {
    window.clearTimeout(statusTimeout);
  }

  statusTimeout = window.setTimeout(() => {
    statusMain.textContent = "Ready.";
  }, 2200);
}

function renderTitleBar(title: string, chip: string, windowId?: string): string {
  const controls = windowId
    ? `
      <div class="controls controls-interactive">
        <button type="button" class="control-button" data-control="minimize" data-window-id="${windowId}" aria-label="Minimize"></button>
        <button type="button" class="control-button" data-control="maximize" data-window-id="${windowId}" aria-label="Maximize"></button>
        <button type="button" class="control-button control-button-close" data-control="close" data-window-id="${windowId}" aria-label="Close"></button>
      </div>
    `
    : `
      <div class="controls" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </div>
    `;

  return `
    <div class="titlebar">
      <div class="titlebar-left">
        ${controls}
        <p>${title}</p>
      </div>
      <span class="title-chip">${chip}</span>
    </div>
  `;
}

function getTabLabel(tabId: TabId): string {
  const hit = tabItems.find((item) => item.id === tabId);
  return hit ? hit.label : tabId;
}

function isTabId(value: string): value is TabId {
  return tabItems.some((item) => item.id === value);
}

function random(min: number, max: number): string {
  return (Math.random() * (max - min) + min).toFixed(2);
}
