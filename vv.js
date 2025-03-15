// Function to add a new announcement (For Course Rep)
function postAnnouncement() {
    const announcement = prompt("Enter your announcement:");
    if (announcement) {
        const announcementsDiv = document.getElementById("announcements");
        const newAnnouncement = document.createElement("p");
        newAnnouncement.textContent = announcement;
        announcementsDiv.appendChild(newAnnouncement);
    }
}

// Function to share a new idea (For Students)
function shareIdea() {
    const idea = prompt("What is your idea?");
    if (idea) {
        const ideaList = document.getElementById("idea-list");
        const newIdea = document.createElement("div");
        newIdea.textContent = idea;
        ideaList.appendChild(newIdea);
    }
}
