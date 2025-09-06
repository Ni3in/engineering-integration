export let menus = [
    {
        id: "home",
        name: "Home",
        src: "/home",
        children: []
    },
    {
        id: "about",
        name: "About",
        src: "/about",
        children: []
    },
    {
        id: "service",
        name: "Sevice",
        src: "/service",
        children: [
            {
                id: "web-dev",
                name: "Web Development",
                src: "/web-dev",
                children: []
            }
        ]
    },
    {
        id: "blog",
        name: "Blog",
        src: "/blog",
        children: [
            {
                id: "web-dev",
                name: "Web Development",
                src: "/web-dev",
                children: []
            },
            {
                id: "web-dev",
                name: "Web Development",
                src: "/web-dev",
                children: []
            },
            {
                id: "web-dev",
                name: "Web Development",
                src: "/web-dev",
                children: []
            },
        ],
    },
    {
        id: "contact",
        name: "Contact",
        src: "/contact",
        children: []
    },
]