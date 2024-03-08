const projects = [
    {
        name: "Create-a-Myth",
        desc: "Simple board-game-like game website that includes tools for users to create their own cards.",
        details: "the final project of my 2023 web development class, it was relatively ambitious for the 12 day timeframe, but given my prior experience in game development i felt confident. While i wasn't able to polish the game side quite as much as i wanted, I am nevertheless proud of the result. The possibility for players to make their own cards and upload them to the server was quite the achievement. In the code side, there are improvements to be made still - using only one file for the context and reducer ended up quite messy, and i've lost a lot of efficency by making my own structured clone code, unaware that it was now part of Javascript's regular documentation. i will work towards cleaning this part, and have been using it in more recent projects",
        tech: "react html5 mongoDB express",
        src: "placeholder.png",
        gif: "placeholder.png",
    },  
    {
        name: "Maker Decider",
        desc: "Idea generator for creatives. randomly makes a new idea every day, with a global shared version to everyone and a personal version that can include user-added projects. ",
        tech: "react html5",
        details: "an old idea i've wanted to remake in a way that's more accessible, making it on the web seemed like the best idea. Adding a shared global version without going so far as making it server-involved meant i needed to create a random number generator that goes off the current date.",
        src: "makergenerator.png",
        gif: "placeholder.png",
    },
    {
        name: "Penguin SHMUP",
        desc: "Simple video game engine using javascript DOM manipulation. Spritesheet animations, hitbox control, scrolling backgrounds and advanced keyboard control events.",
        src: "penguin.png",
        gif: "penguin.gif",
    },
    {
        name: "Frog Race",
        desc: "Simple videogame about watching AI-controlled frogs race. A bit too close to a gambling game, but each different racing 'frog' has unique scripts that can affect the rest of the race. ",
        src: "frograce.png",
        gif: "frograce.gif",
    }
]

export {projects}