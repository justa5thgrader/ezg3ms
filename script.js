function openTab(event, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tab-content" and hide them
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tab-link" and remove the class "active"
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
}

document.addEventListener("DOMContentLoaded", function() {
    // Game opening functionality
    var gameCards = document.querySelectorAll('.game-card');
    gameCards.forEach(function(card) {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            var url = this.getAttribute('data-url');
            var title = this.getAttribute('data-title') || 'Game';
            if (url) {
                window.open(url, '_blank', 'noopener,noreferrer');
            }
        });
    });
});
