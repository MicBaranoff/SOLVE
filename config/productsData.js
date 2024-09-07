import {FILTER_TYPES} from "~/config/catalogFiltersData";

export default [
    {
        id: 'modern-chair',
        type: FILTER_TYPES.CHAIR,
        name: 'Modern Chair',
        price: 249.00,
        description: 'Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Netus et malesuada fames ac turpis egestas integer eget.',
        image: '/images/products/pr1.jpg',
        featured: true,
        is_new: true,
        descriptionFull: `
            <p>Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Netus et malesuada fames ac turpis egestas integer eget. A diam maecenas sed enim ut sem viverra aliquet eget. Vel fringilla est ullamcorper eget nulla facilisi etiam. Velit egestas dui id ornare arcu odio ut. Felis donec et odio pellentesque diam volutpat commodo sed egestas. Auctor eu augue ut lectus arcu bibendum at varius. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices.</p>
    
            <ul>
                <li>Proin fermentum leo vel orci porta non pulvinar</li>
                <li>Diam phasellus vestibulum </li>
                <li>Quisque egestas diam in arcu cursus</li>
            </ul>
        `,
    },
    {
        id: 'elegant-lamp',
        type: FILTER_TYPES.LAMP,
        name: 'Elegant Lamp',
        price: 129.00,
        description: 'Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Netus et malesuada fames ac turpis egestas integer eget.',
        image: '/images/products/pr2.jpg',
        featured: true,
    },
    {
        id: 'black-chair-s',
        type: FILTER_TYPES.CHAIR,
        name: 'Black Chair',
        price: 199.00,
        description: 'Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Netus et malesuada fames ac turpis egestas integer eget.',
        image: '/images/products/pr3.jpg',
    },
    {
        id: 'lisbon-sofa',
        type: FILTER_TYPES.SOFA,
        name: 'Lisbon Sofa',
        price: 1699.00,
        description: 'Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Netus et malesuada fames ac turpis egestas integer eget.',
        image: '/images/products/pr4.jpg',
        featured: true,
    },
    {
        id: 'retro-chair',
        type: FILTER_TYPES.CHAIR,
        name: 'Retro Chair',
        price: 399.00,
        description: 'Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Netus et malesuada fames ac turpis egestas integer eget.',
        image: '/images/products/pr5.jpg',
    },
    {
        id: 'black-chair-m',
        type: FILTER_TYPES.CHAIR,
        name: 'Black Chair',
        price: 199.00,
        description: 'Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Netus et malesuada fames ac turpis egestas integer eget.',
        image: '/images/products/pr6.jpg',
    }
]