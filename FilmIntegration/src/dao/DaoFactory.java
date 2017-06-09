package dao;

public class DaoFactory {
	public static FilmDao getFilmDao(){
		return FilmDaoImpl.getInstance();
	}
}
