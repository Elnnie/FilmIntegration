package model;

import java.util.Date;

public class Film { 
	private String fid; //id 自定义??
	private String fname; //影片名称
	private String first_run; //首映
	private String type; //类型
	private String area; // 地区
	private String time; //时长
	private String director; //导演
	private String leading; //主演
	private String point_taopp; //淘票票评分
	private String point_maoyan; //猫眼评分
	private String point_nuomi; //百度糯米评分
	private String story; //剧情
	public String getFid() {
		return fid;
	}
	public void setFid(String fid) {
		this.fid = fid;
	}
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public String getFirst_run() {
		return first_run;
	}
	public void setFirst_run(String first_run) {
		this.first_run = first_run;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getArea() {
		return area;
	}
	public void setArea(String area) {
		this.area = area;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public String getDirector() {
		return director;
	}
	public void setDirector(String director) {
		this.director = director;
	}
	public String getLeading() {
		return leading;
	}
	public void setLeading(String leading) {
		this.leading = leading;
	}
	public String getPoint_taopp() {
		return point_taopp;
	}
	public void setPoint_taopp(String point_taopp) {
		this.point_taopp = point_taopp;
	}
	public String getPoint_maoyan() {
		return point_maoyan;
	}
	public void setPoint_maoyan(String point_maoyan) {
		this.point_maoyan = point_maoyan;
	}
	public String getPoint_nuomi() {
		return point_nuomi;
	}
	public void setPoint_nuomi(String point_nuomi) {
		this.point_nuomi = point_nuomi;
	}
	public String getStory() {
		return story;
	}
	public void setStory(String story) {
		this.story = story;
	}
	
}
