package service;

public class ServiceFactory {
	public static FilmInfoService getFilmInfoService()
	{
		return FilmInfoServiceImpl.getInstance();
	}
	public static FilmListService getFilmListService()
	{
		return FilmListServiceImpl.getInstance();
	}
}
