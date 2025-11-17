function showProject(title, description) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalDesc').textContent = description;
    document.getElementById('projectModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('projectModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Add hover effects to contact items
const contactItems = document.querySelectorAll('.contact-item');
contactItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Create dynamic cherry blossoms
function createBlossoms() {
    const container = document.querySelector('.container');
    for (let i = 0; i < 20; i++) {
        const blossom = document.createElement('div');
        blossom.className = 'cherry-blossom';
        blossom.innerHTML = '🌸';
        blossom.style.left = Math.random() * 100 + 'vw';
        blossom.style.animationDelay = Math.random() * 5 + 's';
        blossom.style.fontSize = (Math.random() * 20 + 10) + 'px';
        document.body.appendChild(blossom);
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    createBlossoms();
    
    // Add click effects to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'translateY(-15px)';
            setTimeout(() => {
                this.style.transform = 'translateY(-10px)';
            }, 200);
        });
    });
});