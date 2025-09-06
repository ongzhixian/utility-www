class SiteNavigationBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
<style>
    :host {}
    h1 {
        font-size: 4.0rem;
        font-weight: 300;
    }
    nav {
        background-color: #442211;
        display: flex;
        justify-items: center;
        justify-content: center;
        gap: 1em;
        padding:1em;
        margin-bottom:1em;
    }
    nav a {
        padding: 0.8rem 1.6rem;
        border-radius: 1em;
        text-decoration: none;
        color: #00ffff;
    }
    nav a:hover {
        color: #fff275;
    }
</style>
<nav>
    <div><a href="/">Home</a></div>
    <div><a href="/about.html">About</a></div>
    <div><a href="/docs/index.html">Documentation</a></div>
    <div><a href="/help.html">Help</a></div>
</nav>`;
    }
}

customElements.define('site-navigation-bar', SiteNavigationBar);
