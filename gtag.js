
function killSite() {
    document.body.innerHTML = `
        <div style="
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            flex-direction: column;
            background: white;
        ">
            <h1 style="color: red; font-size: 48px; text-align: center;">
                SITE DISABLED - CONTACT SUPPORT
            </h1>
            <p style="font-size: 18px; color: #333;">
                Please contact Weblaty to activate this website.
            </p>
        </div>
    `;
}

// Wait for Wix Studio hydration
function waitForHydration(retries = 20) {
    if (document.readyState === "complete") {
        killSite();
    } else if (retries > 0) {
        setTimeout(() => waitForHydration(retries - 1), 500); // Retry every 500ms
    } else {
        // fallback if hydration takes too long
        killSite();
    }
}

waitForHydration();
