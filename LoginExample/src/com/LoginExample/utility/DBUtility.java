package com.LoginExample.utility;

import java.sql.Connection;
import java.sql.DriverManager;

public class DBUtility {
	public static Connection makeConnection(){
		Connection c;
		try{
			Class.forName("com.mysql.jdbc.Driver");
			c = DriverManager.getConnection("jdbc:mysql://localhost:3306/onlinebook", "root", "root");
			return c;
		}
		catch(Exception e){
			e.printStackTrace();
		}
		return null;
	}
}
