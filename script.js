// Фильтры
const priceFilter = document.getElementById('price-filter');
const durationFilter = document.getElementById('duration-filter');

priceFilter.addEventListener('change', filterTours);
durationFilter.addEventListener('change', filterTours);

function filterTours() {
    const price = priceFilter.value;
    const duration = durationFilter.value;

    document.querySelectorAll('.tour-card').forEach(card => {
        const cardPrice = parseInt(card.dataset.price);
        const cardDuration = parseInt(card.dataset.duration);
        
        let priceMatch = price === 'all' || 
                         (price === 'low' && cardPrice <= 500) || 
                         (price === 'medium' && cardPrice > 500 && cardPrice <= 1000) || 
                         (price === 'high' && cardPrice > 1000);
        
        let durationMatch = duration === 'all' || 
                            (duration === 'short' && cardDuration <= 5) || 
                            (duration === 'medium' && cardDuration > 5 && cardDuration <= 10) || 
                            (duration === 'long' && cardDuration > 10);
        
        if (priceMatch && durationMatch) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Всплывающее окно бронирования
const bookBtns = document.querySelectorAll('.book-btn');
const modal = document.getElementById('booking-modal');
const closeBtn = document.querySelector('.close-btn');

bookBtns.forEach(btn => btn.addEventListener('click', () => modal.style.display = 'flex'));
closeBtn.addEventListener('click', () => modal.style.display = 'none');

document.getElementById('booking-form').addEventListener('submit', event => {
    event.preventDefault();
    alert('Заявка отправлена!');
    modal.style.display = 'none';
});
