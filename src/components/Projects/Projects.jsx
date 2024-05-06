
import './projects.css'
import ProjCard from '../ProjCard/ProjCard'
const Projects = () => {
    const objectcard = [{
        images: [
            '../../../public/book1.png',
            '../../../public/book2.png',
            '../../../public/book3.png',
        ],
        title: 'B-world',
        dis: 'A website for displaying books, I created it using React Vite, it was programmed as an application to use the API',
        lan: 'React vite',
        href1: 'https://github.com/GhiadaaRashed/Books',
        href2: 'https://books-olive.vercel.app/'
    }, {
        images: [
            '../../../public/gpt1.png',
            '../../../public/gpt2.png',
            '../../../public/gpt3.png',
        ],
        title: 'Gpt3',
        dis: 'This website was programmed using React Vite, focusing on CSS properties',
        lan: 'React vite',
        href1: 'https://github.com/GhiadaaRashed/Gpt3',
        href2: 'https://gpt3-one-kappa.vercel.app/'
    }, {
        images: [
            '../../../public/travel1.png',
            '../../../public/travel2.png',
            '../../../public/travel3.png',
        ],
        title: 'Travel',
        dis: 'This site displays the best places for travel ',
        lan: 'React vite',
        href1: 'https://github.com/GhiadaaRashed/Travel',
        href2: 'https://travel-kohl-nine.vercel.app/'
    },
    {
        images: [
            '../../../public/food1.png',
            '../../../public/food2.png',
            '../../../public/food3.png',
            '../../../public/food4.png',
        ],
        title: 'Organick',
        dis: 'This site displays the best healthy foods',
        lan: 'css ,html,js',
        href1: 'https://github.com/GhiadaaRashed/food',
        href2: 'https://ghiadaarashed.github.io/food/'
    },
    {
        images: [
            '../../../public/fur1.png',
            '../../../public/fur2.png',
            '../../../public/fur3.png',
        ],
        title: 'Furniture',
        dis: 'This site displays the best furniture for sale',
        lan: 'css ,html,js',
        href1: 'https://github.com/GhiadaaRashed/Furniture',
        href2: 'https://ghiadaarashed.github.io/Furniture/'
    },
    {
        images: [
            '../../../public/rent1.png',
            '../../../public/rent2.png',
        ],
        title: 'Rent up',
        dis: 'This site displays the best houses for rent',
        lan: 'css ,html,js',
        href1: 'https://github.com/GhiadaaRashed/Rent-up',
        href2: 'https://ghiadaarashed.github.io/Rent-up/'
    },]
    return (
        <div className='projects' id='project'>
            <div className="projectdef">
                <p className='port'>PORTFOLIO</p>
                <h2>Each project is a uniqe piece of development 🧩</h2>
            </div>
            {objectcard.map(e => {
                return <ProjCard img={e.images} title={e.title} dis={e.dis} lan={e.lan} href1={e.href1} href2={e.href2}/>
            })}
        </div>
    )
}

export default Projects