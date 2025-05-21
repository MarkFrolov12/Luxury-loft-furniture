document.addEventListener('DOMContentLoaded', function() {
    const filterDropdown = document.getElementById('category-filter');
    const cards = document.querySelectorAll('.card');
    
    filterDropdown.addEventListener('change', function() {
        const selectedCategory = this.value;
        
        cards.forEach(card => {
            if (selectedCategory === 'all' || card.dataset.category === selectedCategory) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});