const API_BASE_URL = 'http://localhost:3000';

const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const loading = document.getElementById('loading');
const error = document.getElementById('error');
const results = document.getElementById('results');

// Função para buscar personagens
async function searchCharacters(name) {
    try {
        showLoading();
        hideError();

        const response = await fetch(`${API_BASE_URL}/characters?name=${encodeURIComponent(name)}`);
        
        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }

        const characters = await response.json();
        displayCharacters(characters);

    } catch (err) {
        console.error('Erro ao buscar personagens:', err);
        showError('Erro ao conectar com a API. Verifique se o servidor está rodando em http://localhost:3000');
    } finally {
        hideLoading();
    }
}

// Função para exibir personagens
function displayCharacters(characters) {
    if (!characters || characters.length === 0) {
        results.innerHTML = `
            <div class="no-results">
                <p>Nenhum personagem encontrado. Tente outro nome!</p>
            </div>
        `;
        return;
    }

    const charactersHTML = characters.map(character => {
        const imageUrl = `${character.thumbnail.path}.${character.thumbnail.extension}`;
        const description = character.description || 'Descrição não disponível';
        
        return `
            <article class="character-card">
                <img 
                    src="${imageUrl}" 
                    alt="${character.name}"
                    class="character-image"
                    onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDMwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjRjBGMEYwIi8+CjxwYXRoIGQ9Ik0xNTAgMTAwQzE2NC4zIDEwMCAxNzYgMTExLjcgMTc2IDEyNkMxNzYgMTQwLjMgMTY0LjMgMTUyIDE1MiAxNTJIMTQ4QzEzMy43IDE1MiAxMjIgMTQwLjMgMTIyIDEyNkMxMjIgMTExLjcgMTMzLjcgMTAwIDE0OCAxMDBIMTUwWiIgZmlsbD0iI0NDQyIvPgo8cGF0aCBkPSJNMTgwIDEzNkMxODAgMTQ3LjA0NiAxNzEuMDQ2IDE1NiAxNjAgMTU2SDEyMEMxMDguOTU0IDE1NiAxMDAgMTQ3LjA0NiAxMDAgMTM2VjEyNkMxMDAgMTE0Ljk1NCAxMDguOTU0IDEwNiAxMjAgMTA2SDE2MEMxNzEuMDQ2IDEwNiAxODAgMTE0Ljk1NCAxODAgMTI2VjEzNloiIGZpbGw9IiNEREQiLz4KPHR4dCB4PSIxNTAiIHk9IjE4NSIgZmlsbD0iIzk5OSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5JbWFnZW08L3R4dD4KPC9zdmc+'"
                >
                <div class="character-info">
                    <h2 class="character-name">${character.name}</h2>
                    <p class="character-description ${!character.description ? 'no-description' : ''}">
                        ${description}
                    </p>
                </div>
            </article>
        `;
    }).join('');

    results.innerHTML = `
        <div class="characters-grid">
            ${charactersHTML}
        </div>
    `;
}

// Funções auxiliares
function showLoading() {
    loading.style.display = 'block';
    results.innerHTML = '';
}

function hideLoading() {
    loading.style.display = 'none';
}

function showError(message) {
    error.textContent = message;
    error.style.display = 'block';
    results.innerHTML = '';
}

function hideError() {
    error.style.display = 'none';
}

// Event listeners
searchBtn.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
        searchCharacters(searchTerm);
    }
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            searchCharacters(searchTerm);
        }
    }
});

// Foco inicial no input
searchInput.focus();