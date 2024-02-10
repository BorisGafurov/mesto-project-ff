
// @todo: Темплейт карточки
    
    
// @todo: DOM узлы
    const cardTemplate = document.querySelector('#card-template').content;
    const cardContainer = document.querySelector('.places__list');
    const addButton = document.querySelector('.profile__add-button');
// @todo: Функция создания карточки
     function createCard(cardData, deleteCallback) { 
    const clonTemplate = cardTemplate.cloneNode(true).querySelector('.card');
    const cardImage = clonTemplate.querySelector('.card__image');
    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;
    
    const cardTitle = clonTemplate.querySelector('.card__title');
    cardTitle.textContent = cardData.name;

    const deleteButton = clonTemplate.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', function() {
    deleteCallback(clonTemplate);
    });

    return clonTemplate;
}
// @todo: Функция удаления карточки
    function deleteCard(card) {
    card.remove();
    }
// @todo: Вывести карточки на страницу
    initialCards.forEach(function(cardData) {
    const cardElement = createCard(cardData, deleteCard) 
    cardContainer.append(cardElement);
    });


   


