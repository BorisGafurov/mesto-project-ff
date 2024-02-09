
// @todo: Темплейт карточки
    
    
// @todo: DOM узлы
    const cardTemplate = document.querySelector('#card-template').content;
    const cardContainer = document.querySelector('.places__list');
    const addButton = document.querySelector('.profile__add-button');
// @todo: Функция создания карточки
     function addCard(create, deleteCallback) {
  
  const clonTemplate = cardTemplate.cloneNode(true).querySelector('.card');

  
  const cardImage = clonTemplate.querySelector('.card__image');
  cardImage.src = create.link;
  cardImage.alt = create.name;

  const cardTitle = clonTemplate.querySelector('.card__title');
  cardTitle.textContent = create.name;

 
  const deleteButton = clonTemplate.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', function() {
    deleteCallback(clonTemplate);
  });

  return clonTemplate;
}
// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
const placesList = document.querySelector('.places__list');

initialCards.forEach(function(cardData) {
  const cardElement = addCard(cardData, function(card) {
    
    card.remove();
  });

  placesList.append(cardElement);
});


   


