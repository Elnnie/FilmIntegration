package business;

import java.io.Serializable;
import java.util.List;

import model.Film;

public class FilmListBean implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private List filmList;
	public FilmListBean(List list){
		filmList = list;
	}
	
	public List getFilmList() {
		return filmList;
	}

	
	public void setFilmList(List filmList) {
		this.filmList = filmList;
	}
	
	public Film getFilm(int index){
		return (Film)filmList.get(index);
	}
	
}
