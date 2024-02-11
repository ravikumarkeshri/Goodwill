import { instagram, facebook, twitter, linkedin, people01, people02, people03 } from '../assets';
import cctv from '../assets/cctv.jpg'
export const navLinks = [
    {
        id: "home",
        title: "Home",
        path: '/'
    },
    {
        id: "batch",
        title: "Batch",
        path: '/batch'
    },
    {
        id: "about",
        title: "About",
        path: '/about'
    },
    {
        id: "contact",
        title: "Contact Us",
        path: '/contact'
    },
];
export const feedback = [
    {
        id: "feedback-1",
        content:
            "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
        name: "Herman Jensen",
        title: "Founder & Leader",
        img: people01,
    },
    {
        id: "feedback-2",
        content:
            "Money makes your life easier. If you're lucky to have it, you're lucky.",
        name: "Steve Mark",
        title: "Founder & Leader",
        img: people02,
    },
    {
        id: "feedback-3",
        content:
            "It is usually people in the money business, finance, and international trade that are really rich.",
        name: "Kenn Gallagher",
        title: "Founder & Leader",
        img: people03,
    },
];
export const socialMedia = [
    {
        id: "social-media-1",
        icon: instagram,
        link: "https://www.instagram.com/",
    },
    {
        id: "social-media-2",
        icon: facebook,
        link: "https://www.facebook.com/",
    },
    {
        id: "social-media-3",
        icon: twitter,
        link: "https://www.twitter.com/",
    },
    {
        id: "social-media-4",
        icon: linkedin,
        link: "https://www.linkedin.com/",
    },
];
export const footerLinks = [
    {
        title: "Useful Links",
        links: [
            {
                name: "Home",
                path: "/",
            },
            {
                name: "About Us",
                path: "/about",
            },
            {
                name: "Contact Us",
                path: "/contact",
            },
            {
                name: "Ongoing Batches",
                path: '/batch'
            },
            {
                name: "Our Selections",
                path: '/selections'
            },
        ],
    },
    {
        title: "Current affairs ",
        links: [
            {
                name: "Current Affairs January 2024",
                link: "https://www.hoobank.com/help-center/",
                path: "/resume.pdf",
                download: true,
                target: "_blank"

            },
            {
                name: "Current Affairs December 2023",
                link: "https://www.hoobank.com/partners/",
            },
            {
                name: "Current Affairs November 2023",
                link: "https://www.hoobank.com/suggestions/",
            },
            {
                name: "Current Affairs October 2023",
                link: "https://www.hoobank.com/blog/",
            },
            {
                name: "Current Affairs September 2023",
                link: "https://www.hoobank.com/newsletters/",
            },
        ],
    },
    {
        title: "Important",
        links: [
            {
                name: "Privacy Policy",
                link: "https://www.hoobank.com/our-partner/",
            },
            {
                name: "Rules of Club",
                link: "https://www.hoobank.com/become-a-partner/",
            },
        ],
    },
];
export const homeCardContents = [
    {
        id: "card1",
        image: cctv,
        title: "Experienced Mentor",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto accusantium, laudantium dolores voluptas unde error deleniti odio labore ab totam distinctio ullam impedit, consequuntur expedita aut ut quisquam, autem ipsam?",
    },
    {
        id: "card2",
        image: cctv,
        title: "Competitive Classes",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto accusantium, laudantium dolores voluptas unde error deleniti odio labore ab totam distinctio ullam impedit, consequuntur expedita aut ut quisquam, autem ipsam?",
    },
    {
        id: "card3",
        image: cctv,
        title: "CCTV Servilance",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto accusantium, laudantium dolores voluptas unde error deleniti odio labore ab totam distinctio ullam impedit, consequuntur expedita aut ut quisquam, autem ipsam?",
    },
    {
        id: "card4",
        image: cctv,
        title: "Daily Sets",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto accusantium, laudantium dolores voluptas unde error deleniti odio labore ab totam distinctio ullam impedit, consequuntur expedita aut ut quisquam, autem ipsam?",
    },
    {
        id: "card5",
        image: cctv,
        title: "Group Discussion",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto accusantium, laudantium dolores voluptas unde error deleniti odio labore ab totam distinctio ullam impedit, consequuntur expedita aut ut quisquam, autem ipsam?",
    },
    {
        id: "card6",
        image: cctv,
        title: "Decipline",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto accusantium, laudantium dolores voluptas unde error deleniti odio labore ab totam distinctio ullam impedit, consequuntur expedita aut ut quisquam, autem ipsam?",
    },
    {
        id: "card7",
        image: cctv,
        title: "HandWriten CurrenAffairs",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto accusantium, laudantium dolores voluptas unde error deleniti odio labore ab totam distinctio ullam impedit, consequuntur expedita aut ut quisquam, autem ipsam?",
    },


]
export const batches = [
    {
        batchName: "Bihar Daroga",
        importantBooks: [
            {
                bookname1: "Lucent",
                bookname2: "Lucent",
                bookname3: "Lucent",
                bookname4: "Lucent",
                bookname5: "Lucent",
                bookname6: "Lucent",
            },

        ],
        batchInfo: [
            {
                classtime: "7:00 - 9:00",
                fees: "Rs. 300 ",
                Status: "Monday to Saturday"
            }
        ]
    },
    {
        batchName: "Railway",
        importantBooks: [
            {
                bookname1: "Lucent1",
                bookname2: "Lucent2",
                bookname3: "Lucent3",
                bookname4: "Lucent4",
                bookname5: "Lucent5",
                bookname6: "Lucent6",
            },

        ],
        batchInfo: [
            {
                classtime: "7:00 - 9:00",
                fees: "Rs. 400 ",
                Status: "Monday to Saturday"
            }
        ]
    }
]
