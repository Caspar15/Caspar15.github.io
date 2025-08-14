document.addEventListener('DOMContentLoaded', () => {
    const allLinks = document.querySelectorAll('a[href]');

    allLinks.forEach(link => {
        // Filter out links that we don't want to apply the effect to
        const isEligible = 
            link.hostname === window.location.hostname &&
            link.href.indexOf('#') === -1 &&
            link.target !== '_blank' &&
            !['mailto', 'tel'].some(p => link.protocol.includes(p));

        if (isEligible) {
            link.addEventListener('click', (e) => {
                // Don't prevent default navigation, just add the class
                document.body.classList.add('is-leaving');
                // A small delay can sometimes help the animation register before navigation
                // but we can't delay the navigation itself.
            });
        }
    });
});