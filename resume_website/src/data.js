import Pop from './Images/Pop.png'
import Block from './Images/BlockBuster.png'
import Bike from './Images/Bike.png'

let resume = {
    name: 'Ed Gonzalez Hernandez', 
    location: 'Houston, TX',
    phoneNumber: '832-235-3042',
    socialLinks: [
        {
            image: 'https://1000logos.net/wp-content/uploads/2018/05/Gmail-logo.png',
            link: 'edgonzalezhernandez9@gmail.com'
        },
        {
            image: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
            link: 'https://github.com/edgonzalez-9', 
        },
        {
            image: 'https://miro.medium.com/max/3416/1*5NKHQDjC1cUC441HTejxuQ.png',
            link: 'https://edgonzalezhernandez9.medium.com'
        }
    ],
    description: `This website is the first project I tackled after graduating from Flatiron. It's a bit rough and unpolished but at the moment as a programmer so am I. My goal is to continue to improve and revist this project to showcase my personal growth. Before switching careers I worked in retail management, human resources, and sales. Solving issues in a way that satisfied both the customer and my boss is a specialty of mine, one that I hope to take full advantge of as a developer.`,
    languages: [
        {name: 'Ruby',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/1024px-Ruby_logo.svg.png'
        },
        {name: 'Javascript',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/480px-JavaScript-logo.png'
        },
        {name: 'React',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png'
        }
    ],
    projects:[
        {
            name: `Ed's Pop Emporium`,
            github: '',
            demo: 'https://www.youtube.com/watch?v=H8EOC-bc4HI&t=18s',
            image: Pop,
            description: 'An app that allows users to create a digital record of their Funko Pop collection',
            bulletPoints: [
                'Used a Rails backend to store records about Users, Pops, and Pop collections',
                'Created a User model with attributes that could be edited after creation.',
                'Built a seed file to provide information about Pops.',
                'Designed and implemented a frontend for users to browse and interact with Pops.'
            ]
        },
        {
            name: `Block Buster`,
            github: '',
            demo: 'https://www.youtube.com/watch?v=4WCFRFVnhj4&t=91s',
            image: Block,
            description: `One page Tetris-clone that stores player's high scores`,
            bulletPoints: [
                'Built a tetris app with access to all six tetrominoes.',
                'Created separete sections to showcase upcoming blocks.',
                'Implemented a block storage device to let players see upcoming blocks.',
                'Set up a backend to save player scores.'
            ]
        },
        {
            name: `Bike Houston`,
            github: '',
            demo: 'https://www.youtube.com/watch?v=FUxliPJyewc&t=230s',
            image: Bike,
            description: 'Social app for bike riders to connect and meet up in Houston.',
            bulletPoints: [
                'Used Rails to create a relationship between bike riders and trails.',
                'Created a comment and like options for users to interact with trails.',
                'Used CSS to provide styling for the app.'
            ]
        }
    ],
    workExperience: [
        {
            employer: 'Gamestop',
            position: 'Store Manager',
            bulletPoints: [
                'Drove sales through positive customer interactions and focused on key operational areas.',
                'Capable of managing the sales floor during holidays and console launches.'
            ]

        },
        {
            employer: 'AMC Theaters',
            position: 'Manager',
            bulletPoints: [
                'Worked across multiple departments such as human resources, supply management, and customer service.',
                'Obtained extensive experience with acquiring and training talent.'
            ]

        }
    ],
    education: [
        {
            school: 'Flatiron School',
            focus: 'Full Stack Web Development, Ruby on Rails and JavaScript programming.'

        },
        {
            school: 'University of Houston',
            focus: 'Courses in Computer Engineering'

        }
    ]
}

export default resume 