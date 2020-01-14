import {searchForm, resultDiv, messageDiv, artistInput, songInput} from './ui.js';
import { API } from './api.js';

searchForm.addEventListener('submit', e => {
	e.preventDefault();

	if(artistInput.value === '' || songInput.value === ''){
		messageDiv.innerHTML = 'Error! All fields are mandatory.';
		messageDiv.classList.add('error');
		// Remove message
		setTimeout(()=>{
			messageDiv.innerHTML = '';
			messageDiv.classList.remove('error');
		}, 3000);
	}else{
		// Query REST API
		const api = new API(artistInput.value, songInput.value);
		api.getLyrics()
		.then(data => {
			if(data.lyrics){
				resultDiv.textContent = data.lyrics;
			}else{
				messageDiv.innerHTML = 'Error! No lyrics found.';
				messageDiv.classList.add('error');
				// Remove message
				setTimeout(()=>{
					messageDiv.innerHTML = '';
					messageDiv.classList.remove('error');
					searchForm.reset();
				}, 3000);		
			}
		})
		.catch(err => {
			console.log(err);
		});
	}
});