// Search functionality
(function() {
    'use strict';
    
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    let searchData = [];
    
    if (!searchInput) return;
    
    // Load search index
    fetch('/assets/search-index.json')
        .then(r => r.json())
        .then(data => { searchData = data; })
        .catch(err => console.error('Error loading search index:', err));
    
    // Search function
    function search(query) {
        if (!query || query.length < 2) {
            searchResults.innerHTML = '';
            searchResults.style.display = 'none';
            return;
        }
        
        const q = query.toLowerCase();
        const results = [];
        
        for (const item of searchData) {
            const title = (item.title || '').toLowerCase();
            const content = (item.content || '').toLowerCase();
            const path = (item.path || '').toLowerCase();
            
            if (title.includes(q) || content.includes(q) || path.includes(q)) {
                const idx = content.indexOf(q);
                let snippet = '';
                if (idx >= 0) {
                    const start = Math.max(0, idx - 50);
                    const end = Math.min(content.length, idx + 150);
                    snippet = '...' + content.substring(start, end).replace(/\n/g, ' ') + '...';
                }
                results.push({
                    title: item.title,
                    path: item.path,
                    snippet: snippet || item.content.substring(0, 150) + '...'
                });
            }
        }
        
        if (results.length === 0) {
            searchResults.innerHTML = '<div class="search-result-item">No results found.</div>';
        } else {
            searchResults.innerHTML = results.slice(0, 20).map(r => `
                <div class="search-result-item" onclick="window.location.href='${r.path}'">
                    <div class="title">${r.title}</div>
                    <div class="breadcrumb">${r.path}</div>
                    <div class="snippet">${r.snippet}</div>
                </div>
            `).join('');
        }
        searchResults.style.display = 'block';
    }
    
    searchInput.addEventListener('input', e => search(e.target.value));
    
    // Close results when clicking outside
    document.addEventListener('click', e => {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.style.display = 'none';
        }
    });
})();
