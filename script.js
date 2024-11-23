document.addEventListener('DOMContentLoaded', function() {
    // Add click event listeners to all fact boxes
    const facts = document.querySelectorAll('.fact');
    
    facts.forEach(fact => {
        fact.addEventListener('click', function() {
            // Toggle a 'selected' class for visual feedback
            this.classList.toggle('selected');
            
            // Animate the fact box
            this.style.transform = 'scale(1.02)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });

    // Add smooth scroll behavior to the page
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
