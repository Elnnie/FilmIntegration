package service;

import dao.DaoFactory;
import model.Film;

public class FilmInfoServiceImpl implements FilmInfoService {
	private static FilmInfoService filmService=new FilmInfoServiceImpl();
	public static FilmInfoService getInstance()
	{
		return filmService;
	}
	@Override
	public Film get(String fid) {
		Film f = DaoFactory.getFilmDao().get(fid);
		return f;
	}
}
