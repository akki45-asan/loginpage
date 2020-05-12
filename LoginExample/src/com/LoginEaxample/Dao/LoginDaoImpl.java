package com.LoginEaxample.Dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import com.LoginExample.utility.DBUtility;


public class LoginDaoImpl implements LoginDao 
{
	Connection c;
	PreparedStatement ps;
	String sql;
	
	@Override
	public boolean customerLogin(String uname, String Password) 
	{
		try{
			c=DBUtility.makeConnection();
			sql="select  username,password from user where username=? and password=?";
			ps=c.prepareStatement(sql);
			ps.setString(1, uname);
			ps.setString(2, Password);
			
			ResultSet rs=ps.executeQuery();
			if(rs.next()){
				return true;
			}else{
				return false;
			}
			
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return false;
	}

	@Override
	public boolean AdminLogin(String uname, String Password) {

		try{
			c=DBUtility.makeConnection();
			sql="select username,password from admin where username=? and password=?";
			ps=c.prepareStatement(sql);
			ps.setString(1, uname);
			ps.setString(2, Password);
			ResultSet rs=ps.executeQuery();
			if(rs.next()){
				return true;
			}else{
				return false;
			}
			
			
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return false;
	}

	@Override
	public boolean changePassword(String uname, String Password) {
		try{
			c=DBUtility.makeConnection();
			sql="update customer set password=? where UserName=?";
			ps=c.prepareStatement(sql);
			ps.setString(1, Password);
			ps.setString(2, uname);
			
			 int x=ps.executeUpdate();
			if(x>0){
				return true;
			}else{
				return false;
			}
			
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return false;

}
}
