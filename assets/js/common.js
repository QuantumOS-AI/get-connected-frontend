// control side menu
let menuOpen = false;
const hamburgerMenu = document.getElementById('hamburger-menu');
const overlay = document.getElementById('overlay');
overlay.addEventListener("click",toggleMenu);
function toggleMenu() {
    menuOpen = !menuOpen;

    if (menuOpen) {
        hamburgerMenu.classList.add('open');
        overlay.classList.add('active');
        menuToggle.classList.add('active');
    } else {
        hamburgerMenu.classList.remove('open');
        overlay.classList.remove('active');
    }
}


// Set up tab handling
const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
    tab.addEventListener('click', function() {
        const tabContainer = this.closest('.tab-container');
        const tabContents = document.querySelectorAll('.tab-content');
        const targetTabId = this.getAttribute('data-tab');

        // Update active tab
        tabContainer.querySelectorAll('.tab').forEach(t => {
            t.classList.remove('active');
        });
        this.classList.add('active');

        // Show target tab content
        tabContents.forEach(content => {
            content.classList.add('hidden');
            if (content.id === targetTabId) {
                content.classList.remove('hidden');
            }
        });
    });
});


// image preview functionality
document.querySelectorAll('input[data-img-input]').forEach(input => {
    input.addEventListener('change', function () {
        const previewKey = this.getAttribute('data-img-input');
        const previewImg = document.querySelector(`img[data-img-preview="${previewKey}"]`);

        if (this.files && this.files[0] && previewImg) {
            const reader = new FileReader();
            reader.onload = function (e) {
                previewImg.src = e.target.result;
            };
            reader.readAsDataURL(this.files[0]);
        }
    });
});
