// Search and theme toggle functionality
(function() {
    'use strict';
    
    // Theme toggle
    function initTheme() {
        const saved = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (saved === 'dark' || (!saved && prefersDark)) {
            document.documentElement.classList.add('dark');
        } else if (saved === 'light') {
            document.documentElement.classList.add('light');
        }
        
        // Wire up toggle button
        const toggle = document.getElementById('theme-toggle');
        if (toggle) {
            toggle.addEventListener('click', () => {
                const isDark = document.documentElement.classList.contains('dark');
                document.documentElement.classList.toggle('dark');
                document.documentElement.classList.toggle('light');
                localStorage.setItem('theme', isDark ? 'light' : 'dark');
                toggle.textContent = isDark ? '☀️' : '🌙';
            });
        }
    }
    
    // Search
    function initSearch() {
        const searchInput = document.getElementById('search-input');
        const searchResults = document.getElementById('search-results');
        if (!searchInput) return;
        
        // Use global data if loaded, else fetch
        function getData() {
            if (window.searchData) return Promise.resolve(window.searchData);
            return fetch('/assets/search-index.json').then(r => r.json());
        }
        
        function search(query) {
            if (!query || query.length < 2) {
                searchResults.innerHTML = '';
                searchResults.style.display = 'none';
                return;
            }
            
            getData().then(data => {
                const q = query.toLowerCase();
                const results = [];
                
                for (const item of data) {
                    const title = (item.title || '').toLowerCase();
                    const content = (item.content || '').toLowerCase();
                    if (title.includes(q) || content.includes(q)) {
                        const idx = content.indexOf(q);
                        let snippet = '';
                        if (idx >= 0) {
                            const start = Math.max(0, idx - 40);
                            const end = Math.min(content.length, idx + 160);
                            snippet = '...' + content.substring(start, end).replace(/\\n/g, ' ') + '...';
                        }
                        results.push({
                            title: item.title,
                            path: item.path,
                            snippet: snippet || content.substring(0, 150) + '...'
                        });
                    }
                }
                
                if (results.length === 0) {
                    searchResults.innerHTML = '<div class="search-result-item">No se encontraron resultados.</div>';
                } else {
                    searchResults.innerHTML = results.slice(0, 15).map(r => `
                        <div class="search-result-item" onclick="window.location.href='${r.path}'">
                            <div class="title">${escapeHtml(r.title)}</div>
                            <div class="breadcrumb">${escapeHtml(r.path)}</div>
                            <div class="snippet">${escapeHtml(r.snippet)}</div>
                        </div>
                    `).join('');
                }
                searchResults.style.display = 'block';
            });
        }
        
        function escapeHtml(s) {
            return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        }
        
        searchInput.addEventListener('input', e => search(e.target.value));
        
        document.addEventListener('click', e => {
            if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
                searchResults.style.display = 'none';
            }
        });
        
        // Keyboard shortcut
        document.addEventListener('keydown', e => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                searchInput.focus();
            }
            if (e.key === 'Escape') {
                searchResults.style.display = 'none';
                searchInput.blur();
            }
        });
    }
    
    // Init
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            initTheme();
            initSearch();
        });
    } else {
        initTheme();
        initSearch();
    }
})();
