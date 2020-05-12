package com.LoginExample.servlet;

import java.io.IOException;
import java.sql.*;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.LoginEaxample.Dao.LoginDaoImpl;
import com.LoginExample.pojo.loginInfo;




@WebServlet("/LoginServlet")
public class LoginServlet extends HttpServlet {
	LoginDaoImpl ld = new LoginDaoImpl();
//	CustomerDaoImpl cd=new CustomerDaoImpl();
	loginInfo lc=new  loginInfo();
	Connection c;
	boolean flag;
	RequestDispatcher rd;
	
	private static final long serialVersionUID = 1L;
       
   
    public LoginServlet() {
        super();
        
    }
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession s=request.getSession();
		s.removeAttribute("uname");
		response.sendRedirect("index.jsp");
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession s=request.getSession();
		String op=request.getParameter("action");
		if(op!=null && op.equals("Login"))
		{
			
			//System.out.println(type);
			String username = request.getParameter("uname");
			String password = request.getParameter("upassword");
			
				flag = ld.customerLogin(username, password);
				if(flag==true){
//					s.setAttribute("CustomerName", username);
					response.sendRedirect("index.jsp");
					
				}else{
					request.setAttribute("Error", "Something Went Wrong Plz Try Again!!");
					rd = request.getRequestDispatcher("error.jsp");
					rd.forward(request, response);
				}
		
			/*else if(type.equals("admin")){
				flag = ld.AdminLogin(username, password);
				if(flag==true){
					s.setAttribute("AdminName", username);
					response.sendRedirect("index.jsp");
				}else{
					//response.sendRedirect("Error.html");
					request.setAttribute("Error", "Something Went Wrong Plz Try Again!!");
					rd = request.getRequestDispatcher("Home.jsp");
					rd.forward(request, response);
				}
			}*/
		}
		/*else if(op!=null && op.equals("forgetpass"))
		{
			String cusername = request.getParameter("nametxt");
			String cpassword = request.getParameter("passtxt");
			flag = ld.changePassword(cusername, cpassword);
			if(flag==true){
				//response.sendRedirect("Login.jsp");
				request.setAttribute("changePass", "Password Change Successfully");
				rd = request.getRequestDispatcher("Login.jsp");
				rd.forward(request, response);
			}else{
				//response.sendRedirect("Error.html");
				request.setAttribute("Error", "Something Went Wrong Plz Try Again!!");
				rd = request.getRequestDispatcher("Login.jsp");
				rd.forward(request, response);
			}
		}*/
				
	}

}
