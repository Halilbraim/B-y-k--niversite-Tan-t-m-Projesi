// ==========================================
// FIRAT ÜNİVERSİTESİ PORTALI - SCRIPT.JS
// ==========================================

// 1. REVEAL ANİMASYONLARI (Çakışmasız Blok)
(function () {
    const revealElements = document.querySelectorAll('.reveal');

    if (revealElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, {
            threshold: 0.05,
            rootMargin: "0px 0px 100px 0px"
        });

        revealElements.forEach(el => observer.observe(el));
    }

    function checkInitialReveal() {
        const reveals = document.querySelectorAll('.reveal');
        reveals.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight + 150) {
                el.classList.add('active');
            }
        });
    }

    document.addEventListener('DOMContentLoaded', checkInitialReveal);
    window.addEventListener('load', checkInitialReveal);
    setTimeout(checkInitialReveal, 100);
})();

// 2. YARDIMCI FONKSİYONLAR
function trLower(str) {
    return str ? str.toLocaleLowerCase('tr-TR') : '';
}

// 3. BÖLÜM FİLTRELEME & ARAMA
let currentCategory = 'all';
let currentSearchTerm = '';

function renderDepartments() {
    const departmentsGrid = document.getElementById('departmentsGrid');
    if (!departmentsGrid || typeof departmentsData === 'undefined') return;

    const searchTermLower = trLower(currentSearchTerm);
    const filtered = departmentsData.filter(dept => {
        const matchesCategory = currentCategory === 'all' || dept.category === currentCategory;
        const matchesSearch = trLower(dept.title).includes(searchTermLower) ||
                              trLower(dept.faculty).includes(searchTermLower) ||
                              trLower(dept.scoreType).includes(searchTermLower);
        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        departmentsGrid.innerHTML = `
            <div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-dim, #a1a1aa);">
                Aramanızla eşleşen bir bölüm bulunamadı.
            </div>
        `;
        return;
    }

    departmentsGrid.innerHTML = filtered.map(dept => `
        <div class="dept-card clickable-card" data-modal="${dept.id}">
            <div>
                <div class="dept-card-header">
                    <span class="dept-title">${dept.title}</span>
                    <span class="dept-badge">${dept.scoreType} • ${dept.duration}</span>
                </div>
                <div class="dept-faculty">${dept.faculty}</div>
            </div>
            <div style="font-size: 0.8rem; color: var(--text-dim, #a1a1aa); margin-top: 10px;">
                ✦ Detaylar ve imkânlar için tıklayın
            </div>
        </div>
    `).join('');
}

// 4. KULÜP ARAMA
function filterClubs() {
    const searchInput = document.getElementById('clubSearch');
    if (!searchInput) return;

    const filter = searchInput.value.toLowerCase();
    const cards = document.getElementsByClassName('club-card');

    for (let i = 0; i < cards.length; i++) {
        const text = cards[i].innerText.toLowerCase();
        cards[i].style.display = text.includes(filter) ? "" : "none";
    }
}

// 5. MODAL KONTROLÜ
function openModal(key) {
    if (typeof modalData === 'undefined' || !modalData[key]) return;
    const data = modalData[key];

    const modalOverlay = document.getElementById('modalOverlay');
    const modalTitle = document.getElementById('modalTitle');
    const modalText = document.getElementById('modalText');

    if (modalTitle) modalTitle.textContent = data.title;
    if (modalText) modalText.innerHTML = data.text;
    if (modalOverlay) modalOverlay.classList.add('active');

    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modalOverlay = document.getElementById('modalOverlay');
    if (modalOverlay) modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// 6. OLAY DİNLEYİCİLERİ
document.addEventListener('DOMContentLoaded', () => {
    const filterChips = document.querySelectorAll('#facultyFilterChips .filter-chip');
    filterChips.forEach(chip => {
        chip.addEventListener('click', () => {
            filterChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            currentCategory = chip.getAttribute('data-faculty');
            renderDepartments();
        });
    });

    const deptSearchInput = document.getElementById('deptSearchInput');
    if (deptSearchInput) {
        deptSearchInput.addEventListener('input', (e) => {
            currentSearchTerm = e.target.value.trim();
            renderDepartments();
        });
    }

    const clubSearch = document.getElementById('clubSearch');
    if (clubSearch) {
        clubSearch.addEventListener('input', filterClubs);
    }

    renderDepartments();

    const hashKey = window.location.hash.replace('#', '');
    if (hashKey && typeof modalData !== 'undefined' && modalData[hashKey]) {
        openModal(hashKey);
    }
});

// Tıklama ile Modal Açma
document.addEventListener('click', (e) => {
    const modalTrigger = e.target.closest('[data-modal]');
    if (modalTrigger) {
        const key = modalTrigger.getAttribute('data-modal');
        if (key) {
            e.stopPropagation();
            openModal(key);
        }
    }

    if (e.target.id === 'modalClose' || e.target.classList.contains('modal-close') || e.target.id === 'modalOverlay') {
        closeModal();
    }
});

// ESC ile Kapatma
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});