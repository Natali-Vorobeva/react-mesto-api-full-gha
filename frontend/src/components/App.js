import React, { useEffect, useState } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { api } from '../utils/Api.js';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import EditAvatarPopup from './EditAvatarPopup';
import EditProfilePopup from './EditProfilePopup';
import AddPlacePopup from './AddPlacePopup';
import ConfirmCardDeletionPopup from './ConfirmCardDeletionPopup';

function App() {
	// const currentUserData = React.useContext(CurrentUserContext);
	// const [currentUser, setCurrentUser] = useState({});
	const [currentUser, setCurrentUser] = useState({
    "name": '',
    "about": '',
    "avatar": '',
    "_id": '',
    "cohort": ''
  });
	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
	const [isEditPersonalPopupOpen, setIsEditPersonalPopupOpen] = useState(false);
	const [isAddNewCard, setIsAddNewCard] = useState(false);
	const [selectedCard, setSelectedCard] = useState({});
	const [cards, setCards] = useState([]);
	const [loadingForMain, setLoadingForMain] = useState(false);
	const [isConfirmationCardDeletionPopupOpened, setConfirmationCardDeletionPopupOpened] = useState({
    isOpen: false, card: {}
  });

	useEffect(() => {
		api.getInitialCards()
			.then((res) => {
				setCards([...res]);
				setLoadingForMain(true);
			})
			.catch((err) => {
				console.log(`Ошибка: ${err}`);
			});
	}, []);

	function handleAddNewCard(data) {
		api.addCard(data)
			.then(newCard => {
				setCards([newCard, ...cards ]);
				closeAllPopups();
			})
			.catch(err => {
				console.log(err.status);
				alert(`Ошибка добавления карточки:\n ${err.status}\n ${err.text}`);
			});
	}

	function handleCardLike(card) {
		const isLiked = card.likes.some(i => i._id === currentUser._id);

		api.changeLikeCardStatus(card._id, !isLiked)
			.then((newCard) => {
				setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
			})
			.catch((err) => {
				console.log(`Ошибка: ${err}`);
			});
	};	

	function handleCardDelete(card) {	
		api.deleteCard(card._id)
			.then((res) => {	
				setCards(cards.filter(c => c._id !== card._id));
				closeAllPopups()
			})
			.catch((err) => {
				console.log(`Ошибка: ${err}`);
				alert(`Ошибка удаления карточки:\n ${err.status}\n ${err.text}`);
			});
	}	

	useEffect(() => {
		api.getUserInfo()
			.then((res) => {
				setCurrentUser({ ...res });
			})
			.catch((err) => {
				console.log(`Ошибка: ${err}`);
			});
	}, []);	
	
	function handleUpdateAvatar(avatar) {
		api.changeUserAvatar(avatar)
			.then((updatedUser) => {
				setCurrentUser(updatedUser);				
				closeAllPopups();
			})
			.catch((err) => {
				console.log(`Ошибка: ${err}`);
			});
	}

	const handleUpdateUser = (data) => {
    api.editUserInfo(data)
      .then(updatedUser => {
        setCurrentUser(updatedUser);
        closeAllPopups();
      })
      .catch(err => {
        console.log(`Ошибка: ${err}`);
      });
  }

	function handleEditAvatarClick() {
		setIsEditAvatarPopupOpen(true);
	}

	function handleEditPersonalClick() {
		setIsEditPersonalPopupOpen(true);
	}

	function handleAddNewCardClick() {
		setIsAddNewCard(true);
	}

	function handleCardClick(card) {
		setSelectedCard(card);
	}	
	
	function handleOpenConfirmationCardDeletionPopup(card) {
    setConfirmationCardDeletionPopupOpened({ 
			isOpen: true, card: card 
		});
	}
	function closeAllPopups() {
		setIsEditAvatarPopupOpen(false);
		setIsEditPersonalPopupOpen(false);
		setIsAddNewCard(false);
		setConfirmationCardDeletionPopupOpened({ 
			isOpen: false, card: {} 
		});
		setSelectedCard({});
	};	

	return (
		<>
			<div className="page__content">
				<Header />
				<CurrentUserContext.Provider value={currentUser}>
					<Main
						cards={cards}
						loadingForMain={loadingForMain}
						onEditAvatar={handleEditAvatarClick}
						onEditPersonalData={handleEditPersonalClick}
						onAddNewCard={handleAddNewCardClick}
						onCardClick={handleCardClick}
						onCardLike={handleCardLike}
						onCardDeleteClick={handleOpenConfirmationCardDeletionPopup}
					/>
				</CurrentUserContext.Provider>

				<Footer />
			</div>

			<CurrentUserContext.Provider value={currentUser}>
			<ConfirmCardDeletionPopup	
					onClose={closeAllPopups}
					card={isConfirmationCardDeletionPopupOpened.card}
					isOpen={isConfirmationCardDeletionPopupOpened.isOpen}
					onCardDelete={handleCardDelete}
				/>
				<EditProfilePopup
					isOpen={isEditPersonalPopupOpen}
					onClose={closeAllPopups}
					onUpdateUser={handleUpdateUser}
				/>

				<AddPlacePopup
					isOpen={isAddNewCard}
					onClose={closeAllPopups}
					onAddPlace={handleAddNewCard}
				/>

				<EditAvatarPopup
					isOpen={isEditAvatarPopupOpen}
					onClose={closeAllPopups}
					onUpdateAvatar={handleUpdateAvatar}
				/>
				
				<ImagePopup card={selectedCard} onClose={closeAllPopups} />

			</CurrentUserContext.Provider>
		</>
	)
};

export default App;
