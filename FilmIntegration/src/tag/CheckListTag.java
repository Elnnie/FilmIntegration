package tag;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.BodyTagSupport;

public class CheckListTag extends BodyTagSupport {
	public int doEndTag() throws JspException{
		try {
		if (pageContext.getSession().getAttribute("filmList") == null )  {
			JspWriter out = this.pageContext.getOut();
			out.println("<script language='javascript'>document.location = 'FilmList'</script>");
			return SKIP_PAGE; 
		}
		return EVAL_PAGE;
		} catch (Exception e) {
//			e.printStackTrace();
//			throw new JspException(e.getMessage());
		}
		return 0;
	}
}

