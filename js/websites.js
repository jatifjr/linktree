const website = [
    {
        Name: "GitHub",
        Link: "https://github.com/jatifjr",
    },
    {
        Name: "Instagram",
        Link: "https://instagram.com/jatifjr",
    },
    {
        Name: "Twitter",
        Link: "https://Twitter.com/jatifjr",
    },
    {
        Name: "Email",
        Link: "mailto:fajarku26@gmail.com",
    },
    {
        Name: "LinkedIn",
        Link: "https://www.linkedin.com/in/ahmad-fajar-kusumajati-7ab336230",
    },
    {
        Name: "Spotify",
        Link: "https://open.spotify.com/user/95rh4qdbwu8wb4eb9tjvhrbux?si=9dfb9c7ac7a94d42",
    },
];

for (let i = 0; i < website.length; i++) {
    document.getElementById("root").innerHTML += '<div class="cardContainer"><div class="linkContainer"><a id="webLink" href="' + website[i].Link + '" target="_blank" rel="noopener">' + website[i].Name + "</a></div></div>";
}
