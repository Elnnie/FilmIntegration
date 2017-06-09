package dao;

public class DaoFactory {
	public static FilmInfoDao getFilmDao(){
		return FilmInfoDaoImpl.getInstance();
	}
	
	public static FilmListDao getFilmListDao(){
		return FilmListDaoImpl.getInstance();
	}
}
