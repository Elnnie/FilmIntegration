package service;

import model.Film;

public class FilmInfoServiceImpl implements FilmInfoService {
	private static FilmInfoService filmService=new FilmInfoServiceImpl();
	public static FilmInfoService getInstance()
	{
		return filmService;
	}
	@Override
	public Film get(String fid) {
		Film f = new Film();
		f.setFname("神奇女侠");
		return f;
	}
}
