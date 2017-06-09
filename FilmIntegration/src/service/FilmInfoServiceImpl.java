package service;

import dao.DaoFactory;
import model.FilmInfo;

public class FilmInfoServiceImpl implements FilmInfoService {
	private static FilmInfoService filmService=new FilmInfoServiceImpl();
	public static FilmInfoService getInstance()
	{
		return filmService;
	}
	@Override
	public FilmInfo get(String fid) {
		FilmInfo f = DaoFactory.getFilmDao().get(fid);
		return f;
	}
}
