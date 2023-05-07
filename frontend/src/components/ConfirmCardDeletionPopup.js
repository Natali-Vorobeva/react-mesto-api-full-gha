import React from 'react';
import PopupWithForm from './PopupWithForm';

export default function ConfirmCardDeletionPopup({ card, onCardDelete, ...commonProps } ) {

	function handleSubmit(evt) {		
    evt.preventDefault();
		  onCardDelete(card);
  };

	return (
		<PopupWithForm
					name={'delete-place'}
					title={"Вы уверены?"}
					buttonText="Да"					
					onSubmit={handleSubmit}		
					{...commonProps}		
				/>
					
				
	)
}