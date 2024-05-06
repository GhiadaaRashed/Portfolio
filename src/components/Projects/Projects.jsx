
import './projects.css'
import ProjCard from '../ProjCard/ProjCard'
import {book1,book2,book3,food1,food2,food3,food4,fur1,fur2,fur3,gpt1,gpt2,gpt3,rent1,rent2,travel1,travel2,travel3,} from './import'
const Projects = () => {
    const objectcard = [{
        images: [
            book1,book2,book3,
        ],
        title: 'B-world',
        dis: 'A website for displaying books, I created it using React Vite, it was programmed as an application to use the API',
        lan: 'React vite',
        href1: 'https://github.com/GhiadaaRashed/Books',
        href2: 'https://books-olive.vercel.app/'
    }, {
        images: [
            gpt1,gpt2,gpt3,
        ],
        title: 'Gpt3',
        dis: 'This website was programmed using React Vite, focusing on CSS properties',
        lan: 'React vite',
        href1: 'https://github.com/GhiadaaRashed/Gpt3',
        href2: 'https://gpt3-one-kappa.vercel.app/'
    }, {
        images: [
            travel1,travel2,travel3,
        ],
        title: 'Travel',
        dis: 'This site displays the best places for travel ',
        lan: 'React vite',
        href1: 'https://github.com/GhiadaaRashed/Travel',
        href2: 'https://travel-kohl-nine.vercel.app/'
    },
    {
        images: [
            food1,food2,food3,food4,
        ],
        title: 'Organick',
        dis: 'This site displays the best healthy foods',
        lan: 'css ,html,js',
        href1: 'https://github.com/GhiadaaRashed/food',
        href2: 'https://ghiadaarashed.github.io/food/'
    },
    {
        images: [
            fur1,fur2,fur3,
        ],
        title: 'Furniture',
        dis: 'This site displays the best furniture for sale',
        lan: 'css ,html,js',
        href1: 'https://github.com/GhiadaaRashed/Furniture',
        href2: 'https://ghiadaarashed.github.io/Furniture/'
    },
    {
        images: [
            rent1,rent2,
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