export class API {
	constructor(artist, song){
		this.artist = artist;
		this.song = song;
	}

	async getLyrics(){
		const url = await fetch(`https://api.lyrics.ovh/v1/${this.artist}/${this.song}`);
		const result = await url.json();
		return result;
	}
}