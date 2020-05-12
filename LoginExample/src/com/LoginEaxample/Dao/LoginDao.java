package com.LoginEaxample.Dao;

public interface LoginDao {
	boolean customerLogin(String uname, String Password);
	boolean AdminLogin(String uname, String Password);
	boolean changePassword(String uname, String Password);
}
