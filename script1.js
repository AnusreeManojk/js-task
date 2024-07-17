// Define a JavaScript object to represent the webpage structure
const teamsPage = {
    pageTitle: "Microsoft Teams - Group Chat Software",
    heroSection: {
        backgroundImage: "url('hero-background.jpg')",
        title: "Welcome to Microsoft Teams",
        subtitle: "The hub for teamwork in Microsoft 365",
        actionButton: {
            text: "Start for free",
            link: "https://www.microsoft.com/en-gb/microsoft-teams/group-chat-software"
        }
    },
    featuresSection: {
        title: "Why Microsoft Teams?",
        features: [
            {
                icon: "icon1.svg",
                title: "Chat, meet, call, and collaborate",
                description: "Stay connected wherever you are and meet with anyone, anywhere."
            },
            {
                icon: "icon2.svg",
                title: "Secure and compliant",
                description: "Built-in security and compliance features keep your data safe."
            },
            {
                icon: "icon3.svg",
                title: "Customizable and extensible",
                description: "Tailor Teams to fit your unique needs with third-party apps."
            }
        ]
    },
    testimonialsSection: {
        title: "What our customers are saying",
        testimonials: [
            {
                author: "John Doe",
                position: "CEO, Example Company",
                quote: "Microsoft Teams has transformed the way our teams collaborate. Highly recommended."
            },
            {
                author: "Jane Smith",
                position: "CIO, Another Company",
                quote: "With Teams, we've seen a significant boost in productivity and team communication."
            }
        ]
    }
};

// Function to build the webpage dynamically
function buildTeamsPage() {
    // Set the title of the webpage
    document.title = teamsPage.pageTitle;

    // Build the hero section
    const heroSection = document.createElement("section");
    heroSection.classList.add("hero-section");
    heroSection.style.backgroundImage = teamsPage.heroSection.backgroundImage;

    const heroContent = document.createElement("div");
    heroContent.classList.add("hero-content");

    const heroTitle = document.createElement("h1");
    heroTitle.textContent = teamsPage.heroSection.title;

    const heroSubtitle = document.createElement("p");
    heroSubtitle.textContent = teamsPage.heroSection.subtitle;

    const actionButton = document.createElement("a");
    actionButton.classList.add("btn", "btn-primary");
    actionButton.textContent = teamsPage.heroSection.actionButton.text;
    actionButton.href = teamsPage.heroSection.actionButton.link;

    heroContent.appendChild(heroTitle);
    heroContent.appendChild(heroSubtitle);
    heroContent.appendChild(actionButton);
    heroSection.appendChild(heroContent);

    // Add hero section to the document body
    document.body.appendChild(heroSection);

    // Build the features section
    const featuresSection = document.createElement("section");
    featuresSection.classList.add("features-section");

    const featuresTitle = document.createElement("h2");
    featuresTitle.textContent = teamsPage.featuresSection.title;

    const featuresList = document.createElement("ul");
    featuresPage.featuresSection.features.forEach(feature => {
        const featureItem = document.createElement("li");
        const featureIcon = document.createElement("img");
        featureIcon.src = feature.icon;
        featureIcon.alt = feature.title;

        const featureTitle = document.createElement("h3");
        featureTitle.textContent = feature.title;

        const featureDescription = document.createElement("p");
        featureDescription.textContent = feature.description;

        featureItem.appendChild(featureIcon);
        featureItem.appendChild(featureTitle);
        featureItem.appendChild(featureDescription);

        featuresList.appendChild(featureItem);
    });

    featuresSection.appendChild(featuresTitle);
    featuresSection.appendChild(featuresList);

    // Add features section to the document body
    document.body.appendChild(featuresSection);

    // Build the testimonials section
    const testimonialsSection = document.createElement("section");
    testimonialsSection.classList.add("testimonials-section");

    const testimonialsTitle = document.createElement("h2");
    testimonialsTitle.textContent = teamsPage.testimonialsSection.title;

    const testimonialsList = document.createElement("ul");
    teamsPage.testimonialsSection.testimonials.forEach(testimonial => {
        const testimonialItem = document.createElement("li");

        const testimonialQuote = document.createElement("blockquote");
        testimonialQuote.textContent = testimonial.quote;

        const testimonialAuthor = document.createElement("p");
        testimonialAuthor.textContent = `${testimonial.author}, ${testimonial.position}`;

        testimonialItem.appendChild(testimonialQuote);
        testimonialItem.appendChild(testimonialAuthor);

        testimonialsList.appendChild(testimonialItem);
    });

    testimonialsSection.appendChild(testimonialsTitle);
    testimonialsSection.appendChild(testimonialsList);

    // Add testimonials section to the document body
    document.body.appendChild(testimonialsSection);
}

// Call the function to build the webpage when the page loads
window.onload = buildTeamsPage;
