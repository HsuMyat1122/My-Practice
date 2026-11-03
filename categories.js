const categories = [
  {
    id: 1,
    name: 'Electronics',
    description: 'Devices and gadgets for everyday use.',
    image: 'https://www.pngall.com/wp-content/uploads/1/Electronic.png',
  },
  {
    id: 2,
    name: 'Books',
    description: 'A wide range of books from various genres.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Lgcymcdcge4GuwA5S3-jV2XbS_Kiy2LBWoMEVIb4dA&s=10',
  },
  {
    id: 3,
    name: 'Clothing',
    description: 'Fashionable clothing for men, women, and children.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJtrI8AyVOZMW_jVl-peBThVD6aBFmmirhjArzQuhDtvCvI1oui5DuYCE&s=10',
  },
  {
    id: 4,
    name: 'Home & Kitchen',
    description: 'Appliances and essentials for your home and kitchen.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMP5QJeADzajLXxYku5YkgYbOW4IW4F7DpUOW8zGGGdB_PNI58Oyf8v6Q&s=10',
  }
];

const categoryContainer = document.getElementById('category-container');

categories.forEach((category) => {
  
  categoryContainer.innerHTML += 
        `<a id="category-4" href="#beauty" class="group rounded-xl overflow-hidden bg-gray-50
          hover:shadow-lg transition duration-300">

          <div class="overflow-hidden">
            <img src="${category.image}" alt="${category.name}" class="w-full h-40 sm:h-52 object-cover
                               group-hover:scale-110 transition duration-500">
          </div>

          <div class="p-4 text-center">
            <h3 class="font-semibold text-gray-900 text-lg">
              ${category.name}
            </h3>
            <p class="text-sm text-gray-500 mt-1">
              ${category.description}
            </p>
          </div>

        </a>`;

});
